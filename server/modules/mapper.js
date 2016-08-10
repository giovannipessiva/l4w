var path = require('path');
var fs = require('fs');
var HttpStatus = require('http-status-codes');

var database = require(__dirname + "/database");

module.exports = {
    updateMap: function(mapId, mapData, response) {
    	database.write("map",mapId,mapData,response);
    },
	updateMaps: function(mapData, response) {
		module.exports.updateMap(null,mapData,response);
    },
    getTiles: function(response) {
    	var filePath = path.resolve(__dirname + '/../../client/data/resources/tiles.json');
	}
};
   