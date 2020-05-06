//@ts-ignore TS1192
import path from "path"
//@ts-ignore TS1192
import express, { Request, Response, NextFunction } from "express"
import { Express } from "express-serve-static-core"
//@ts-ignore TS1192
import compression from "compression"
import { readFile } from "fs"
import { createServer } from "https"

import { HttpStatus, ResourceType } from "../common/Constants"
import { Utils } from "../common/Utils"
import { session } from "./session"
import * as utils from "./utils"
import { security } from "./security"
import { database } from "./database"
import { IAuthResponse, IIssueRequest } from "../common/ServerAPI"
import { services } from "./services"
import { emptyFz } from "../client/core/util/Commons"

//TODO import.meta require target=esnext and module=esnext
// see also: https://github.com/Microsoft/TypeScript/issues/24082
//let dirname = path.dirname(new URL(import.meta.url).pathname);
let dirname = process.cwd() + path.sep;

// Initialization
let app: Express = express();
app.use(compression());
app.set("port",(process.env.PORT || 5000));
database.init().then(
    function() {
        // Initialize session middleware only when DB is available
        app.use(session.init());
    }
).catch(emptyFz);
let server;
if(!security.isDevEnv()) {
    // Heroku will take care of HTTPS
    server = app.listen(app.get("port"));
} else {
    // Setup HTTPS with self-signed cert for local dev
    server = createServer(security.getLocalServerOptions(), app).listen(app.get("port"));
}
server.on("listening", function() {
    console.log("L4W is running on port", app.get("port"));
}).on("error", function(err: any) {
    if(err.code === "EADDRINUSE") {
        console.error("Another instance is already running on port " + err.port);
    } else {
        console.error(err);
    }
    process.exit();
});


// Middleware
app.use(function(req: Request, res: Response, next: NextFunction) {
    // Remove trailing slash
    if (req.path.substr(-1) === "/" && req.path.length > 1) {
        let query = req.url.slice(req.path.length);
        res.redirect(HttpStatus.MOVED_PERMANENTLY, req.path.slice(0, -1) + query);
    } else {
        next();
    }
});
app.use(function(req: Request, res: Response, next: NextFunction) {
    security.requestFilter(req, res);
    next();
});

// Views redirection
app.all("/", function(request: Request, response: Response) {
    utils.sendFile(dirname + path.sep + "views" + path.sep, "home.html", response);
});
app.all("/edit", function(request: Request, response: Response) {
    utils.sendFile(dirname + path.sep + "views" + path.sep, "hub.html", response);
});
app.all("/edit/:editor", function(request: Request, response: Response) {
    let editor = request.params.editor;
    utils.sendFile(dirname + path.sep + "views" + path.sep + "editor" + path.sep, editor + ".html", response);
});
app.all("/test", function(request: Request, response: Response) {
    utils.sendFile(dirname + path.sep + "views" + path.sep, "test.html", response);
});
app.all("/privacy", function(request: Request, response: Response) {
    utils.sendFile(dirname + path.sep + "views" + path.sep, "privacy.html", response);
});

// Resources redirection
app.get("/js/:script", function(request: Request, response: Response) {
    let file: string = request.params.script;
    let filePath = path.resolve(dirname + "dist" + path.sep + "client");
    if(security.isDevEnv()) {
        // In development, use files with sourcemaps
        file = file.replace(".min.",".");
    }
    utils.sendFile(filePath, file, response);
});
app.get("/lib/:script", function(request: Request, response: Response) {
    let file = request.params.script;
    let filePath = path.resolve(dirname + "assets" + path.sep + "lib");
    utils.sendFile(filePath, file, response);
});
app.get("/data/:type/:file", function(request: Request, response: Response) {
    let file = request.params.file;
    let type: ResourceType = Utils.convertStringToEnum<ResourceType>(ResourceType, request.params.type);
    if (type === ResourceType.CONFIGURATION) {
        let filePath = path.resolve(dirname + "data" + path.sep + ResourceType.CONFIGURATION);
        utils.sendFile(filePath, file, response);
        return;
    } else {
        let lang = <string | undefined> request.headers.lang;
        database.read(type, file, session.getUser(request), response, lang);
    }
});
app.get("/assets/:file", function(request: Request, response: Response) {
    let file = request.params.file;
    let filePath = path.resolve(dirname + "assets");
    utils.sendFile(filePath, file, response);
});
app.get("/assets/:type/:file", function(request: Request, response: Response) {
    let file = request.params.file;
    let type: ResourceType = Utils.convertStringToEnum<ResourceType>(ResourceType, request.params.type);
    let filePath = path.resolve(dirname + "assets" + path.sep + type);
    utils.sendFile(filePath, file, response);
});
app.get("/assetlist/:type/", function(request: Request, response: Response) {
    let type: ResourceType = Utils.convertStringToEnum<ResourceType>(ResourceType, request.params.type);
    let filePath = path.resolve(dirname + "assets" + path.sep + type);
    utils.listFiles(filePath, response);
});
app.get("/style/:file", function(request: Request, response: Response) {
    let file = request.params.file;
    let filePath = path.resolve(dirname + "style");
    utils.sendFile(filePath, file, response);
});
app.get("/style/:path/:file", function(request: Request, response: Response) {
    let pathS = request.params.path;
    let file = request.params.file;
    let filePath = path.resolve(dirname + "style" + path.sep + pathS);
    utils.sendFile(filePath, file, response);
});
app.get("/workers/:script", function(request: Request, response: Response) {
    let file = request.params.script;
    let filePath = path.resolve(dirname + "src" + path.sep + "workers");
    response.set("Service-Worker-Allowed", "..")
    utils.sendFile(filePath, file, response);
});

// Server logic
app.post("/edit/:type/:id", function(request: Request, response: Response) {
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
app.get("/news", function(request: Request, response: Response) {
    if(session.isAuthenticated(request)) {
       database.getNews(session.getUser(request)!, response);
    } else {
        response.status(HttpStatus.FORBIDDEN).send("");
    }
});
app.get("/v", function(request: Request, response: Response) {
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
app.post("/auth", function(request: Request, response: Response) {
    let authResponse: IAuthResponse;
    session.doLogin(request, response, function() {
        authResponse = {
            result: true
        }
        response.json(authResponse);
    },
    function() {
        console.error("Login failed");
        authResponse = {
            result: false
        }
        response.json(authResponse);
    });
});
app.get("/logout", function(request: Request, response: Response) {
    session.doLogout(request, response, function() {
        response.send("");
    });
});
app.post("/issue", function(request: Request, response: Response) {
    security.getBodyData(request, response, function(data: any){
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
app.post("/teapot", function(request: Request, response: Response) {
    response.status(HttpStatus.IM_A_TEAPOT).send("🫖");
});
