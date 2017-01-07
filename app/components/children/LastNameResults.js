var React = require('react');
var helpers = require("../utils/helpers");
var resultArray = [];


var LastNameResults = React.createClass({
	getInitialState: function() {
		return this.props.mainState;
	},
	componentWillMount: function() {
		console.log("componentWillMount: Results");
		if (this.props.mainState.showLastNames) {
			return true;
		}
		else return false;

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
					<div className="col-md-3">
						<div className="panel panel-primary">
						  <div className="panel-heading">Last Names</div>
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

module.exports = LastNameResults;