var React = require('react');

var NameBuilder = React.createClass({
	getInitialState: function() {
		return {
			nb1Selected: false,
			nb2Selected: false, 
		};
	},
	shouldComponentUpdate: function() {
		return true;
	},
	render: function() {
		console.log("Name builder state: ", this.state);
		return (
					<div className="col-md-12">
						<div className="panel panel-primary">
						  <div className="panel-heading">Character Builder</div>
						  <div className="panel-body">
						  	<div className="row">
						  		<div id="nb-choice-1" className="col-md-4 col-md-offset-1 well well-sm">
						  			{!this.state.nb1Selected &&
						  				<span>Placeholder</span>
						  			}
						  			{this.state.nb1Selected &&
						  				<span>{this.props.nb1Name}</span>
						  			}
						  		</div>
						  		<div id="nb-choice-2" className="col-md-4 col-md-offset-1 well well-sm">
						  			{!this.state.nb2Selected &&
						  				<span>Placeholder</span>
						  			}
						  			{this.state.nb2Selected &&
						  				<span>{this.props.nb2Name}</span>
						  			}
						  		</div>
						  		<div>
						  			<button id="nb-discard" className="btn btn-danger">Discard</button>
						  			<button id="nb-save" className="btn btn-primary">Save</button>
						  		</div>
								</div>
						  </div>
						</div>
					</div>
		);
	}
});

module.exports = NameBuilder;