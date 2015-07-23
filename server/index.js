var path = require('path');
var express = require('express');

var mapper = require(__dirname + '/modules/mapper');

var app = express();

app.set('port', (process.env.PORT || 5000));

// Views redirection
app.get('/', function(request, response) {
	response.sendFile(__dirname + '/views/home.html');
});
app.get('/edit', function(request, response) {
	response.sendFile(__dirname + '/views/edit.html');
});

// Resources redirection
app.get('/js/:script', function(request, response) {
	var file = request.params.script;
	var filePath = path.resolve(__dirname + '/../client');
	response.sendFile(filePath + "/" + file);
});
app.get('/lib/:script', function(request, response) {
	var file = request.params.script;
	var filePath = path.resolve(__dirname + '/../client/lib');
	response.sendFile(filePath + "/" + file);
});
app.get('/data/:file', function(request, response) {
	var file = request.params.file;
	var filePath = path.resolve(__dirname + '/../client/data');
	response.sendFile(filePath + "/" + file);
});
app.get('/data/map/:file', function(request, response) {
	var file = request.params.file;
	var filePath = path.resolve(__dirname + '/../client/data/map');
	response.sendFile(filePath + "/" + file);
});
app.get('/assets/:file', function(request, response) {
	var file = request.params.file;
	var filePath = path.resolve(__dirname + '/../client/assets');
	response.sendFile(filePath + "/" + file);
});
app.get('/style/:file', function(request, response) {
	var file = request.params.file;
	var filePath = path.resolve(__dirname + '/../client/style');
	response.sendFile(filePath + "/" + file);
});

// Server logic
app.get('/edit/maps', function(request, response) {
    mapper.updateMaps(request, response);
});

// Startup message
app.listen(app.get('port'), function() {
	console.log('L4W is running on port', app.get('port'));
});
