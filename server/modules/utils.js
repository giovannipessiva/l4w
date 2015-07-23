var path = require('path');
var fs = require('fs');

module.exports = {
    sendFile: function(file, response) {
        //Send a file as response
        var options = {
            dotfiles: 'deny',
            headers: {
                'x-timestamp': Date.now(),
                'x-sent': true
            }
        };
        response.sendFile(file, options, function(err) {
            if (err && response.statusCode != 304 && err.code !== "ECONNABORT") {
                console.log("utils.sendFile - " + err);
                response.status(err.status).end();
            }
        });
    }
};
   