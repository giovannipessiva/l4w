var path = require('path');
var fs = require('fs');

module.exports = {
    updateMaps: function(mapData, response) {
        //Update maps JSON
        var filePath = path.resolve(__dirname + '/../../client/data/map/maps.json');
        fs.writeFile(filePath, mapData, function(err) {
            if (err) {
                console.log(err);
                //response.sendStatus(500);
            }
            console.log("Maps updated: " + filePath);
            response.sendStatus(200);
        });
    }
};
   