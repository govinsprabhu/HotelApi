var express = require('express');
var app = express();
var ping = require('./service/ping.js');
ping.ping();
var router = require('./routes/router.js');
app.use('/find',router.news)

module.exports = app;
