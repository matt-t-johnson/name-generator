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
			turkishSelect: false
		};
	},
	setParameters: function(params) {
		this.setState(params);
	},
	// If the component changes (i.e. if a search is entered)...
  componentDidUpdate: function() {
    // Run the query for the address
    helpers.runQuery(this.state).then(function(data) {
  		console.log("Data: ", data);
    }.bind(this));
  },
	render: function() {
		return (
			<div>
				<Header />
				<div className="container">
					<Query setParameters={this.setParameters}/>
					<Results />
					<Results />
					<NameBuilder />
				</div>
			</div>
		);
	}
});

module.exports = Main;