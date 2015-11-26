#!/bin/env node


var express = require('express'),
    morgan = require('morgan');


var DEFAULT_PORT =  process.env.OPENSHIFT_NODEJS_PORT || 9000;
var DEFAULT_HOST = process.env.OPENSHIFT_NODEJS_IP || 'localhost';

if (DEFAULT_HOST != 'localhost'){
    DEFAULT_PORT = 8080;
}

var app = express();

app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/app/index.html');
});


app.listen(DEFAULT_PORT, DEFAULT_HOST, function() {
            console.log('%s: Node server started on %s:%d ...',
                        Date(Date.now() ), DEFAULT_HOST, DEFAULT_PORT);
        });
