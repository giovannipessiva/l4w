import { IPropertiesCallback, IResponseCallback } from "./Commons"
import { Utils } from "./Utils"
import { Constant } from "./Constant"
import * as Constants from "../../../../common/src/Constants"
import { AbstractScript } from "../events/script/AbstractScript"
import { Condition } from "../events/Conditions"
import * as Script from "../events/script/ScriptsRoot"

declare var base_path: string;

/**
 * Module for resources loading
 */
export namespace Resource {

    const DATA_PATH = base_path + "data/";
    const ASSET_PATH = base_path + "assets/";
    const ASSETLIST_PATH = base_path + "assetlist";
    const EDIT_PATH = base_path + "edit/";

    const CACHE_SEPARATOR = "@";
    const DEFAULT_NAME = "404.png";

    var resourceCache: Map<string, HTMLImageElement> = new Map<string, HTMLImageElement>();

    export const enum TypeEnum {
        CHAR,
        FACE,
        SKIN,
        TILE,
        MAP,
        SAVE,
        STRING,
        DIALOG,
        GENERIC_MESSAGES,
        TILESET
    }

    var propertiesCache: Map<string, Map<string, number>> = new Map<string, Map<string, number>>();

    export function loadProperties(onLoadCallback: IPropertiesCallback, file: string = "l4w") {
        if (propertiesCache.has(file)) {
            onLoadCallback(propertiesCache.get(file)!);
        } else {
            function parsePropertiesCallback(responseText: string) {
                let props: Map<string, number> = parseProperties(responseText);
                propertiesCache.set(file, props);
                onLoadCallback(props);
            }
            sendGETRequest(DATA_PATH + "properties/" + file + ".properties", parsePropertiesCallback);
        }
    };

    function parseProperties(content: string): Map<string, number> {
        var props: Map<string, number> = new Map<string, number>();
        var lines = content.split("\n");
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i].trim();
            if (line !== "" && line.indexOf("#") !== 0) {
                var lineTokens = line.split("=");
                var value: number = +lineTokens[1];
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
            if(this.status !== Constants.HttpStatus.MOVED_PERMANENTLY) {
                callback(this.responseText);
            } else {
                // Handle a 301 error with a redirect
                let newUri = this.getResponseHeader(Constants.HttpResponseHeader.LOCATION);
                if(newUri !== null) {
                    console.warn("Request returned code: " +  Constants.HttpStatus.MOVED_PERMANENTLY + ", attempting a redirect");
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
            callback(undefined);
        };
        request.ontimeout = function() {
            console.error("Timeout while getting " + uri);
            callback(undefined);
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
            callback(undefined);
        }
    }

    /**
     * Load an asset and call a callback
     */
    export function load(file: string, assetType: TypeEnum, callback: { (response?: HTMLImageElement | string): void }) {
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
            case TypeEnum.CHAR:
            case TypeEnum.FACE:
            case TypeEnum.SKIN:
            case TypeEnum.TILE:
                // Load image file
                let image = new Image();
                image.onload = function() {
                    resourceCache.set(assetType + CACHE_SEPARATOR + file, image);
                    callback(image);
                };
                image.src = path;
                break;
            case TypeEnum.MAP:
            case TypeEnum.SAVE:
            case TypeEnum.STRING:
            case TypeEnum.DIALOG:
            case TypeEnum.GENERIC_MESSAGES:
            case TypeEnum.TILESET:
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
    export function loadImageFromCache(file: string, assetType: TypeEnum) {
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

    export function loadDefaultImage(assetType: TypeEnum) {
        return loadImageFromCache(DEFAULT_NAME, assetType);
    }

    /**
     * Save an asset to server
     */
    export function save(id: string, data: string, assetType: TypeEnum, callback: IResponseCallback) {
        let path = getEditPath(id, assetType);
        sendPOSTRequest(path, data, function(this: XMLHttpRequest, e?: ProgressEvent) {
            if (this.status === 200) {
                if(assetType === TypeEnum.STRING || assetType === TypeEnum.DIALOG || assetType === TypeEnum.GENERIC_MESSAGES) {
                    callback(this.responseText);
                } else {
                    callback(true);
                }
            } else {
                console.error(this.status + " - " + this.response);
                callback(false);
            }
        });
    }

    function getResourcePath(file: string, assetType: TypeEnum): string | undefined {
        let path;
        switch (assetType) {
            case TypeEnum.CHAR:
            case TypeEnum.FACE:
            case TypeEnum.SKIN:
            case TypeEnum.TILE:
                path = ASSET_PATH;
                break;
            case TypeEnum.MAP:
            case TypeEnum.SAVE:
            case TypeEnum.STRING:
            case TypeEnum.DIALOG:
            case TypeEnum.GENERIC_MESSAGES:
            case TypeEnum.TILESET:
                path = DATA_PATH;
                break;
            default:
                console.error("Unexpected resource type");
                console.trace();
        };
        let resourceTypeFolder = getResourceTypeFolder(assetType);
        if(resourceTypeFolder === undefined) {
            console.error("Can't find resource path:" + file + "/" + assetType);
            return undefined;
        }
        return path + resourceTypeFolder + file;
    }
    
    function getResourceTypeFolder(assetType: TypeEnum): string | undefined {
        let folder;
        switch (assetType) {
            case TypeEnum.CHAR:
                folder = "charset/";
                break;
            case TypeEnum.FACE:
                folder = "faceset/";
                break;
            case TypeEnum.SKIN:
                folder = "skin/";
                break;
            case TypeEnum.TILE:
                folder = "tile/";
                break;
            case TypeEnum.MAP:
                folder = "map/";
                break;
            case TypeEnum.SAVE:
                folder = "save/";
                break;
            case TypeEnum.STRING:
                folder = "string/";
                break;
            case TypeEnum.DIALOG:
                folder = "dialog/";
                break;
            case TypeEnum.GENERIC_MESSAGES:
                folder = "generic-messages/";
                break;
            case TypeEnum.TILESET:
                folder = "tileset/";
                break;
            default:
                console.error("Unexpected resource type");
                console.trace();
        };   
        return folder;
    }

    function getEditPath(file: string, assetType: TypeEnum): string {
        let path = EDIT_PATH;
        let resourceTypeFolder = getResourceTypeFolder(assetType);
        return path + resourceTypeFolder + file;
    }
    
    export function listResources(assetType: TypeEnum, callback: IResponseCallback) {
        let resourceTypeFolder = getResourceTypeFolder(assetType);
        sendGETRequest(ASSETLIST_PATH + "/" + resourceTypeFolder, function(responseTxt: string, e?: ProgressEvent) {
            let list: Array<string>;
            if(responseTxt !== undefined) {
                list = JSON.parse(responseTxt);
            } else {
                console.error("Empty respose from " + ASSETLIST_PATH);
                list = [];
            }
            callback(list);
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
