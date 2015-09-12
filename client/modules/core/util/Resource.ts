///<reference path="../../interfaces/jquery.d.ts" />
///<reference path="Commons.ts" />

/**
 * Module for resources loading
 */
module Resource {

    var dataFolder = "data/";
    var assetsFolder = "assets/";

    var charFolder = assetsFolder + "charset/";
    var faceFolder = assetsFolder + "faceset/";
    var skinFolder = assetsFolder + "skin/";
    var tileFolder = assetsFolder + "tileset/";

    var properties: Map<string, string> = new Map<string, string>();

    export function loadProperties(onLoadCallback: IPropertiesCallback, file: string = "l4w") {
        if (file in properties) {
            onLoadCallback(properties[file]);
        } else {
            function parsePropertiesCallback() {
                var props: Map<string, number> = parseProperties(this.responseText);
                properties[file] = props;
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
                props[lineTokens[0]] = lineTokens[1];
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
            console.error("Timeout while etting " + uri);
        };
    }
    
    /**
     * Load an asset and call a callback
     */
    export function loadAsset(uri: string, callback: IJQueryCallback) {
        var $loader = $(document.createElement("img"));
        $loader.attr("src", "assets/" + uri);
        $loader.load(function() {
            callback($loader);
        });
    }
    
    /**
     * Load an asset and put it in an img element
     */
    export function loadAssetToImg(uri: string, assetId: string) {
        loadAsset(uri,function(tmpImg: JQuery) {
            $("#" + assetId).attr("src", tmpImg.attr("src"));
        });
    }
}