#!/bin/env node
'use strict';

var express = require('express'),
    morgan = require('morgan');


var ipaddress = process.env.OPENSHIFT_NODEJS_IP;
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

if (typeof ipaddress === "undefined") {
    //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
    //  allows us to run/test the app locally.
    console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
    ipaddress = "127.0.0.1";
    port = 9000;
};

var app = express();

app.use(express.static(__dirname + '/app'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/app/index.html');
});


app.listen(port, ipaddress, function () {
    console.log('%s: Node server started on %s:%d ...',
        Date(Date.now()), ipaddress, port);
});
