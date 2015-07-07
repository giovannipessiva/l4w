var Resource;
(function (Resource) {
    var dataFolder = "data/";
    var assetsFolder = "assets/";
    var charFolder = assetsFolder + "charset/";
    var faceFolder = assetsFolder + "faceset/";
    var skinFolder = assetsFolder + "skin/";
    var tileFolder = assetsFolder + "tileset/";
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
            sendRequest(dataFolder + file + ".properties", parsePropertiesCallback);
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
        request.open("GET", uri, true);
        try {
            request.send();
        }
        catch (exception) {
            if (exception.name == "NetworkError") {
                console.error("If you are working locally on Chrome, please launch it with option --allow-file-access-from-files");
            }
        }
        function handleRequestError(event) {
            console.error("Error while getting " + uri);
        }
        ;
        function handleRequestTimeout() {
            console.error("Timeout while etting " + uri);
        }
        ;
    }
})(Resource || (Resource = {}));
