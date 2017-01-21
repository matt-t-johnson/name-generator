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
			firstNameResults: [],
			lastNameResults: [],
			showFirstNames: false,
			showLastNames: false,
			showNameBuilder: false,
			nb1Name: "Select a first name",
			nb2Name: "Select a last name",
		};
	},
	setParameters: function(params) {
		this.setState(params);
	},
	shouldComponentUpdate: function() {
		// console.log("shouldComponentUpdate: Main");
		return true;
	},
	// If the component changes (i.e. if a search is entered)...
  componentDidUpdate: function() {
  },
	render: function() {
		return (
			<div>
				<Header />
				<div className="container">
					<Query 
						setParameters={this.setParameters}
					/>
					<NameBuilder nb1Name={this.state.nb1Name} nb2Name={this.state.nb2Name} setParameters={this.setParameters}/>
					{this.state.showFirstNames && 
						<FirstNameResults nameResults={this.state.firstNameResults} mainState={this.state} setParameters={this.setParameters}/>
					}
					{this.state.showLastNames && 
						<LastNameResults nameResults={this.state.lastNameResults} mainState={this.state} setParameters={this.setParameters}/>
					}
				</div>
			</div>
		);
	}
});

module.exports = Main;