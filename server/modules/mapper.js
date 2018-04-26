const path = require('path');
const fs = require('fs');

const database = require(__dirname + "/database");

module.exports = {
    updateMap: function(mapId, mapData, user, response) {
    	database.write("map", mapId, mapData, user, response);
    },
	updateMaps: function(mapData, user, response) {
		module.exports.updateMap(null, mapData, user, response);
    }
};
   