#!/bin/env node
'use strict';

var express = require('express'),
    morgan = require('morgan'),
    cors = require('cors'),
    passport = require('passport');
//PASSPORT
require('./config/passport')(passport);

var ipaddress = process.env.OPENSHIFT_NODEJS_IP;
var port = process.env.OPENSHIFT_NODEJS_PORT || 9000;

if (typeof ipaddress === "undefined") {
    //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
    //  allows us to run/test the app locally.
    console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
    ipaddress = "127.0.0.1";
    port = 9000;
};

var app = express();
var users = require('./routes/users');
app.use('/users', users);
app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/assets'));
app.use(cors());
app.use('/bower_components',  express.static(__dirname + '/bower_components')); // Use BowerComponents
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/app/index.html');
});

var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
   console.log('new user');
    socket.on('greetings', function(msg){
        console.log(msg.username);
    });
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});
http.listen(port, ipaddress, function () {
    console.log('%s: Node server started on %s:%d ...',
        Date(Date.now()), ipaddress, port);
});
