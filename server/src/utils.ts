//@ts-ignore TS1192
import fs from "fs"

import { HttpStatus } from "../../common/src/Constants"
import { Response } from "express";

const placeholder = "404.png";

export function sendFile(path: string, filename: string, response: Response) {
    //Send a file as response
    let options = {
        dotfiles: "deny",
        headers: {
            "x-timestamp": Date.now(),
            "x-sent": true
        }
    };
    let extension = filename.split(".").pop();
    switch(extension) {
        case "json":
            response.type("application/json");
            break;
        case "properties":
            response.type("text/x-java-properties");
            break;
        case "js":
            response.type("text/javascript");
            break;
        case "css":
            response.type("text/css");
            break;
    }

    response.sendFile(
        path + "/" + filename,
        options,
        function(err: Error | any) {
            if (err && response.statusCode !== HttpStatus.NOT_MODIFIED && err.code !== "ECONNABORT") {
                if (response.statusCode === HttpStatus.NOT_FOUND && filename !== placeholder) {
                    sendFile(path, placeholder, response);
                } else {
                    // Do not log requests aborted
                    if(err.message !== "Request aborted") {
                        console.warn("utils.sendFile - " + err);
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

/**
 * List the files in a directory (excluding dirs, hidden, 404)
 * @param filePath path to read
 * @param response array of files (async)
 */
export function listFiles(filePath: string, response?: Response): Promise<string[]> {
    return new Promise<string[]>(resolve => {
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
            if(response !== undefined) {
                response.json(files);
            }
            resolve(files);
        })
    });
}

/**
 * Return a copy of the input object, containing only number/string/boolean fields
 */
export function pruneObject(obj: any): any {
    let out = {};
    for(let field in obj) {
        let val = obj[field];
        while(Array.isArray(val) && val.length > 0) {
            val = val[0];
        }
        if(typeof val === "string" || typeof val === "boolean" || typeof val === "number") {
            out[field] = obj[field];
        }
    }
    return out;
}
