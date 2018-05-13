///<reference path="Commons.ts" />
///<reference path="Constant.ts" />
///<reference path="../events/script/AbstractScript.ts" />
///<reference path="../events/Conditions.ts" />

declare var base_path: string;

/**
 * Module for resources loading
 */
namespace Resource {

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
        TILESET
    }

    var propertiesCache: Map<string, Map<string, number>> = new Map<string, Map<string, number>>();

    export function loadProperties(onLoadCallback: IPropertiesCallback, file: string = "l4w") {
        if (propertiesCache.has(file)) {
            onLoadCallback(propertiesCache.get(file));
        } else {
            function parsePropertiesCallback(e: ProgressEvent) {
                var props: Map<string, number> = parseProperties(this.responseText);
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
                        props.set(lineTokens[0], props.get(lineTokens[1]));
                    } else {
                        console.error("Error parsing properties file at line " + i + ": " + value);
                    }
                }
            }
        }
        return props;
    };

    function sendGETRequest(uri: string, callback: IProgressCallback) {
        sendRequest(Constant.RequestType.GET, null, uri, callback);
    };

    function sendPOSTRequest(uri: string, data: string, callback: IProgressCallback) {
        sendRequest(Constant.RequestType.POST, data, uri, callback);
    };

    function sendRequest(requestType: string, data: string, uri: string, callback: IProgressCallback) {
        var request = new XMLHttpRequest();
        request.onload = callback;
        request.onerror = function(e: ErrorEvent) {
            console.error("Error while getting " + uri);
            console.log(e);
            callback(null);
        };
        request.ontimeout = function() {
            console.error("Timeout while getting " + uri);
            callback(null);
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
            callback(null);
        }
    }

    /**
     * Load an asset and call a callback
     */
    export function load(file: string, assetType: TypeEnum, callback: { (response: HTMLImageElement | string): void }) {
        if (Utils.isEmpty(file)) {
            console.error("Trying to load empty file!");
            console.trace();
        }
        let path = getResourcePath(file, assetType);

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
            case TypeEnum.TILESET:
                // read data from DB
                sendGETRequest(path, function(e: ProgressEvent) {
                    callback(this.responseText);
                });
                break;
            default:
                console.error("Unexpected resource type");
                console.trace();
                callback(null);
        }
    }

    /**
     * Return an already loaded asset
     */
    export function loadImageFromCache(file: string, assetType: TypeEnum) {
        let image = resourceCache.get(assetType + CACHE_SEPARATOR + file);
        if (Utils.isEmpty(image)) {
            load(file, assetType, function(image: HTMLImageElement) {
                resourceCache.set(assetType + CACHE_SEPARATOR + file, image);
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
    export function save(id: string, data: string, assetType: TypeEnum, callback) {
        let path = getEditPath(id, assetType);
        sendPOSTRequest(path, data, function(e: ProgressEvent) {
            if (this.status === 200) {
                if(assetType === TypeEnum.STRING) {
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

    function getResourcePath(file: string, assetType: TypeEnum): string {
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
            case TypeEnum.TILESET:
                path = DATA_PATH;
                break;
            default:
                console.error("Unexpected resource type");
                console.trace();
        };
        let resourceTypeFolder = getResourceTypeFolder(assetType);
        return path + resourceTypeFolder + file;
    }
    
    function getResourceTypeFolder(assetType: TypeEnum): string {
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
    
    export function listResources(assetType: TypeEnum, callback) {
        let resourceTypeFolder = getResourceTypeFolder(assetType);
        sendGETRequest(ASSETLIST_PATH + "/" + resourceTypeFolder, function(e: ProgressEvent) {
            let list: Array<string> = JSON.parse(this.responseText);
            callback(list);
        }); 
    }
    
    export function listScriptClasses(): Map<string, string> {
        // Retrieve all Script classes that extends AbstractScript
        let allVars: string[] = Object.keys(Script);
        let scriptClasses = allVars.filter(function (key) {
            try {
                let obj = Script[key];
                return obj.prototype instanceof Script.AbstractScript;
            } catch (e) {
                return false;
            }
        });
        // Retrieve the tooltip for every Script class
        let map = new Map<string, string>();
        for(let c of scriptClasses) {
            map.set(c, (<typeof Script.AbstractScript> Script[c]).tooltip);
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
