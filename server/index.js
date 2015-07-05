var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
	response.sendfile(__dirname + '/server/views/home.html');
});

app.get('/js/:script', function(request, response) {
	var script = req.params.script;
	response.sendfile(__dirname + '/client/module/' + script);
});

app.get('/data/:file', function(request, response) {
	var file = req.params.file;
	response.sendfile(__dirname + '/client/data/' + file);
});

app.get('/assets/:file', function(request, response) {
	var file = req.params.file;
	response.sendfile(__dirname + '/client/assets/' + file);
});

app.listen(app.get('port'), function() {
	console.log('L4W is running on port', app.get('port'));
});
