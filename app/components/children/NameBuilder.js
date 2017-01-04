var React = require('react');

var NameBuilder = React.createClass({
	render: function() {
		return (
					<div className="col-md-5">
						<div className="panel panel-primary">
						  <div className="panel-heading">Character Builder</div>
						  <div className="panel-body">
						  	<div className="row">
						  		<div className="col-md-6">
								    <ul className="list-group">
									    <li className="list-group-item">Cras justo</li>
									    <li className="list-group-item">Dapibus</li>
									    <li className="list-group-item">Morbi</li>
									    <li className="list-group-item">Consectetur</li>
									    <li className="list-group-item">Vestibulum</li>
									  </ul>
									</div>
									<div className="col-md-6">
								    <ul className="list-group">
									    <li className="list-group-item">Cras justo</li>
									    <li className="list-group-item">Dapibus</li>
									    <li className="list-group-item">Morbi</li>
									    <li className="list-group-item">Consectetur</li>
									    <li className="list-group-item">Vestibulum</li>
									  </ul>
									</div>
								</div>
						  </div>
						</div>
					</div>
		);
	}
});

module.exports = NameBuilder;