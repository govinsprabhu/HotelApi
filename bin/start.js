
var app = require('../app.js');
var http = require('http');

app.set('port','3000');
http.createServer(app).listen('3000');



