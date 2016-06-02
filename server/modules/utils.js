var path = require('path');
var fs = require('fs');
var HttpStatus = require('http-status-codes');

var placeholder = "404.png";

module.exports = {
		
    sendFile: function(path, file, response) {
        //Send a file as response
        var options = {
            dotfiles: 'deny',
            headers: {
                'x-timestamp': Date.now(),
                'x-sent': true
            }
        };
        if (this.endsWith(file, ".json")) {
            response.type('application/json');
        } else if (this.endsWith(file, ".properties")) {
            response.type("text/x-java-properties");
        }
        response.sendFile(
            path + "/" + file,
            options,
            function(err) {
                if (err && response.statusCode != HttpStatus.NOT_MODIFIED && err.code !== "ECONNABORT") {
                    if (response.statusCode == HttpStatus.NOT_FOUND && file !== placeholder) {
                    	sendFile(path, placeholder, response);
                    } else {
                        console.log("utils.sendFile - " + err);
                        response.status(err.status).end();
                    }
                }
            });
    },
    
    endsWith: function(file, suffix) {
        return file.indexOf(suffix, file.length - suffix.length) !== -1;
    },
	    
    isEmpty : function(obj) {
		if (obj === null || typeof obj === "undefined") {
			return true;
		} else if (typeof obj === "string") {
			return obj === "";
		} else if (typeof obj === "object" && "size" in obj) {
			return obj.size === 0;
		} else if (obj.constructor === Array || obj.constructor === String) {
			return obj.length === 0;
		}
		return false;
	},
    
    parseParameters: function(parameters) {
    	var paramMap = {};
    	var paramArray = parameters.split("&"); 
    	for (var i = 0; i < paramArray.length; i++) {
    	    var tokens = paramArray[i].split("=");
    	    paramMap[tokens[0]]=tokens[1];
    	}
    	return paramMap;
    }
};
   