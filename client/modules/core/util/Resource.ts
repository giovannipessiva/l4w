///<reference path="../../interfaces/jquery.d.ts" />
///<reference path="Commons.ts" />
///<reference path="Constant.ts" />

/**
 * Module for resources loading
 */
namespace Resource {

    const DATA_PATH = "data/";
    const ASSET_PATH = "assets/";
    const EDIT_PATH = "edit/";
    
    const CACHE_SEPARATOR = "@";
    const DEFAULT_NAME = "404.png";
    
    var resourceCache: Map<string, HTMLImageElement> = new Map<string, HTMLImageElement>();

    export const enum TypeEnum {
        CHAR,
        FACE,
        SKIN,
        TILE,
        MAP,
        SAVE
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
    export function load(file: string, assetType: TypeEnum, callback: { (response: any): void }) {
        if (Utils.isEmpty(file)) {
            console.error("Trying to load empty file!");
            console.trace();
        }
        var path = getResourcePath(file, assetType);

        switch (assetType) {
            case TypeEnum.CHAR:
            case TypeEnum.FACE:
            case TypeEnum.SKIN:
            case TypeEnum.TILE:
                // Load image file
                var loader = $(document.createElement("img"));
                loader.attr("src", path);
                loader.load(function() {
                    resourceCache.set(assetType + CACHE_SEPARATOR + file, <HTMLImageElement> loader[0]);
                    callback(loader);
                });
                //TODO manage errors
                break;
            case TypeEnum.MAP:
            case TypeEnum.SAVE:
                // Load text file
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
        if(Utils.isEmpty(image)) {
            load(file, assetType, function(loader){
                resourceCache.set(assetType + CACHE_SEPARATOR + file, <HTMLImageElement> loader[0]);
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
    export function save(id: string, data: string, assetType: TypeEnum, callback: IBooleanCallback) {
        var path = getEditPath(id, assetType);
        sendPOSTRequest(path, data, function(e: ProgressEvent) {
            if (this.status === 200) {
                callback(true);
            } else {
                console.error(this.status + " - " + this.response);
                callback(false);
            }
        });
    }

    function getResourcePath(file: string, assetType: TypeEnum): string {
        var path;
        switch (assetType) {
            case TypeEnum.CHAR:
            case TypeEnum.FACE:
            case TypeEnum.SKIN:
            case TypeEnum.TILE:
                path = ASSET_PATH;
                switch (assetType) {
                    case TypeEnum.CHAR:
                        path += "charset/";
                        break;
                    case TypeEnum.FACE:
                        path += "faceset/";
                        break;
                    case TypeEnum.SKIN:
                        path += "skin/";
                        break;
                    case TypeEnum.TILE:
                        path += "tileset/";
                        break;
                    default:
                        console.error("Unexpected resource type");
                        console.trace();
                };
                break;
            case TypeEnum.MAP:
                path = DATA_PATH;
                switch (assetType) {
                    case TypeEnum.MAP:
                        path += "map/";
                        break;
                    default:
                        console.error("Unexpected resource type");
                        console.trace();
                };
                break;
            case TypeEnum.SAVE:
                path = DATA_PATH + "save/";
                break;
            default:
                console.error("Unexpected resource type");
                console.trace();
        };
        return path + file;
    }

    function getEditPath(file: string, assetType: TypeEnum): string {
        var path = EDIT_PATH;
        switch (assetType) {
            case TypeEnum.MAP:
                path += "map/";
                break;
            case TypeEnum.SAVE:
                path += "save/";
                break;
            default:
                console.error("Unexpected resource type");
                console.trace();
        };
        return path + file;
    }
}
