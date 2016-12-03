var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function (req, res) {
    res.redirect('/home');
});

router.get('/home', function (req, res) {
	var data = models.Name.findAll().then(function(data) {
		var hbsObject = { Name: data };
		console.log(hbsObject);
		res.render('home', hbsObject);
	});
});

router.get('/search', function (req, res) {

});

module.exports = router;