var React = require('react');

var Results = React.createClass({
	render: function() {
		return (
					<div className="col-md-3">
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
	}
});

module.exports = Results;