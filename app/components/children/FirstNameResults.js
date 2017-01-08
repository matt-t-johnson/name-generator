var React = require('react');
var helpers = require("../utils/helpers");
var resultArray = [];


var FirstNameResults = React.createClass({
	getInitialState: function() {
		return this.props.mainState;
	},
	componentWillMount: function() {
		console.log("componentWillMount: Results");
		// this.setState(this.props.mainState);

	},
	shouldComponentUpdate: function() {
		console.log("shouldComponentUpdate: Results");
		return true;
	},
	componentWillUpdate: function() {
		console.log("componentWillUpdate: Results");
	},
	render: function() {
		return (
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						<div className="panel panel-primary">
						  <div className="panel-heading">First Names</div>
						  <div className="panel-body">
						    <ul className="list-group">
							    <li className="list-group-item">{this.props.nameResults[0]}</li>
							    <li className="list-group-item">{this.props.nameResults[1]}</li>
							    <li className="list-group-item">{this.props.nameResults[2]}</li>
							    <li className="list-group-item">{this.props.nameResults[3]}</li>
							    <li className="list-group-item">{this.props.nameResults[4]}</li>
							  </ul>
						  </div>
						</div>
					</div>
		);
	},
	componentDidMount: function() {
		console.log("componentDidMount: Results");

	},
	componentDidUpdate: function(prevProps, prevState) {
		console.log("componentDidUpdate: Results");
	},
});

module.exports = FirstNameResults;