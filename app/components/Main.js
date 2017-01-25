var React = require('react');
var helpers = require("./utils/helpers");

//CHILDREN COMPONENTS
var Header = require('./children/Header');
var Query = require('./children/Query');
var FirstNameResults = require('./children/FirstNameResults');
var LastNameResults = require('./children/LastNameResults');
var NameBuilder = require('./children/NameBuilder');
var SavedCharacters = require('./children/SavedCharacters');

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
			showSavedCharacters: false,
			nb1Name: "Select a first name",
			nb2Name: "Select a last name",
			characterList: [],
		};
	},
	setParameters: function(params) {
		this.setState(params);
	},
	getFnColWidth: function() {
		if (this.state.lastNameSelect == true) {
			return "col-xs-12 col-sm-6 col-md-6 col-lg-6";
		};
		if (this.state.lastNameSelect == false) {
			return "col-xs-12 col-sm-12 col-md-12 col-lg-12";
		};
	},
	getLnColWidth: function() {
		if (this.state.firstNameSelect == true) {
			return "col-xs-12 col-sm-6 col-md-6 col-lg-6";
		};
		if (this.state.firstNameSelect == false) {
			return "col-xs-12 col-sm-12 col-md-12 col-lg-12";
		};
	},
	shouldComponentUpdate: function() {
		// console.log("shouldComponentUpdate: Main");
		return true;
	},
	// If the component changes (i.e. if a search is entered)...
  componentDidUpdate: function() {
  },
	render: function() {
		var fnColWidth = this.getFnColWidth();
		var lnColWidth = this.getLnColWidth();
		return (
			<div>
				<Header setParameters={this.setParameters}/>
				<div className="container">
					<Query 
						setParameters={this.setParameters}
					/>
					{this.state.showFirstNames && 
						<FirstNameResults nameResults={this.state.firstNameResults} mainState={this.state} setParameters={this.setParameters} width={fnColWidth}/>
					}
					{this.state.showLastNames && 
						<LastNameResults nameResults={this.state.lastNameResults} mainState={this.state} setParameters={this.setParameters} width={lnColWidth}/>
					}
					{this.state.showNameBuilder &&
						<NameBuilder nb1Name={this.state.nb1Name} nb2Name={this.state.nb2Name} setParameters={this.setParameters}/>
					}
				</div>
			</div>
		);
	}
});

module.exports = Main;