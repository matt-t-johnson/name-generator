var React = require('react');
var helpers = require("./utils/helpers");

//CHILDREN COMPONENTS
var Header = require('./children/Header');
var Query = require('./children/Query');
var Results = require('./children/Results');
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
			showResultsComponent: false,
			showNameBuilder: false
		};
	},
	setParameters: function(params) {
		this.setState(params);
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
					<Query setParameters={this.setParameters}/>
					{this.state.showResultsComponent && 
						<Results nameResults={this.state.results}/>
					}
					{this.state.showNameBuilder &&
						<NameBuilder />
					}
				</div>
			</div>
		);
	}
});

module.exports = Main;