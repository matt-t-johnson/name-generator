var React = require('react');

//CHILDREN COMPONENTS
var Header = require('./children/Header');
var Query = require('./children/Query');
var Results = require('./children/Results');
var NameBuilder = require('./children/NameBuilder');

var Main = React.createClass({
	render: function() {
		return (
			<div>
				<Header />
				<div className="container">
					<Query />
					<Results />
					<Results />
					<NameBuilder />
				</div>
			</div>
		);
	}
});

module.exports = Main;