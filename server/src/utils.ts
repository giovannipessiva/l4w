//@ts-ignore TS1192
import fs from "fs"

import { HttpStatus } from "../../common/src/Constants"
import { Response } from "express";

const placeholder = "404.png";

export function sendFile(path: string, file: string, response: Response) {
    //Send a file as response
    let options = {
        dotfiles: "deny",
        headers: {
            "x-timestamp": Date.now(),
            "x-sent": true
        }
    };
    if (endsWith(file, ".json")) {
        response.type("application/json");
    } else if (endsWith(file, ".properties")) {
        response.type("text/x-java-properties");
    } else if (endsWith(file, ".js")) {
        response.type("text/javascript");
    }

    response.sendFile(
        path + "/" + file,
        options,
        function(err: Error | any) {
            if (err && response.statusCode !== HttpStatus.NOT_MODIFIED && err.code !== "ECONNABORT") {
                if (response.statusCode === HttpStatus.NOT_FOUND && file !== placeholder) {
                    sendFile(path, placeholder, response);
                } else {
                    // Do not log:
                    // - Requests aborted
                    // - 404 on minified script
                    if(err.message !== "Request aborted"
                        && file.match(/l4w\-.*\.min\.js/) === null) {
                        console.log("utils.sendFile - " + err);
                        console.error("error msg:" + err.message);
                        console.error("error name:" + err.name);
                    }
                    if(err.status !== undefined) {
                        response.status(err.status).send("");
                    } else {
                        response.status(HttpStatus.NO_CONTENT).send("");
                    }
                }
            }
        }
    );
};

export function endsWith(file: string, suffix: string) {
    return file.indexOf(suffix, file.length - suffix.length) !== -1;
}
    
export function isEmpty(obj: any) {
    if (obj === null || typeof obj === "undefined") {
        return true;
    } else if (typeof obj === "string") {
        return obj === "";
    } else if (typeof obj === "object" && "size" in obj) {
        return obj.size === 0;
    } else if (obj.constructor === Array || obj.constructor === String) {
        return obj.length === 0;
    }
    return false;
}

export function parseParameters(parameters: string) {
    let paramMap: any = {};
    let paramArray = parameters.split("&"); 
    for (let i = 0; i < paramArray.length; i++) {
        let tokens = paramArray[i].split("=");
        paramMap[tokens[0]] = tokens[1];
    }
    return paramMap;
}

export function listFiles(filePath: string, response: Response) {
    fs.readdir(filePath, (err: Error, files: string[]) => {
        for(let i = 0; i < files.length; i++) {
            let file = files[i];
            let is404 = file.startsWith("404")
            let isHidden = file.startsWith(".")
            let isDirectory = fs.lstatSync(filePath + "/" + file).isDirectory();
            if (is404 || isHidden || isDirectory) {
                files.splice(i, 1);
                i--;
            }    
        }
        if(!isEmpty(err)) {
            console.error(err);
        }
        response.json(files);
    })
}
   