var React = require('react');

//CHILDREN COMPONENTS
var Header = require('./children/Header');
var Query = require('./children/Query');


var Main = React.createClass({
	render: function() {
		return (
			<div>
				<Header />
				<div className="container">
					<Query />

				</div>
			</div>
		);
	}
});

module.exports = Main;