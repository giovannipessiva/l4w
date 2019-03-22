import { ResourceType, HttpStatus, HttpResponseHeader } from "../../../../common/src/Constants";
import { Condition } from "../events/Conditions";
import { AbstractScript } from "../events/script/AbstractScript";
import * as Script from "../events/script/ScriptsRoot";
import { IPropertiesCallback, IResponseCallback, IListCallback } from "./Commons";
import { Constant } from "./Constant";
import { Utils } from "./Utils";

declare var base_path: string;

/**
 * Module for resources loading
 */
export namespace Resource {

    const DATA_PATH = base_path + "data/";
    const ASSET_PATH = base_path + "assets/";
    const ASSETLIST_PATH = base_path + "assetlist/";
    const EDIT_PATH = base_path + "edit/";

    const CACHE_SEPARATOR = "@";
    const DEFAULT_NAME = "404.png";

    var resourceCache: Map<string, HTMLImageElement> = new Map<string, HTMLImageElement>();

    let propertiesCache: Map<string, Map<string, number>> = new Map<string, Map<string, number>>();

    export function loadProperties(onLoadCallback: IPropertiesCallback, file: string = "l4w") {
        if (propertiesCache.has(file)) {
            onLoadCallback(propertiesCache.get(file)!);
        } else {
            function parsePropertiesCallback(responseText?: string) {
                let props: Map<string, number>;
                if(responseText !== undefined) {
                    props = parseProperties(responseText);
                    propertiesCache.set(file, props);
                } else {
                    props = new Map<string, number>();
                }                
                onLoadCallback(props);
            }
            sendGETRequest(DATA_PATH + "properties/" + file + ".properties", parsePropertiesCallback);
        }
    };

    function parseProperties(content: string): Map<string, number> {
        let props: Map<string, number> = new Map<string, number>();
        let lines = content.split("\n");
        for (var i = 0; i < lines.length; i++) {
            let line = lines[i].trim();
            if (line !== "" && line.indexOf("#") !== 0) {
                let lineTokens = line.split("=");
                let value: number = +lineTokens[1];
                if (!isNaN(value)) {
                    props.set(lineTokens[0], value);
                } else {
                    // If value is NaN, check if it's a valid key 
                    if (props.has(lineTokens[1])) {
                        props.set(lineTokens[0], props.get(lineTokens[1])!);
                    } else {
                        console.error("Error parsing properties file at line " + i + ": " + value);
                    }
                }
            }
        }
        return props;
    };

    function sendGETRequest(uri: string, callback: IResponseCallback) {
        sendRequest(Constant.RequestType.GET, undefined, uri, callback);
    };

    function sendPOSTRequest(uri: string, data: string, callback: IResponseCallback) {
        sendRequest(Constant.RequestType.POST, data, uri, callback);
    };

    function sendRequest(requestType: string, data: string | undefined, uri: string, callback: IResponseCallback) {
        let request = new XMLHttpRequest();
        request.onload = function(this: XMLHttpRequest, ev: ProgressEvent): any {
            if(this.status !== HttpStatus.MOVED_PERMANENTLY) {
                callback(this.responseText);
            } else {
                //TODO this needs to be tested
                // Handle a 301 error with a redirect
                let newUri = this.getResponseHeader(HttpResponseHeader.LOCATION);
                if(newUri !== null) {
                    console.warn("Request returned code: " +  HttpStatus.MOVED_PERMANENTLY + ", attempting a redirect");
                    console.warn("from: " + uri);
                    console.warn("to: " + newUri);
                    sendRequest(requestType, data, newUri, callback);
                } else {
                    callback(this.responseText);
                }
            }
        };
        request.onerror = function(this: XMLHttpRequest, ev: ProgressEvent): any {
            console.error("Error while getting " + uri);
            console.error(ev);
            callback();
        };
        request.ontimeout = function() {
            console.error("Timeout while getting " + uri);
            callback();
        };
        request.open(requestType, uri, true);
        try {
            if (!Utils.isEmpty(data) && requestType === Constant.RequestType.POST) {
                request.send(data);
            } else {
                request.send();
            }
        } catch (exception) {
            if (exception.name === "NetworkError") {
                console.error("If you are working locally on Chrome, please launch it with option --allow-file-access-from-files");
            } else {
                console.error(exception);
                console.trace();
            }
            callback();
        }
    }

