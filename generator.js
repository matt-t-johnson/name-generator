//DEPENDENCIES
var models  = require('./models');
var sequelizeConnection = models.sequelize;

//INITIALIZE FIREBASE
var config = {
    apiKey: "AIzaSyANvsJYpIEvw-ip-uZMFi5xzjGUnOuxzeA",
    authDomain: "name-generator-66785.firebaseapp.com",
    databaseURL: "https://name-generator-66785.firebaseio.com",
    storageBucket: "name-generator-66785.appspot.com",
    messagingSenderId: "419423276838"
  };
  firebase.initializeApp(config);

var database = firebase.database();


//FUNCTIONS
function generate () {
	return firstNames[Math.floor(Math.random()*firstNames.length)];
};

function findFemaleNames () {
	return models.Name.findAndCountAll({
		where: {
			gender: female
		},
		limit: 10
	})
	.then(function(result) {
		console.log(result.count);
		console.log(result.rows);
	});
};

