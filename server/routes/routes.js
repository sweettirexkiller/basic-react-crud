var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/* GET home page */
router.get('/', function (req, res) {
    res.send('Express REST API');
});

module.exports = router;