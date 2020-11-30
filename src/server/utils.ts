import { lstatSync, readdir } from "fs"
import { join } from "path"
import { Response as ExpressResponse } from "express";

import { HttpStatus } from "../common/Constants"
import { IDialogNode, IDialogEdge } from "../common/model/Dialog"

const placeholder = "404.png";

export function sendFile(path: string, filename: string, response: ExpressResponse) {
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
            response.type("application/javascript");
            break;
        case "css":
            response.type("text/css");
            break;
        case "woff2":
            response.type("font/woff2");
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
                        console.warn("utils.sendFile (file: " + path + "/" + filename + ") " + err);
                    }
                    try {
                        if(err.status !== undefined) {
                            response.status(err.status).send("");
                        } else {
                            response.status(HttpStatus.NO_CONTENT).send("");
                        }
                    } catch(e) {
                        console.error(e);
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

/**
 * List the files in a directory (excluding dirs, hidden, 404)
 * 
 * @param filePath path to read
 * @param response array of files (async)
 */
export function listFiles(filePath: string, response?: ExpressResponse): Promise<string[]> {
    return new Promise<string[]>(resolve => {
        readdir(filePath, (err, files) => {
            for(let i = 0; i < files.length; i++) {
                let file = files[i];
                let is404 = file.startsWith("404")
                let isHidden = file.startsWith(".")
                let isDirectory = lstatSync(join(filePath, file)).isDirectory();
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

/**
 * Remove non-persistant field from the object,
 * to avoid saving them to DB
 */
export function cleanDialogNode(node: IDialogNode): void {
    delete node.message;
    delete node.edges;
    delete node.referenced;
}

/**
 * Remove non-persistant field from the object,
 * to avoid saving them to DB
 */
export function cleanDialogEdge(edge: IDialogEdge): void {
    delete edge.message;
    delete edge.node;
    delete edge.nodeReferenced;
    delete edge.actions;
}
