///<reference path="../../interfaces/jquery.d.ts" />
///<reference path="Commons.ts" />

/**
 * Module for resources loading
 */
module Resource {

    var dataFolder = "data/";

    export enum ResurceTypeEnum {
        CHAR,
        FACE,
        SKIN,
        TILE,
        MAP
    }

    var propertiesCache: Map<string, Map<string, number>> = new Map<string, Map<string, number>>();

    export function loadProperties(onLoadCallback: IPropertiesCallback, file: string = "l4w") {
        if (propertiesCache.has(file)) {
            onLoadCallback(propertiesCache.get(file));
        } else {
            function parsePropertiesCallback() {
                var props: Map<string, number> = parseProperties(this.responseText);
                propertiesCache.set(file, props);
                onLoadCallback(props);
            }
            sendRequest(dataFolder + file + ".properties", parsePropertiesCallback);
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

    function sendRequest(uri: string, callback: { (): void }) {
        var request = new XMLHttpRequest();
        request.onload = callback;
        request.onerror = handleRequestError;
        request.ontimeout = handleRequestTimeout;
        request.open("GET", uri, true);
        try {
            request.send();
        } catch (exception) {
            if (exception.name === "NetworkError") {
                console.error("If you are working locally on Chrome, please launch it with option --allow-file-access-from-files");
            }
        }
        function handleRequestError(event: ErrorEvent) {
            console.error("Error while getting " + uri);
        };

        function handleRequestTimeout() {
            console.error("Timeout while getting " + uri);
        };
    }
    
    /**
     * Load an asset and call a callback
     */
    export function load(file: string, assetType: ResurceTypeEnum, callback: IJQueryCallback) {
        //TODO find out why sometimes a null file di loaded
        if (Utils.isUndefined(file)) {
            console.error("Trying to load empty file!");
            console.trace();
        }
        
        var path = getResourcePath(file, assetType);
        var $loader = $(document.createElement("img"));
        $loader.attr("src", path);
        $loader.load(function() {
            callback($loader);
        });
    }
    
    /**
     * Load an asset and put it in an img element
     */
    export function loadToImg(file: string, resourceType: ResurceTypeEnum, imageId: string) {
        load(file, resourceType, function(tmpImg: JQuery) {
            $("#" + imageId).attr("src", tmpImg.attr("src"));
        });
    }

    function getResourcePath(file: string, assetType: ResurceTypeEnum): string {
        var path;
        switch (assetType) {
            case ResurceTypeEnum.CHAR:
            case ResurceTypeEnum.FACE:
            case ResurceTypeEnum.SKIN:
            case ResurceTypeEnum.TILE:
                path = "assets/";
                switch (assetType) {
                    case ResurceTypeEnum.CHAR:
                        path += "charset/";
                        break;
                    case ResurceTypeEnum.FACE:
                        path += "faceset/";
                        break;
                    case ResurceTypeEnum.SKIN:
                        path += "skin/";
                        break;
                    case ResurceTypeEnum.TILE:
                        path += "tileset/";
                        break;
                };
                break;
            case ResurceTypeEnum.MAP:
                path = "data/";
                switch (assetType) {
                    case ResurceTypeEnum.MAP:
                        path += "map/";
                        break;
                };
                break;
        };

        return path + file;
    }
}
