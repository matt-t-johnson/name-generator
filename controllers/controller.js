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

router.post('/search', function(req, res) {
	// var gender = req.body.gender;
	// var culture = req.body.culture;
	// var nameType = req.body.type;
	
	// console.log("request: ", req);
	// console.log("gender: ", gender, "culture ", culture, "nameType ", nameType);

	models.names.find({}).exec(function(err, doc) {
		if (err) {
			console.log(err);
		}
		else {
			res.send(doc);
		}
	});
});


router.get('/characters', function(req, res) {
	models.Characters.find({}).exec(function(err, doc) {
		if (err) {
			console.log(err);
		}
		else {
			res.send(doc);
		}
	});
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