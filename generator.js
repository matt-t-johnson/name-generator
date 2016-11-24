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

var firstNames = {
	norse: [
		"",
		"",
	],
	german: [
	],
	irish: [
	]
};

var lastNames = {
	norse: [
		"",
		"",
	],
	german: [
	],
	irish: [
	]
};


//FUNCTIONS
function generate () {
	return firstNames[Math.floor(Math.random()*firstNames.length)];
};

function addToList () {

}