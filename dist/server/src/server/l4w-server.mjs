import { join, resolve } from "path";
import express from "express";
import compression from "compression";
import { readFile } from "fs";
import { createServer } from "https";
import { HttpStatus, ResourceType } from "../common/Constants";
import { Utils } from "../common/Utils";
import { session } from "./session";
import * as utils from "./utils";
import { isDevEnv, security } from "./security";
import { database } from "./database";
import { services } from "./services";
database.init().then(onDatabaseInit);
function onDatabaseInit(flagDBAvailable) {
    let app = express();
    app.set("port", (process.env.PORT || 5000));
    if (flagDBAvailable) {
        app.use(session.init());
    }
    app.use(compression());
    app.use(function (req, res, next) {
        if (req.path.substr(-1) === "/" && req.path.length > 1) {
            let query = req.url.slice(req.path.length);
            res.redirect(HttpStatus.MOVED_PERMANENTLY, req.path.slice(0, -1) + query);
        }
        else {
            next();
        }
    });
    app.use(function (req, res, next) {
        security.requestFilter(req, res);
        next();
    });
    const viewPath = resolve("views");
    app.all("/", function (request, response) {
        utils.sendFile(viewPath, "home.html", response);
    });
    app.all("/edit", function (request, response) {
        utils.sendFile(viewPath, "hub.html", response);
    });
    app.all("/edit/:editor", function (request, response) {
        let editor = request.params.editor;
        utils.sendFile(viewPath, editor + ".html", response);
    });
    app.all("/test", function (request, response) {
        utils.sendFile(viewPath, "test.html", response);
    });
    app.all("/privacy", function (request, response) {
        utils.sendFile(viewPath, "privacy.html", response);
    });
    const jsPath = resolve(join("dist", "client"));
    app.get("/js/:script", function (request, response) {
        let file = request.params.script;
        if (isDevEnv()) {
            file = file.replace(".min.", ".");
        }
        utils.sendFile(jsPath, file, response);
    });
    let libPath = resolve(join("assets", "lib"));
    app.get("/lib/:script", function (request, response) {
        let file = request.params.script;
        utils.sendFile(libPath, file, response);
    });
    app.get("/data/:type/:file", function (request, response) {
        let file = request.params.file;
        let type = Utils.convertStringToEnum(ResourceType, request.params.type);
        if (type === ResourceType.CONFIGURATION) {
            let filePath = resolve(join("data", ResourceType.CONFIGURATION));
            utils.sendFile(filePath, file, response);
            return;
        }
        else {
            let lang = request.headers.lang;
            database.read(type, file, session.getUser(request), response, lang);
        }
    });
    const assetsPath = resolve("assets");
    app.get("/assets/:file", function (request, response) {
        let file = request.params.file;
        utils.sendFile(assetsPath, file, response);
    });
    app.get("/assets/:type/:file", function (request, response) {
        let file = request.params.file;
        let type = Utils.convertStringToEnum(ResourceType, request.params.type);
        let filePath = resolve(join("assets", type));
        utils.sendFile(filePath, file, response);
    });
    app.get("/assetlist/:type/", function (request, response) {
        let type = Utils.convertStringToEnum(ResourceType, request.params.type);
        let filePath = resolve(join("assets", type));
        utils.listFiles(filePath, response);
    });
    const stylePath = resolve(join("style"));
    app.get("/style/:file", function (request, response) {
        let file = request.params.file;
        utils.sendFile(stylePath, file, response);
    });
    app.get("/style/:path/:file", function (request, response) {
        let pathS = request.params.path;
        let file = request.params.file;
        let filePath = resolve(join("style", pathS));
        utils.sendFile(filePath, file, response);
    });
    let workersPath = resolve(join("src", "workers"));
    app.get("/workers/:script", function (request, response) {
        let file = request.params.script;
        response.set("Service-Worker-Allowed", "..");
        utils.sendFile(workersPath, file, response);
    });
    app.post("/edit/:type/:id", function (request, response) {
        if (session.isAuthenticated(request)) {
            let fileId = request.params.id;
            let type = Utils.convertStringToEnum(ResourceType, request.params.type);
            security.getBodyData(request, response, function (data) {
                database.write(type, fileId, data, session.getUser(request), response);
            });
        }
        else {
            response.status(HttpStatus.FORBIDDEN).send("");
        }
    });
    app.get("/news", function (request, response) {
        if (session.isAuthenticated(request)) {
            database.getNews(session.getUser(request), response);
        }
        else {
            response.status(HttpStatus.FORBIDDEN).send("");
        }
    });
    app.get("/v", function (request, response) {
        readFile("package.json", "utf8", function (err, data) {
            if (err !== null) {
                console.error(err);
                response.status(HttpStatus.INTERNAL_SERVER_ERROR).send("");
            }
            else {
                let packageJson = JSON.parse(data);
                response.send(packageJson.name + " " + packageJson.version);
            }
        });
    });
    app.post("/auth", function (request, response) {
        let authResponse;
        session.doLogin(request, response, () => {
            authResponse = {
                result: true
            };
            try {
                response.json(authResponse);
            }
            catch (e) {
                console.warn("Exception catched on response.json(): ");
                console.trace(e);
            }
        }, () => {
            console.error("Login failed");
            authResponse = {
                result: false
            };
            response.json(authResponse);
        });
    });
    app.get("/logout", function (request, response) {
        session.doLogout(request, response, () => {
            response.send("");
        });
    });
    app.post("/issue", function (request, response) {
        security.getBodyData(request, response, (data) => {
            let req;
            try {
                req = JSON.parse(data);
            }
            catch (e) {
                console.error("Cannot parse body: ");
                console.error(data);
                response.status(HttpStatus.BAD_REQUEST).send("");
                return;
            }
            let reCaptchaCallback = function (success) {
                if (success) {
                    services.openGitHubIssue(request, response, req);
                }
                else {
                    console.error("ReCaptcha token validation failed");
                    response.status(HttpStatus.BAD_REQUEST).send("");
                }
            };
            services.validateReCaptchaToken(request, response, reCaptchaCallback, req.captchaToken, request.ip);
        });
    });
    app.all("/teapot", function (request, response) {
        response.status(HttpStatus.IM_A_TEAPOT).send("🫖");
    });
    let server;
    let port = app.get("port");
    if (!isDevEnv()) {
        server = app.listen(port);
    }
    else {
        server = createServer(security.getLocalServerOptions(), app).listen(port);
    }
    server.on("listening", function () {
        console.log("L4W is running on port", port);
    }).on("error", function (err) {
        console.trace(err);
        if (err.code === "EADDRINUSE") {
            console.error("Another instance is already running on port " + err.port);
        }
        else {
            console.error(err);
        }
        process.exit();
    });
}