    /**
     * Load an asset and call a callback
     */
    export function load(file: string, assetType: ResourceType, callback: { (response?: HTMLImageElement | string): void }) {
        if (Utils.isEmpty(file)) {
            console.error("Trying to load empty file!");
            console.trace();
        }
        let path = getResourcePath(file, assetType);
        if(path === undefined) {
            console.error("Error while loading file: " + file + "/" + assetType);
            callback();
            return;
        }

        switch (assetType) {
            case ResourceType.CHAR:
            case ResourceType.FACE:
            case ResourceType.SKIN:
            case ResourceType.TILE:
                // Load image file
                let image = new Image();
                image.onload = function() {
                    resourceCache.set(assetType + CACHE_SEPARATOR + file, image);
                    callback(image);
                };
                image.src = path;
                break;
            case ResourceType.MAP:
            case ResourceType.SAVE:
            case ResourceType.STRING:
            case ResourceType.DIALOG:
            case ResourceType.GENERIC_MESSAGE:
            case ResourceType.TILESET:
                // read data from DB
                sendGETRequest(path, callback);
                break;
            default:
                console.error("Unexpected resource type");
                console.trace();
                callback(undefined);
        }
    }

    /**
     * Return an already loaded asset
     */
    export function loadImageFromCache(file: string, assetType: ResourceType) {
        let image = resourceCache.get(assetType + CACHE_SEPARATOR + file);
        if (Utils.isEmpty(image)) {
            load(file, assetType, function(image?: HTMLImageElement | string) {
                if(image === undefined || typeof image === "string") {
                    console.error("Error while reading image: " + file);
                } else {
                    resourceCache.set(assetType + CACHE_SEPARATOR + file, image);
                }
            });
        }
        return image;
    }

    export function loadDefaultImage(assetType: ResourceType) {
        return loadImageFromCache(DEFAULT_NAME, assetType);
    }

    /**
     * Save an asset to server
     */
    export function save(id: string, data: string, assetType: ResourceType, callback: (response?: string, result?: boolean)=>void) {
        let path = getEditPath(id, assetType);
        sendPOSTRequest(path, data, function(response?: string) {
            if (response !== undefined) {
                if(assetType === ResourceType.STRING || assetType === ResourceType.DIALOG || assetType === ResourceType.GENERIC_MESSAGE) {
                    callback(response);
                } else {
                    callback(undefined, true);
                }
            } else {
                console.error("Empty response for: " + path);
                callback(undefined, false);
            }
        });
    }

    function getResourcePath(file: string, assetType: ResourceType): string | undefined {
        let path;
        switch (assetType) {
            case ResourceType.CHAR:
            case ResourceType.FACE:
            case ResourceType.SKIN:
            case ResourceType.TILE:
                path = ASSET_PATH;
                break;
            case ResourceType.MAP:
            case ResourceType.SAVE:
            case ResourceType.STRING:
            case ResourceType.DIALOG:
            case ResourceType.GENERIC_MESSAGE:
            case ResourceType.TILESET:
                path = DATA_PATH;
                break;
            default:
                console.error("Unexpected resource type");
                console.trace();
        };
        return path + assetType + "/" + file;
    }

    function getEditPath(file: string, assetType: ResourceType): string {
        let path = EDIT_PATH;
        return path + assetType + "/" + file;
    }
    
    export function listResources(assetType: ResourceType, callback: IListCallback) {
        sendGETRequest(ASSETLIST_PATH + assetType, function(responseTxt?: string) {
            if(responseTxt !== undefined) {
                let list = JSON.parse(responseTxt);
                if(list !== undefined) {
                    callback(list);
                    return;
                }
            }
            console.error("Empty response from " + ASSETLIST_PATH);
            callback([]);
        }); 
    }
    
    export function listScriptClasses(): Map<string, string> {
        // Retrieve all Script classes that extends AbstractScript
        let allVars: string[] = Object.keys(Script);
        let scriptClasses = allVars.filter(function (key) {
            try {
                let obj = Script[key];
                return obj.prototype instanceof AbstractScript;
            } catch (e) {
                return false;
            }
        });
        // Retrieve the tooltip for every Script class
        let map = new Map<string, string>();
        for(let c of scriptClasses) {
            map.set(c, (<typeof AbstractScript> Script[c]).tooltip);
        }
        return map;
    }
    
    /*
     * Oh God what a ride
     * https://stackoverflow.com/questions/39544789/get-class-methods-in-typescript/48051971#48051971
     */
    export function listScriptActions(scriptClassName: string): string[] {
        // Retrieve all actions of a Script class
        let classInstance = new Script[scriptClassName](undefined, undefined,undefined);
        let allVars: string[] = Object.getOwnPropertyNames(Object.getPrototypeOf(classInstance));
        let actions = allVars.filter(function (key) {
            try {
                // Accept all methods, except inherited and the constructor
                if(key === "constructor") {
                    return false;
                }
                return typeof classInstance[key] === "function";
            } catch (e) {
                return false;
            }
        });
        return actions;    
    }
    
    export function listEventStateConditions(): string[] {
        return Object.keys(Condition);
    }
}
