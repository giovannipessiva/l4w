//@ts-ignore TS1192
import path from "path"
//@ts-ignore TS1192
import express from "express";
//@ts-ignore TS1192
import compression from "compression";
import { NextFunction, Request, Response } from "express-serve-static-core";

import { HttpStatus, ResourceType } from "../../common/src/Constants"
import { convertStringToEnum } from "../../common/src/Utils"
import { session } from "./session"
import * as utils from "./utils"
import { security } from "./security"
import { database } from "./database"
import { mapper } from "./mapper"

//TODO import.meta require target=esnext and module=esnext
// see also: https://github.com/Microsoft/TypeScript/issues/24082
//let dirname = path.dirname(new URL(import.meta.url).pathname);
let dirname = process.cwd() + path.sep + "server" + path.sep;

let app = express();
app.use(compression());
app.use(session.init());
app.set("port",(process.env.PORT || 5000));

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
    security.requestFilter(req, res, next)
});

// Views redirection
app.get("/", function(request: Request, response: Response) {
    if(!utils.isEmpty(request.query.logout) && request.query.logout === "1") {
        session.doLogout(request,response,function() {
            utils.sendFile(dirname + path.sep + "views" + path.sep, "home.html", response);
        });
    } else {
        if(session.isAuthenticated(request)) {
           database.logUserSessionAccess(session.getUser(request)!);
            utils.sendFile(dirname + path.sep + "views" + path.sep, "home-auth.html", response);
        } else {
            utils.sendFile(dirname + path.sep + "views" + path.sep, "home.html", response);
        };
    }
});
app.post("/", function(request: Request, response: Response) {
    session.doLogin(request,response,function() {
        utils.sendFile(dirname + path.sep + "views" + path.sep, "home-auth.html", response);
    }, function() {
        utils.sendFile(dirname + path.sep + "views" + path.sep, "home.html", response);
    });
});
app.get("/edit", function(request: Request, response: Response) {
    if(!session.isAuthenticated(request)) {
        utils.sendFile(dirname + path.sep + "views" + path.sep, "auth.html", response);
    } else {
        database.logUserSessionAccess(session.getUser(request)!);
        utils.sendFile(dirname + path.sep + "views" + path.sep, "hub.html", response);
    }
});
app.post("/edit", function(request: Request, response: Response) {
    session.doLogin(request,response,function() {
        utils.sendFile(dirname + path.sep + "views" + path.sep, "hub.html", response);
    }, function() {
        utils.sendFile(dirname + path.sep + "views" + path.sep, "auth.html", response);
    });
});
app.get("/edit/:editor", function(request: Request, response: Response) {
    if(!session.isAuthenticated(request)) {
        utils.sendFile(dirname + path.sep + "views" + path.sep, "auth.html", response);
    } else {
        database.logUserSessionAccess(session.getUser(request)!);
        let editor = request.params.editor;
        utils.sendFile(dirname + path.sep + "views" + path.sep + "editor" + path.sep, editor + ".html", response);
    }
});

app.all("/test", function(request: Request, response: Response) {
    utils.sendFile(dirname + path.sep + "views" + path.sep, "test.html", response);
});

app.get("/logout", function(request: Request, response: Response) {
    session.doLogout(request,response,function() {
        utils.sendFile(dirname + path.sep + "views" + path.sep, "auth.html", response);
    });
});

// Resources redirection
app.get("/js/:script", function(request: Request, response: Response) {
    let file: string = request.params.script;
    let filePath = path.resolve(dirname + "/../client/dist");
    if(security.isDevEnv()) {
        // In development, use files with sourcemaps
        file = file.replace(".min.",".");
    }
    utils.sendFile(filePath, file, response);
});
app.get("/lib/:script", function(request: Request, response: Response) {
    let file = request.params.script;
    let filePath = path.resolve(dirname + "/../client/lib");
    utils.sendFile(filePath, file, response);
});
app.get("/data/:type/", function(request: Request, response: Response) {
    let type: ResourceType = convertStringToEnum<ResourceType>(ResourceType, request.params.type);
    let user = undefined;
    if(session.isAuthenticated(request)) {
        user = session.getUser(request);
    }
    database.read(type, undefined, user, response);
});
app.get("/data/:type/:file", function(request: Request, response: Response) {
    let file = request.params.file;
    let type: ResourceType = convertStringToEnum<ResourceType>(ResourceType, request.params.type);
    // FIXME properties should be in a configuration file client side
    if (type === ResourceType.PROPERTIES) {
        let filePath = path.resolve(dirname + "/../client/data/" + type);
        utils.sendFile(filePath, file, response);
        return;
    }
    let lang = <string | undefined> request.headers.lang;
    database.read(type, file, session.getUser(request), response, lang);
});
app.get("/assets/:file", function(request: Request, response: Response) {
    let file = request.params.file;
    let filePath = path.resolve(dirname + "/../client/assets");
    utils.sendFile(filePath, file, response);
});
app.get("/assets/:type/:file", function(request: Request, response: Response) {
    let file = request.params.file;
    let type: ResourceType = convertStringToEnum<ResourceType>(ResourceType, request.params.type);
    let filePath = path.resolve(dirname + "/../client/assets/" + type);
    utils.sendFile(filePath, file, response);
});
app.get("/assetlist/:type/", function(request: Request, response: Response) {
    let type: ResourceType = convertStringToEnum<ResourceType>(ResourceType, request.params.type);
    let filePath = path.resolve(dirname + "/../client/assets/" + type);
    utils.listFiles(filePath, response);
});
app.get("/style/:file", function(request: Request, response: Response) {
    let file = request.params.file;
    let filePath = path.resolve(dirname + "/views/style");
    utils.sendFile(filePath, file, response);
});
app.get("/style/:type/:file", function(request: Request, response: Response) {
    let type: ResourceType = convertStringToEnum<ResourceType>(ResourceType, request.params.type);
    let file = request.params.file;
    let filePath = path.resolve(dirname + "/views/style/"+type);
    utils.sendFile(filePath, file, response);
});
app.get("/workers/:script", function(request: Request, response: Response) {
    let file = request.params.script;
    let filePath = path.resolve(dirname + "/../workers");
    response.set("Service-Worker-Allowed", "..")
    utils.sendFile(filePath, file, response);
});

// Server logic
app.post("/edit/maps", function(request: Request, response: Response) {
    if(session.isAuthenticated(request)) {
        security.getBodyData(request,response,function(data: any){
            mapper.updateMaps(data, session.getUser(request)!, response);
        });
    } else {
        response.status(HttpStatus.FORBIDDEN).send("");
    }
});
app.post("/edit/:type/:id", function(request: Request, response: Response) {
    if(session.isAuthenticated(request)) {
        let fileId = request.params.id;
        let type: ResourceType = convertStringToEnum<ResourceType>(ResourceType, request.params.type);
        security.getBodyData(request, response, function(data: any){
            switch(type) {
            case ResourceType.MAP:
                mapper.updateMap(fileId, data, session.getUser(request)!, response);
                break;
            case ResourceType.SAVE:
            case ResourceType.TILESET:
               database.write(type, fileId, data, session.getUser(request)!, response);
                break;
            }
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

// Initialize DB connection
database.init().then(
    function() {
        app.listen(app.get("port"), function() {
            console.log("L4W is running on port", app.get("port"));
        }).on("error", function(err: any) {
            if(err.code === "EADDRINUSE") {
                console.error("Another instance is already running on port " + err.port);
            } else {
                console.error(err);
            }
            process.exit();
        });
    },
    function() {
        process.exit();
    }
);
