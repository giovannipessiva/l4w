var path = require('path');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
	response.sendFile(__dirname + '/views/home.html');
});

app.get('/js/:script', function(request, response) {
	var script = request.params.script;
	var filePath = path.resolve(__dirname + '/../client/module');
	response.sendFile(filePath + "/" + script);
});

app.get('/data/:file', function(request, response) {
	var file = request.params.file;
	var filePath = path.resolve(__dirname + '/../client/data');
	response.sendFile(filePath + "/" + file);
});

app.get('/assets/:file', function(request, response) {
	var file = request.params.file;
	var filePath = path.resolve(__dirname + '/../client/assets');
	response.sendFile(filePath + "/" + file);
});

app.listen(app.get('port'), function() {
	console.log('L4W is running on port', app.get('port'));
});
