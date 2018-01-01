const path = require('path');
const fs = require('fs');
const HttpStatus = require('http-status-codes');

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
        } else if (this.endsWith(file, ".js")) {
            response.type("text/javascript");
        }
        response.sendFile(
            path + "/" + file,
            options,
            function(err) {
                if (err && response.statusCode != HttpStatus.NOT_MODIFIED && err.code !== "ECONNABORT") {
                    if (response.statusCode == HttpStatus.NOT_FOUND && file !== placeholder) {
                    	sendFile(path, placeholder, response);
                    } else {
                    	// Do not log 404 on mimified script
                    	if(!file.includes("l4w.min.js")) {
                    		console.log("utils.sendFile - " + err);
                    	}
                        response.status(err.status).send("");
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
    },
    
    listFiles: function(filePath, response) {
    	fs.readdir(filePath, (err, files) => {
    		for(let i = 0; i < files.length; i++) {
    			let file = files[i];
    			let is404 = file.startsWith("404")
    			let isHidden = file.startsWith(".")
    			let isDirectory = fs.lstatSync(filePath + "\\" + file + "\\").isDirectory();
    			if (is404 || isHidden || isDirectory) {
    				files.splice(i, 1);
    				i--;
        		}	
    		}
			response.json(files);
    	})
    }
};
   