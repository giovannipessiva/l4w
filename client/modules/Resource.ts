/**
 * Module for resources loading
 */
module Resource {
    
    var rootFolder = "data/";
    var properties: Map<string, string> = new Map<string, string>();

    export interface IPropertiesCallback { (props: Map<string, string>): void };

    export function loadPropertes(file: string, onLoadCallback: IPropertiesCallback) {
        if (file in properties) {
            return properties[file];
        } else {
            function parsePropertiesCallback() {
                var props = parseProperties(this.responseText);
                properties[file] = props;
                onLoadCallback(props);
            }
            sendRequest(rootFolder + file + ".properties", parsePropertiesCallback);
        }
    };

    function parseProperties(content: string): Map<string, string> {
        var props: Map<string, string> = new Map<string, string>();
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
        request.open("get", uri, true);
        request.send();

        function handleRequestError() {
            console.log("error getting " + uri);
        };

        function handleRequestTimeout() {
            console.log("timeout getting " + uri);
        };
    }
}