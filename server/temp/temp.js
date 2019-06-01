var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello world!');
  //res.send(req);
});

app.get('/test*', function(req, res) {
  console.log('/test* GET request');
  res.send('This is test.');
});

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('server started at http://%s:%s', host, port);
});
