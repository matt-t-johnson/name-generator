var express = require('express');
var router = express.Router();
var models = require('../models');
var mongoose = require('mongoose');
// Mongoose mpromise deprecated - use bluebird promises
var Promise = require("bluebird");
mongoose.Promise = Promise;


//ROUTES
router.get('/', function (req, res) {
    res.sendFile(__dirname + "../public/index.html");
});

router.get('/search', function(req, res) {
	models.Names.find({}).exec(function(err, doc) {
		if (err) {
			console.log(err);
		}
		else {
			res.send(doc);
		}
	});
});

router.get('/firstnames', function(req, res) {
	models.Names.find()
		.select('entry')
		.where('nameType', 'First Name')
		.exec(function(err, doc) {
			if (err) {
				console.log(err);
			}
			else {
				res.send(doc);
			}
	});
});


router.get('/home', function(req, res) {
	res.render('home');
});

module.exports = router;