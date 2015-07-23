var fs = require('fs');

module.exports = {
    updateMaps: function(request, response) {
        //Update maps JSON
        var filePath = path.resolve(__dirname + '/../client/data/map/test.json');
        fs.writeFile(filePath, JSON.stringify(request.params.maps), function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("Maps updated: " + filePath);
        });
    }
};
   