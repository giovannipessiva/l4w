/**
 * Module for resources loading
 */
module Resource {
    
    var properties: { string : { string : string }  };
    
    export interface IPropertiesCallback { ( props : { string : string } ) : void };
    
    export function loadPropertes(file: string, onLoadCallback: IPropertiesCallback) {
        if(file in properties) {
            var parsePropertiesCallback = function(){
                var props=parseProperties(this.responseText);
                properties[file]=props;
                onLoadCallback(props);
            }
            var request = new XMLHttpRequest();
            request.onload = parsePropertiesCallback;
            request.onerror = function() { console.log("error getting "+file); }; //TODO
            request.ontimeout = function() { console.log("timeout getting "+file); }; //TODO
            request.open("get", "data/" + file + ".properties", true);
            request.send();
        } else {
            return properties[file];
        }
    };
    
    function parseProperties(content: string): { string: string } {
        var props: { string: string };
        var lines = content.split("\n");
        for (var i=0; i<lines.length; i++) {
            var line = lines[i].trim();
            if (line !== "" && line.indexOf("#") !== 0) {
                var lineTokens = line.split("=");
                props[lineTokens[0]] = lineTokens[1];
            }
        }
        return props;
    };
}