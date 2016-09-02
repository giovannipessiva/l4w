var path = require('path');
var express = require('express');
var compression = require('compression');
var HttpStatus = require('http-status-codes');

var mapper = require(__dirname + '/modules/mapper');
var utils = require(__dirname + '/modules/utils');
var database = require(__dirname + '/modules/database');
var security = require(__dirname + '/modules/security');
var session = require(__dirname + '/modules/session');

var app = express();
app.use(compression());
app.use(session.init());
app.set("port",(process.env.PORT || 5000));

// Views redirection
app.get('/', function(request, response) {
	if(!utils.isEmpty(request.query.logout) && request.query.logout === "1") {
		session.doLogout(request,response,function() {
			utils.sendFile(__dirname + '/views/', 'home.html', response);
		});
	} else {
		if(session.isAuthenticated(request)) {
			database.logUserSessionAccess(request.session.user);
			utils.sendFile(__dirname + '/views/', 'home-auth.html', response);
		} else {
			utils.sendFile(__dirname + '/views/', 'home.html', response);
		};
	}
});
app.post('/', function(request, response) {
	session.doLogin(request,response,function() {
		utils.sendFile(__dirname + '/views/', 'home-auth.html', response);
	}, function() {
		utils.sendFile(__dirname + '/views/', 'home.html', response);
	});
});
app.get('/edit', function(request, response) {
	if(!session.isAuthenticated(request)) {
		utils.sendFile(__dirname + '/views/', 'auth.html', response);
	} else {
		database.logUserSessionAccess(request.session.user);
		utils.sendFile(__dirname + '/views/', 'edit.html', response);
	}
});
app.post('/edit', function(request, response) {
	session.doLogin(request,response,function() {
		utils.sendFile(__dirname + '/views/', 'edit.html', response);
	}, function() {
		utils.sendFile(__dirname + '/views/', 'auth.html', response);
	});
});

app.get('/logout', function(request, response) {
	session.doLogout(request,response,function() {
        utils.sendFile(__dirname + '/views/', 'auth.html', response);
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
	var user = null;
	if(session.isAuthenticated(request)) {
		user = request.session.user;
	}
	database.read(type, null, user, response);
});
app.get('/data/:type/:file', function(request, response) {
    var file = request.params.file;
    var type = request.params.type;
	// FIXME gestione temporanea, in attesa di passare tutto su DB
	if (type !== "map" && type !== "save") {
		var filePath = path.resolve(__dirname + '/../client/data/' + type);
		utils.sendFile(filePath, file, response);
		return;
	}
	var user = null;
	if(session.isAuthenticated(request)) {
		user = request.session.user;
	}
	database.read(type, file, user, response);
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
    var filePath = path.resolve(__dirname + '/../server/views/style');
    utils.sendFile(filePath, file, response);
});
app.get('/style/:type/:file', function(request, response) {
	var type = request.params.type;
	var file = request.params.file;
    var filePath = path.resolve(__dirname + '/../server/views/style/'+type);
    utils.sendFile(filePath, file, response);
});

// Server logic
app.post('/edit/maps', function(request, response) {
	if(session.isAuthenticated(request)) {
		security.getBodyData(request,response,function(data){
	        mapper.updateMaps(data, response);
		});
	} else {
		response.status(HttpStatus.FORBIDDEN).end();
	}
});

app.post('/edit/map/:id', function(request, response) {
	if(session.isAuthenticated(request)) {
		var mapId = request.params.id;
		security.getBodyData(request,response,function(data){
	        mapper.updateMap(mapId, data, response);
		});
	} else {
		response.status(HttpStatus.FORBIDDEN).end();
	}
});

app.get('/news', function(request, response) {
	if(session.isAuthenticated(request)) {
		database.getNews(request.session.user, response);
	} else {
		response.status(HttpStatus.FORBIDDEN).end();
	}
});

// Initialize DB connection
database.init().then(
	function() {
		app.listen(app.get("port"), function() {
			console.log('L4W is running on port', app.get('port'));
		});
	},
	function() {
		exit();
	}
);
