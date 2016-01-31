var path = require('path');
var fs = require('fs');

var database = require(__dirname + "/database");

module.exports = {
    updateMaps: function(mapData, response) {
        //Update maps JSON
    	database.write("map",null,mapData,response);
//        var filePath = path.resolve(__dirname + '/../../client/data/map/maps.json');
//        fs.writeFile(filePath, mapData, function(err) {
//            if (err) {
//                console.log(err);
//                //response.sendStatus(500);
//            }
//            console.log("Maps updated: " + filePath);
//            response.sendStatus(200);
//        });
    },
    getTiles: function(response) {
    	var filePath = path.resolve(__dirname + '/../../client/data/resources/tiles.json');
	}
};
   