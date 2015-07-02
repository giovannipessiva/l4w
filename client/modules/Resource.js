var Resource;
(function (Resource) {
    var rootFolder = "data/";
    var properties = new Map();
    ;
    function loadPropertes(file, onLoadCallback) {
        if (file in properties) {
            return properties[file];
        }
        else {
            function parsePropertiesCallback() {
                var props = parseProperties(this.responseText);
                properties[file] = props;
                onLoadCallback(props);
            }
            sendRequest(rootFolder + file + ".properties", parsePropertiesCallback);
        }
    }
    Resource.loadPropertes = loadPropertes;
    ;
    function parseProperties(content) {
        var props = new Map();
        var lines = content.split("\n");
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i].trim();
            if (line !== "" && line.indexOf("#") !== 0) {
                var lineTokens = line.split("=");
                props[lineTokens[0]] = lineTokens[1];
            }
        }
        return props;
    }
    ;
    function sendRequest(uri, callback) {
        var request = new XMLHttpRequest();
        request.onload = callback;
        request.onerror = handleRequestError;
        request.ontimeout = handleRequestTimeout;
        request.open("get", uri, true);
        request.send();
        function handleRequestError() {
            console.log("error getting " + uri);
        }
        ;
        function handleRequestTimeout() {
            console.log("timeout getting " + uri);
        }
        ;
    }
})(Resource || (Resource = {}));
