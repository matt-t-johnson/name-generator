var React = require('react');
var helpers = require("./utils/helpers");

//CHILDREN COMPONENTS
var Header = require('./children/Header');
var Query = require('./children/Query');
var FirstNameResults = require('./children/FirstNameResults');
var LastNameResults = require('./children/LastNameResults');
var NameBuilder = require('./children/NameBuilder');

var Main = React.createClass({
	getInitialState: function() {
		return {
			maleSelect: false,
			femaleSelect: false,
			firstNameSelect: false,
			lastNameSelect: false,
			norseSelect: false,
			turkishSelect: false,
			results: [],
			showFirstNames: false,
			showLastNames: false,
			showNameBuilder: false
		};
	},
	setParameters: function(params) {
		this.setState(params);
	},
	shouldComponentUpdate: function() {
		console.log("shouldComponentUpdate: Main");
		return true;
	},
	// If the component changes (i.e. if a search is entered)...
  componentDidUpdate: function() {
  },
  shuffleResults: function(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
	  while (0 !== currentIndex) {
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }
	  return array;
	},
	render: function() {
		return (
			<div>
				<Header />
				<div className="container">
					<Query 
						setParameters={this.setParameters}
						shuffleResults={this.shuffleResults}
					/>
					{this.state.showFirstNames && 
						<FirstNameResults nameResults={this.state.results} mainState={this.state}/>
					}
					{this.state.showLastNames && 
						<LastNameResults nameResults={this.state.results} mainState={this.state}/>
					}
				</div>
			</div>
		);
	}
});

module.exports = Main;