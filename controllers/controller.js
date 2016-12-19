var express = require('express');
var router = express.Router();
var models = require('../models');
var mongoose = require("mongoose");

router.get('/', function (req, res) {
    res.redirect('/home');
});

//SEQUELIZE VERSION
router.get('/home', function (req, res) {
	var data = models.Name.findAll().then(function(data) {
		var hbsObject = { Name: data };
		console.log(hbsObject);
		res.render('home', hbsObject);
	});
});

router.get('/search/:gender', function (req, res) {
	var data = models.Names
		.find({})
		.where('gender').equals(req.params.gender)
		// .where('origin').equals(req.params.origin)
		// .where('nameType').equals(req.params.nameType)
		.limit(10)
		.exec(callback)
	.then(function(data) {
		var hbsObject = { Name: data };
		console.log(hbsObject);
		res.render('home', hbsObject);
	});
});

// router.get('/search/:male/:female/:first', function (req, res) {

// 	var zip = req.params.zip;

// 	var nameGender = req.params.gender;
// 	var nameOrigin = req.params.origin;
// 	var typeOfName = req.params.nameType;

// 	Names
// 		.where('gender').equals(nameGender)
// 		.where('origin').equals(nameOrigin)
// 		.where('nameType').equals(typeOfName)
// 		.limit(searchLimit)
// 		.exec(callback);
// });

module.exports = router;