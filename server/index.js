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

// Middleware
app.use(function(req, res, next) {
	// Remove trailing slash
    if (req.path.substr(-1) === "/" && req.path.length > 1) {
        var query = req.url.slice(req.path.length);
        res.redirect(301, req.path.slice(0, -1) + query);
    } else {
        next();
    }
});
app.use(function(req, res, next) {
	// The 'x-forwarded-proto' check is for Heroku
	if (!req.secure && req.get('x-forwarded-proto') !== 'https'
			&& process.env.NODE_ENV !== "development") {
		return res.redirect('https://' + req.get('host') + req.url);
	}
	next();
});

// Views redirection
app.get('/', function(request, response) {
	if(!utils.isEmpty(request.query.logout) && request.query.logout === "1") {
		session.doLogout(request,response,function() {
			utils.sendFile(__dirname + '/views/', 'home.html', response);
		});
	} else {
		if(session.isAuthenticated(request)) {
			database.logUserSessionAccess(session.getUser(request));
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
		database.logUserSessionAccess(session.getUser(request));
		utils.sendFile(__dirname + '/views/', 'hub.html', response);
	}
});
app.post('/edit', function(request, response) {
	session.doLogin(request,response,function() {
		utils.sendFile(__dirname + '/views/', 'hub.html', response);
	}, function() {
		utils.sendFile(__dirname + '/views/', 'auth.html', response);
	});
});
app.get("/edit/:editor", function(request, response) {
	if(!session.isAuthenticated(request)) {
		utils.sendFile(__dirname + '/views/', 'auth.html', response);
	} else {
		database.logUserSessionAccess(session.getUser(request));
		let editor = request.params.editor;
		utils.sendFile(__dirname + '/views/editor/', editor + ".html", response);
	}
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
		user = session.getUser(request);
	}
	database.read(type, null, user, response);
});
app.get('/data/:type/:file', function(request, response) {
    var file = request.params.file;
    var type = request.params.type;
	// FIXME gestione temporanea, in attesa di passare tutto su DB
	if (type !== "map" && type !== "save" && type !== "tileset") {
		var filePath = path.resolve(__dirname + '/../client/data/' + type);
		utils.sendFile(filePath, file, response);
		return;
	}
	database.read(type, file, session.getUser(request), response);
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
	        mapper.updateMaps(data, session.getUser(request), response);
		});
	} else {
		response.status(HttpStatus.FORBIDDEN).send("");
	}
});

app.post('/edit/:type/:id', function(request, response) {
	if(session.isAuthenticated(request)) {
		var fileId = request.params.id;
		var type = request.params.type;
		security.getBodyData(request, response, function(data){
			switch(type) {
			case "map":
				mapper.updateMap(fileId, data, session.getUser(request), response);
				break;
			case "save":
				database.write("save", fileId, data, session.getUser(request), response);
				break;
			}
		});
	} else {
		response.status(HttpStatus.FORBIDDEN).send("");
	}
});

app.get('/news', function(request, response) {
	if(session.isAuthenticated(request)) {
		database.getNews(session.getUser(request), response);
	} else {
		response.status(HttpStatus.FORBIDDEN).send("");
	}
});

// Initialize DB connection
database.init().then(
	function() {
		app.listen(app.get("port"), function() {
			console.log("L4W is running on port", app.get("port"));
		}).on("error", function(err) {
			if(err.code === "EADDRINUSE") {
				console.error("Another instance is already running on port " + err.port);
			} else {
				console.error(err);
			}
			process.exit();
		});
	},
	function() {
		process.exit();
	}
);
