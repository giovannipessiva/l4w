//@ts-ignore TS1192
import path from "path"
//@ts-ignore TS1192
import express from "express";
//@ts-ignore TS1192
import compression from "compression";

import constants from "./constants"
import { session } from "./session"
import * as utils2 from "./utils"
import { security } from "./security"
import { database2 } from "./database"
import { mapper } from "./mapper"
import { NextFunction, Request, Response } from "express-serve-static-core";

//TODO this is not supported by tsc, should be fixed in TypeScript 2.9
// see alse: https://github.com/Microsoft/TypeScript/issues/22861
//let dirname = path.dirname(new URL(import.meta.url).pathname);
let dirname = process.cwd() + path.sep + "server";

let app = express();
app.use(compression());
app.use(session.init());
app.set("port",(process.env.PORT || 5000));

// Middleware
app.use(function(req: Request, res: Response, next: NextFunction) {
    // Remove trailing slash
    if (req.path.substr(-1) === "/" && req.path.length > 1) {
        var query = req.url.slice(req.path.length);
        res.redirect(301, req.path.slice(0, -1) + query);
    } else {
        next();
    }
});
app.use(function(req: Request, res: Response, next: NextFunction) {
    security.requestFilter(req, res, next)
});

// Views redirection
app.get("/", function(request: Request, response: Response) {
    if(!utils2.isEmpty(request.query.logout) && request.query.logout === "1") {
        session.doLogout(request,response,function() {
            utils2.sendFile(dirname + path.sep + "views" + path.sep, "home.html", response);
        });
    } else {
        if(session.isAuthenticated(request)) {
           database2.logUserSessionAccess(session.getUser(request));
            utils2.sendFile(dirname + path.sep + "views" + path.sep, "home-auth.html", response);
        } else {
            utils2.sendFile(dirname + path.sep + "views" + path.sep, "home.html", response);
        };
    }
});
app.post("/", function(request: Request, response: Response) {
    session.doLogin(request,response,function() {
        utils2.sendFile(dirname + path.sep + "views" + path.sep, "home-auth.html", response);
    }, function() {
        utils2.sendFile(dirname + path.sep + "views" + path.sep, "home.html", response);
    });
});
app.get("/edit", function(request: Request, response: Response) {
    if(!session.isAuthenticated(request)) {
        utils2.sendFile(dirname + path.sep + "views" + path.sep, "auth.html", response);
    } else {
       database2.logUserSessionAccess(session.getUser(request));
        utils2.sendFile(dirname + path.sep + "views" + path.sep, "hub.html", response);
    }
});
app.post("/edit", function(request: Request, response: Response) {
    session.doLogin(request,response,function() {
        utils2.sendFile(dirname + path.sep + "views" + path.sep, "hub.html", response);
    }, function() {
        utils2.sendFile(dirname + path.sep + "views" + path.sep, "auth.html", response);
    });
});
app.get("/edit/:editor", function(request: Request, response: Response) {
    if(!session.isAuthenticated(request)) {
        utils2.sendFile(dirname + path.sep + "views" + path.sep, "auth.html", response);
    } else {
       database2.logUserSessionAccess(session.getUser(request));
        let editor = request.params.editor;
        utils2.sendFile(dirname + path.sep + "views" + path.sep + "editor" + path.sep, editor + ".html", response);
    }
});

app.all("/test", function(request: Request, response: Response) {
    utils2.sendFile(dirname + path.sep + "views" + path.sep, "test.html", response);
});

app.get("/logout", function(request: Request, response: Response) {
    session.doLogout(request,response,function() {
        utils2.sendFile(dirname + path.sep + "views" + path.sep, "auth.html", response);
    });
});

// Resources redirection
app.get("/js/:script", function(request: Request, response: Response) {
    var file = request.params.script;
    var filePath = path.resolve(dirname + "/../client/dist");
    utils2.sendFile(filePath, file, response);
});
app.get("/lib/:script", function(request: Request, response: Response) {
    var file = request.params.script;
    var filePath = path.resolve(dirname + "/../client/lib");
    utils2.sendFile(filePath, file, response);
});
app.get("/data/:type", function(request: Request, response: Response) {
    var type = request.params.type;
    var user = null;
    if(session.isAuthenticated(request)) {
        user = session.getUser(request);
    }
   database2.read(type, undefined, user, response);
});
app.get("/data/:type/:file", function(request: Request, response: Response) {
    var file = request.params.file;
    var type = request.params.type;
    // FIXME properties could be in a configuration file client side
    if (type === "properties") {
        var filePath = path.resolve(dirname + "/../client/data/" + type);
        utils2.sendFile(filePath, file, response);
        return;
    }
   database2.read(type, file, session.getUser(request), response);
});
app.get("/assets/:file", function(request: Request, response: Response) {
    var file = request.params.file;
    var filePath = path.resolve(dirname + "/../client/assets");
    utils2.sendFile(filePath, file, response);
});
app.get("/assets/:type/:file", function(request: Request, response: Response) {
    var file = request.params.file;
    var type = request.params.type;
    var filePath = path.resolve(dirname + "/../client/assets/" + type);
    utils2.sendFile(filePath, file, response);
});
app.get("/assetlist/:type", function(request: Request, response: Response) {
    var type = request.params.type;
    var filePath = path.resolve(dirname + "/../client/assets/" + type);
    utils2.listFiles(filePath, response);
});
app.get("/style/:file", function(request: Request, response: Response) {
    var file = request.params.file;
    var filePath = path.resolve(dirname + "/views/style");
    utils2.sendFile(filePath, file, response);
});
app.get("/style/:type/:file", function(request: Request, response: Response) {
    var type = request.params.type;
    var file = request.params.file;
    var filePath = path.resolve(dirname + "/views/style/"+type);
    utils2.sendFile(filePath, file, response);
});
app.get("/workers/:script", function(request: Request, response: Response) {
    var file = request.params.script;
    var filePath = path.resolve(dirname + "/../workers");
    response.set("Service-Worker-Allowed", "..")
    utils2.sendFile(filePath, file, response);
});

// Server logic
app.post("/edit/maps", function(request: Request, response: Response) {
    if(session.isAuthenticated(request)) {
        security.getBodyData(request,response,function(data: any){
            mapper.updateMaps(data, session.getUser(request), response);
        });
    } else {
        response.status(constants.HttpStatus.FORBIDDEN).send("");
    }
});
app.post("/edit/:type/:id", function(request: Request, response: Response) {
    if(session.isAuthenticated(request)) {
        var fileId = request.params.id;
        var type = request.params.type;
        security.getBodyData(request, response, function(data: any){
            switch(type) {
            case "map":
                mapper.updateMap(fileId, data, session.getUser(request), response);
                break;
            case "save":
            case "tileset":
               database2.write(type, fileId, data, session.getUser(request), response);
                break;
            }
        });
    } else {
        response.status(constants.HttpStatus.FORBIDDEN).send("");
    }
});
app.get("/news", function(request: Request, response: Response) {
    if(session.isAuthenticated(request)) {
       database2.getNews(session.getUser(request), response);
    } else {
        response.status(constants.HttpStatus.FORBIDDEN).send("");
    }
});

// Initialize DB connection
database2.init().then(
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
