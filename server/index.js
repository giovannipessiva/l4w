var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/server'));

app.get('/', function(request, response) {
  response.sendfile(__dirname + '/server/views/home.html');
});

app.listen(app.get('port'), function() {
  console.log('L4W is running on port', app.get('port'));
});
