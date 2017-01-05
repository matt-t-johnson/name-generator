var React = require('react');

var Results = React.createClass({
	render: function() {
		return (
					<div className="col-md-3">
						<div className="panel panel-primary">
						  <div className="panel-heading">First Names</div>
						  <div className="panel-body">
						    <ul className="list-group">
							    <li className="list-group-item">{this.props.nameResults}</li>
							    <li className="list-group-item">{this.props.nameResults}</li>
							    <li className="list-group-item">{this.props.nameResults}</li>
							    <li className="list-group-item">Porta ac consectetur ac</li>
							    <li className="list-group-item">Vestibulum at eros</li>
							  </ul>
						  </div>
						</div>
					</div>
		);
	}
});

module.exports = Results;