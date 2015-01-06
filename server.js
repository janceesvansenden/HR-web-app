'use strict';

// Load modules.
var express = require("express");
var url = require("url");
var http = require("http");

// Define server port.
var port = 3000;

// Make use of express.
var app = express();

// Static assets.
app.use(express.static(__dirname + '/static'));

// Create the server at the specified port.
http.createServer(app).listen(port);