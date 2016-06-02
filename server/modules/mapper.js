var path = require('path');
var fs = require('fs');
var HttpStatus = require('http-status-codes');

var database = require(__dirname + "/database");

module.exports = {
    updateMaps: function(mapData, response) {
        //Update maps JSON
    	database.write("map",null,mapData,response);
//        var filePath = path.resolve(__dirname + '/../../client/data/map/maps.json');
//        fs.writeFile(filePath, mapData, function(err) {
//            if (err) {
//                console.log(err);
//                //response.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
//            }
//            console.log("Maps updated: " + filePath);
//            response.sendStatus(HttpStatus.OK);
//        });
    },
    getTiles: function(response) {
    	var filePath = path.resolve(__dirname + '/../../client/data/resources/tiles.json');
	}
};
   