var path = require('path');
var express = require('express');
var favicon = require('serve-favicon');
var compression = require('compression');
var pg = require('pg');
var Sequelize = require('sequelize');
var sequelize;

var mapper = require(__dirname + '/modules/mapper');
var utils = require(__dirname + '/modules/utils');

//Test DB connection
console.log("Testing PostgreSQL connection...");
if (utils.isEmpty(process.env.DATABASE_URL)) {
    console.error("Env variable DATABASE_URL undefined!");
    process.exit(1);
} else {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
            //ssl: true //Required for connection to Heroku PostgreSQL
        }
    });

    sequelize.authenticate().then(function() {
        console.log("Connection to PostgreSQL successful");
    }).catch(function(err) {
        console.error("Connection to PostgreSQL failed: " + err);
        process.exit(1);
    }).done();
}

var app = express();
app.use(compression());
app.use(favicon(path.resolve(__dirname + "/../client/style/favicon.ico")));
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
    var type = request.params.type;
    var filePath = path.resolve(__dirname + '/../client/data/' + type);
    utils.sendFile(filePath, file, response);
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
    request.on('data', function(body) {
        mapper.updateMaps(body, response);
    });
});

// Startup message
app.listen(app.get('port'), function() {
    console.log('L4W is running on port', app.get('port'));
});
