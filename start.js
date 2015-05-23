
var app = require('./app.js');
var http = require('http');

app.set('port','3000');
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('News Engine app listening at http://%s:%s', host, port);

});


