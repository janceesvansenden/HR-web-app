var express = require('express')
var path = require('path')
var app = express()

// View engine setup
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Setup assets map for css/js/img
app.use("/views", express.static(__dirname + "/views"));
app.use("/assets", express.static(__dirname + "/assets"));

// Render index.html
app.get('/', function (req, res) {
  res.render('index', { title: 'De Nieuwe Rekening' });
});

// Create server
var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('App listening at http://%s:%s', host, port)

})