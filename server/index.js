var path = require('path');
var express = require('express');

var mapper = require(__dirname + '/modules/mapper');
var utils = require(__dirname + '/modules/utils');

var app = express();

app.set('port',(process.env.PORT || 5000));

// Views redirection
app.get('/', function(request, response) {
    utils.sendFile(__dirname + '/views/', 'home.html', response);
});
app.get('/edit', function(request, response) {
    utils.sendFile(__dirname + '/views/', 'edit.html', response);
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
app.get('/data/:file', function(request, response) {
    var file = request.params.file;
    var filePath = path.resolve(__dirname + '/../client/data');
    utils.sendFile(filePath, file, response);
});
app.get('/data/:type/:file', function(request, response) {
    var file = request.params.file;
    var typology = request.params.type;
    var filePath = path.resolve(__dirname + '/../client/data/' + typology);
    utils.sendFile(filePath, file, response);
});
app.get('/assets/:file', function(request, response) {
    var file = request.params.file;
    var filePath = path.resolve(__dirname + '/../client/assets');
    utils.sendFile(filePath, file, response);
});
app.get('/assets/:type/:file', function(request, response) {
    var file = request.params.file;
    var typology = request.params.type;
    var filePath = path.resolve(__dirname + '/../client/assets/' + typology);
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
    request.on('data', function(body)  {
        mapper.updateMaps(body, response);
    });   
});

// Startup message
app.listen(app.get('port'), function() {
    console.log('L4W is running on port', app.get('port'));
});
