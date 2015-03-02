/* ================= INITIALIZATION ======================== */

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var app = express();

// Database settings.
var db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'nieuwe_rekening'
});

// Connect with database.
db.connect( function(err) {
	// Catch errors.
	if (err) {
		console.error('Error connecting to database: ' + err.stack);
		// Exit program since it cannot.
		process.exit(1);
	}
	console.log('Connected to database.');
});

app.use(bodyParser());

// View engine setup
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Setup assets map for css/js/img
app.use("/views", express.static(__dirname + "/views"));
app.use("/assets", express.static(__dirname + "/assets"));

/* ===================== ROUTER =========================== */

// Get an instance of router
var router = express.Router();

// Render index.html
router.get('/', function (req, res) {
  res.render('index', { title: 'De Nieuwe Rekening' });
});

// Create account
router.post('/createAccount', function (req, res ){
	/*
	// Only add account if email is defined.
	if ( req.body.email === undefined ) {
		res.status(400).send("No e-mail defined");
	}
	*/

	var values = {
		'email': req.body.email,
		'voornaam': req.body.voornaam,
		'achternaam': req.body.achternaam,
		'bijnaam': req.body.bijnaam,
		'IBAN': req.body.IBAN,
		'rekeninghouder': req.body.rekeninghouder,
		'stad': req.body.stad,
		'geboortedatum': req.body.geboortedatum
	};

	// Insert account in database
	db.query('INSERT INTO huisgenoot SET ?', values, function( err, result ) {
		// Catch errors.
		if (err) throw err;
	});

	console.log("created account: " + values.voornaam + " " + values.achternaam);
});

// apply router to application
app.use('/', router);

/* =========================== RUN SERVER ==================== */

// Create server
var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('App listening at http://%s:%s', host, port)
});