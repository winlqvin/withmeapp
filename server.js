#!/bin/env node


var express = require('express'),
    morgan = require('morgan');


var DEFAULT_PORT =  process.env.OPENSHIFT_NODEJS_PORT || 9000;
var DEFAULT_HOST = process.env.OPENSHIFT_NODEJS_IP || 'localhost';


var app = express();

app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/app/index.html');
});





app.listen(DEFAULT_PORT, DEFAULT_HOST);