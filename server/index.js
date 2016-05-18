var path = require('path');
var express = require('express');
var compression = require('compression');
var google = require('googleapis');
var GoogleAuth = require('google-auth-library');

var mapper = require(__dirname + '/modules/mapper');
var utils = require(__dirname + '/modules/utils');
var database = require(__dirname + '/modules/database');
var security = require(__dirname + '/modules/security');

var app = express();
app.use(compression());
app.set('port',(process.env.PORT || 5000));

// Views redirection
app.get('/', function(request, response) {
    utils.sendFile(__dirname + '/views/', 'home.html', response);
});
app.get('/edit', function(request, response) {
    utils.sendFile(__dirname + '/views/', 'auth.html', response);
});
app.post('/edit', function(request, response) {
	security.getBodyData(request,response,function(data){
		console.log(data);
		utils.sendFile(__dirname + '/views/', 'edit.html', response);
	});
});

// Resources redirection
app.get('/js/:script', function(request, response) {
    var file = request.params.script;
    var filePath = path.resolve(__dirname + '/../client');
    utils.sendFile(filePath, file, response);
});
app.get('/lib/:script', function(request, response) {
    var file = request.params.script;
    var filePath = path.resolve(__dirname + '/../client/lib');
    utils.sendFile(filePath, file, response);
});
app.get('/data/:type', function(request, response) {
	var type = request.params.type;
	database.read(type, null, response);
});
app.get('/data/:type/:file', function(request, response) {
    var file = request.params.file;
    var type = request.params.type;
    
	// FIXME gestione temporanea, in attesa di passare tutto su DB
	if (type !== "map") {
		var filePath = path.resolve(__dirname + '/../client/data/' + type);
		utils.sendFile(filePath, file, response);
		return;
	}
	database.read(type, file, response);

});
app.get('/assets/:file', function(request, response) {
    var file = request.params.file;
    var filePath = path.resolve(__dirname + '/../client/assets');
    utils.sendFile(filePath, file, response);
});
app.get('/assets/:type/:file', function(request, response) {
    var file = request.params.file;
    var type = request.params.type;
    var filePath = path.resolve(__dirname + '/../client/assets/' + type);
    utils.sendFile(filePath, file, response);
});
app.get('/style/:file', function(request, response) {
    var file = request.params.file;
    var filePath = path.resolve(__dirname + '/../client/style');
    utils.sendFile(filePath, file, response);
});
app.get('/style/jstree/:file', function(request, response) {
    var file = request.params.file;
    var filePath = path.resolve(__dirname + '/../client/style/jstree');
    utils.sendFile(filePath, file, response);
});

// Server logic
app.post('/edit/maps', function(request, response) {
	security.getBodyData(request,response,function(data){
        mapper.updateMaps(data, response);
	});
});

// Initialize DB connection
database.init().then(
	function() {
		app.listen(app.get('port'), function() {
			console.log('L4W is running on port', app.get('port'));
		});
	},
	function() {
		exit();
	}
);
