import { join, resolve } from "path"
//@ts-ignore
import express from "express"
import { Request as ExpressRequest, Response as ExpressResponse, NextFunction } from "express"
import { Express } from "express-serve-static-core"
//@ts-ignore
import compression from "compression"
import { readFile } from "fs"
import { createServer } from "https"

import { HttpStatus, ResourceType } from "../common/Constants"
import { Utils } from "../common/Utils"
import { session } from "./session"
import * as utils from "./utils"
import { isDevEnv, security } from "./security"
import { database } from "./database"
import { IAuthResponse, IIssueRequest } from "../common/ServerAPI"
import { services } from "./services"

// Database initialization
database.init().then(onDatabaseInit);

// Server initialization (will initialize session middleware only when DB is available)
function onDatabaseInit(flagDBAvailable: boolean) {
    let app: Express = express();
    app.set("port",(process.env.PORT || 5000));

    // Middleware
    if(flagDBAvailable) {
        app.use(session.init());
    }
    app.use(compression());
    app.use(function(req: ExpressRequest, res: ExpressResponse, next: NextFunction) {
        // Remove trailing slash
        if (req.path.substr(-1) === "/" && req.path.length > 1) {
            let query = req.url.slice(req.path.length);
            res.redirect(HttpStatus.MOVED_PERMANENTLY, req.path.slice(0, -1) + query);
        } else {
            next();
        }
    });
    app.use(function(req: ExpressRequest, res: ExpressResponse, next: NextFunction) {
        security.requestFilter(req, res);
        next();
    });

    // Views redirection
    const viewPath = resolve("views");
    app.all("/", function(request: ExpressRequest, response: ExpressResponse) {
        utils.sendFile(viewPath, "home.html", response);
    });
    app.all("/edit", function(request: ExpressRequest, response: ExpressResponse) {
        utils.sendFile(viewPath, "hub.html", response);
    });
    app.all("/edit/:editor", function(request: ExpressRequest, response: ExpressResponse) {
        let editor = request.params.editor;
        utils.sendFile(viewPath, editor + ".html", response);
    });
    app.all("/test", function(request: ExpressRequest, response: ExpressResponse) {
        utils.sendFile(viewPath, "test.html", response);
    });
    app.all("/privacy", function(request: ExpressRequest, response: ExpressResponse) {
        utils.sendFile(viewPath, "privacy.html", response);
    });

    // Resources redirection
    const jsPath = resolve(join("dist", "client"));
    app.get("/js/:script", function(request: ExpressRequest, response: ExpressResponse) {
        let file: string = request.params.script;
        if(isDevEnv()) {
            // In development, use files with sourcemaps
            file = file.replace(".min.",".");
        }
        utils.sendFile(jsPath, file, response);
    });
    let libPath = resolve(join("assets", "lib"));
    app.get("/lib/:script", function(request: ExpressRequest, response: ExpressResponse) {
        let file = request.params.script;
        utils.sendFile(libPath, file, response);
    });
    app.get("/data/:type/:file", function(request: ExpressRequest, response: ExpressResponse) {
        let file = request.params.file;
        let type: ResourceType = Utils.convertStringToEnum<ResourceType>(ResourceType, request.params.type);
        if (type === ResourceType.CONFIGURATION) {
            let filePath = resolve(join("data", ResourceType.CONFIGURATION));
            utils.sendFile(filePath, file, response);
            return;
        } else {
            let lang = <string | undefined> request.headers.lang;
            database.read(type, file, session.getUser(request), response, lang);
        }
    });
    const assetsPath = resolve("assets");
    app.get("/assets/:file", function(request: ExpressRequest, response: ExpressResponse) {
        let file = request.params.file;
        utils.sendFile(assetsPath, file, response);
    });
    app.get("/assets/:type/:file", function(request: ExpressRequest, response: ExpressResponse) {
        let file = request.params.file;
        let type: ResourceType = Utils.convertStringToEnum<ResourceType>(ResourceType, request.params.type);
        let filePath = resolve(join("assets", type));
        utils.sendFile(filePath, file, response);
    });
    app.get("/assetlist/:type/", function(request: ExpressRequest, response: ExpressResponse) {
        let type: ResourceType = Utils.convertStringToEnum<ResourceType>(ResourceType, request.params.type);
        let filePath = resolve(join("assets", type));
        utils.listFiles(filePath, response);
    });
    const stylePath = resolve(join("style"));
    app.get("/style/:file", function(request: ExpressRequest, response: ExpressResponse) {
        let file = request.params.file;
        utils.sendFile(stylePath, file, response);
    });
    app.get("/style/:path/:file", function(request: ExpressRequest, response: ExpressResponse) {
        let pathS = request.params.path;
        let file = request.params.file;
        let filePath = resolve(join("style", pathS));
        utils.sendFile(filePath, file, response);
    });
    let workersPath = resolve(join("src", "workers"));
    app.get("/workers/:script", function(request: ExpressRequest, response: ExpressResponse) {
        let file = request.params.script;
        response.set("Service-Worker-Allowed", "..")
        utils.sendFile(workersPath, file, response);
    });

    // Server logic
    app.post("/edit/:type/:id", function(request: ExpressRequest, response: ExpressResponse) {
        if(session.isAuthenticated(request)) {
            let fileId = request.params.id;
            let type: ResourceType = Utils.convertStringToEnum<ResourceType>(ResourceType, request.params.type);
            security.getBodyData(request, response, function(data: any){
                database.write(type, fileId, data, session.getUser(request)!, response);
            });
        } else {
            response.status(HttpStatus.FORBIDDEN).send("");
        }
    });
    app.get("/news", function(request: ExpressRequest, response: ExpressResponse) {
        if(session.isAuthenticated(request)) {
            database.getNews(session.getUser(request)!, response);
        } else {
            response.status(HttpStatus.FORBIDDEN).send("");
        }
    });
    app.get("/v", function(request: ExpressRequest, response: ExpressResponse) {
        readFile("package.json", "utf8", function(err: NodeJS.ErrnoException | null, data: string | Buffer) {
            if(err !== null) {
                console.error(err);
                response.status(HttpStatus.INTERNAL_SERVER_ERROR).send("");
            } else {
                let packageJson = JSON.parse(<string> data);
                response.send(packageJson.name + " " + packageJson.version);
            }
        });
    });
    app.post("/auth", function(request: ExpressRequest, response: ExpressResponse) {
        let authResponse: IAuthResponse;
        session.doLogin(request, response,
            () => {
                authResponse = {
                    result: true
                }
                try {
                    response.json(authResponse);
                } catch(e) {
                    console.warn("Exception catched on response.json(): ");
                    console.trace(e);
                }
            },
            () => {
                console.error("Login failed");
                authResponse = {
                    result: false
                }
                response.json(authResponse);
            }
        );
    });
    app.get("/logout", function(request: ExpressRequest, response: ExpressResponse) {
        session.doLogout(request, response, () => {
            response.send("");
        });
    });
    app.post("/issue", function(request: ExpressRequest, response: ExpressResponse) {
        security.getBodyData(request, response, (data: any) => {
            let req: IIssueRequest;
            try {
                req = JSON.parse(data);
            } catch(e) {
                console.error("Cannot parse body: ");
                console.error(data);
                response.status(HttpStatus.BAD_REQUEST).send("");
                return;
            }
            let reCaptchaCallback = function(success: boolean) {
                if(success) {
                    services.openGitHubIssue(request, response, req);
                } else {
                    console.error("ReCaptcha token validation failed");
                    response.status(HttpStatus.BAD_REQUEST).send("");
                }
            }
            services.validateReCaptchaToken(request, response, reCaptchaCallback, req.captchaToken, request.ip);
        });
    });
    app.get("/health", function(request: ExpressRequest, response: ExpressResponse) {
        response.status(HttpStatus.OK).send("");
    });
    app.all("/teapot", function(request: ExpressRequest, response: ExpressResponse) {
        response.status(HttpStatus.IM_A_TEAPOT).send("🫖");
    });

    let server;
    let port = app.get("port");
    if(!isDevEnv()) {
        // Heroku will take care of HTTPS
        server = app.listen(port);
    } else {
        // Setup HTTPS with self-signed cert for local dev
        server = createServer(security.getLocalServerOptions(), app).listen(port);
    }
    server.on("listening", function() {
        console.log("L4W is running on port", port);
    }).on("error", function(err: any) {
        console.trace(err);
        if(err.code === "EADDRINUSE") {
            console.error("Another instance is already running on port " + err.port);
        } else {
            console.error(err);
        }
        process.exit();
    });
}