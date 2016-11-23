var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function (req, res) {
    res.redirect('/home');
});

router.get('/home', function (req, res) {
        res.render('home');
});

module.exports = router;