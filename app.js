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

// Read personal details
router.get('/personal', function( req, res ) {
		
	// Queries for personal details in database.
	db.query( 'SELECT * FROM huisgenoot WHERE email = "jancees@test.nl"', function( err, rows, fields ) {

		if (err) throw err;

		// format the geboortedatum correctly
		var day = rows[0].geboortedatum.getUTCDate()+1
		var month = rows[0].geboortedatum.getUTCMonth()+1;
		var year = rows[0].geboortedatum.getUTCFullYear();

		var gegevens = {
			'voornaam': rows[0].voornaam,
			'achternaam': rows[0].achternaam,
			'email': rows[0].Email,
			'bijnaam': rows[0].bijnaam,
			'stad': rows[0].stad,
			'geboortedatum': day + "-" + month + "-" + year,
			'IBAN': rows[0].IBAN,
			'rekeninghouder': rows[0].rekeninghouder
		};

		res.json(gegevens);
	});

});

router.get('/admin', function(req, res){
	db.query( 'SELECT huis.huisnaam FROM huis JOIN huis_huisgenoot ON huis.huisnaam = huis_huisgenoot.huisnaam WHERE email_huisgenoot="jancees@test.nl";', function( err, rows, fields ){
		if (err) throw err;
		var huis = {'huisnaam': rows[0].huisnaam};
		res.json(huis);
	})

})

router.get('/declas', function(req, res){
	db.query('SELECT huisgenoot.Email, huisgenoot.voornaam FROM huisgenoot JOIN huis_huisgenoot ON huisgenoot.Email = huis_huisgenoot.email_huisgenoot WHERE huis_huisgenoot.huisnaam = "Huize avondzon";', function(err, rows, fields){
		if (err) throw err;

		len = rows.length;

		var deelnemers = [];

		for(var i=0; i<len; i++){
			deelnemers[i] = {
				'email': rows[i].Email,
				'voornaam': rows[i].voornaam
			};
		}
		res.json(deelnemers);
	})
})


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

// Insert declaration
router.post('/declaratieInvoer', function (req, res ){
	// Verwerk data van declaratie
	console.log("bedrag: " + req.body.bedrag);
	console.log("naam: " + req.body.wat);
	console.log("datum: " + req.body.datum);	
	
	// maak decla klaar voor invoer in database
	var values = {
		'bedrag': req.body.bedrag,
		'naam': req.body.wat,
		'datum': req.body.datum,
		'declaratie_flag': 1,
		'turf_flag': 0,
		'naam_kostenpost': "niet verwerkt",
		'tab_kostenpost': "niet verwerkt",
		'huisnaam_kostenpost': "Huize avondzon",
		'email_huisgenoot': "jancees@test.nl"
	};

	// Insert declaration in database
	db.query('INSERT INTO invoer SET ?', values, function( err, result ) {
		// Catch errors.
		if (err) throw err;
	});

	console.log("declaratie ingevoerd: " + values.naam + ", €" + values.bedrag);
});

// Maak huis aan
router.post('/huisAanmaken', function (req, res ){
	var values = {
		'huisnaam': req.body.huisnaam,
		'wachtwoord': req.body.wachtwoord,
		'straatnaam': req.body.straatnaam,
		'huisnummer': req.body.huisnummer,
		'plaats': req.body.plaats,
		'studentenvereniging': req.body.studentenvereniging,
		'email': req.body.email,
		'IBAN': req.body.IBAN,
		'rekeninghouder': req.body.rekeninghouder
	};

	// Insert account in database
	db.query('INSERT INTO huis SET ?', values, function( err, result ) {
		// Catch errors.
		if (err) throw err;
	});

	console.log("Huis aangemaakt: " + values.huisnaam);
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