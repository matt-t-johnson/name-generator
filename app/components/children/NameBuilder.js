var React = require('react');

var NameBuilder = React.createClass({
	render: function() {
		return (
					<div className="col-md-12">
						<div className="panel panel-primary">
						  <div className="panel-heading">Character Builder</div>
						  <div className="panel-body">
						  	<div className="row">
						  		<div id="nb-choice-1" className="col-md-4 col-md-offset-1 well well-sm">
						  			<span>Placeholder</span>
						  			<button id="nb-discard-1" className="btn btn-danger">Discard</button>
						  			<button id="nb-save-1" className="btn btn-primary">Save</button>
						  		</div>
						  		<div id="nb-choice-2" className="col-md-4 col-md-offset-1 well well-sm">
						  			<span>Placeholder</span>
						  			<button id="nb-discard-2" className="btn btn-danger">Discard</button>
						  			<button id="nb-save-2" className="btn btn-primary">Save</button>
						  		</div>
								</div>
						  </div>
						</div>
					</div>
		);
	}
});

module.exports = NameBuilder;