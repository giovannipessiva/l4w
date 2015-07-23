var path = require('path');
var fs = require('fs');

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
        response.sendFile(path + "/" + file, options, function(err) {
            if (err && response.statusCode != 304 && err.code !== "ECONNABORT") {
            	if(response.statusCode == 404 && file !== placeholder) {
            		sendFile(path,placeholder,response);
            	} else {
	                console.log("utils.sendFile - " + err);
	                response.status(err.status).end();
            	}
            }
        });
    }
};
   