var express = require('express');
var router = express.Router();
var models = require('../models');
var mongoose = require('mongoose');
// Mongoose mpromise deprecated - use bluebird promises
var Promise = require("bluebird");
mongoose.Promise = Promise;

var Character = require("../models/Characters");

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

router.get('/home', function(req, res) {
	res.render('home');
});

router.post('/create', function(req, res) {
	var charName = new Character(req.body);
	console.log("req.body: ", req.body)
	charName.save(function(error, doc) {
		if (error) {
			res.send(error);
		}
		else {
			res.send(doc); 
		}
	});
});

module.exports = router;