var express = require('express');
var router = express.Router();

/* GET /default listing. */
router.get('/', function(req, res, next) {
  res.send('Hallo Bart');
});

module.exports = router;
