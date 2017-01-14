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
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						<div className="panel panel-primary">
						  <div className="panel-heading">First Names</div>
						  <div className="panel-body">
						    <ul className="list-group">
							    {this.props.nameResults[0] &&
								    <li className="list-group-item">
								    	<div className="row">
									    	<span className="col-md-2">{this.props.nameResults[0].entry}</span>
									    	<button className="btn btn-primary result-btn"><span className="glyphicon glyphicon-plus"></span></button>
									    	<button className="btn btn-primary result-btn"><span className="glyphicon glyphicon-upload"></span></button>
									    	<button id="fn-save-1" className="btn btn-primary result-btn"><span className="glyphicon glyphicon-lock"></span></button>
									    </div>
								    </li>
								  }
								  {this.props.nameResults[1] &&
								    <li className="list-group-item">
								    	<div className="row">
									    	<span className="col-md-2">{this.props.nameResults[1].entry}</span>
									    	<button className="btn btn-primary result-btn"><span className="glyphicon glyphicon-plus"></span></button>
									    	<button className="btn btn-primary result-btn"><span className="glyphicon glyphicon-upload"></span></button>
									    	<button id="fn-save-1" className="btn btn-primary result-btn"><span className="glyphicon glyphicon-lock"></span></button>
									    </div>
								    </li>
								  }
								  {this.props.nameResults[2] &&
								    <li className="list-group-item">
								    	<div className="row">
									    	<span className="col-md-2">{this.props.nameResults[2].entry}</span>
									    	<button className="btn btn-primary result-btn"><span className="glyphicon glyphicon-plus"></span></button>
									    	<button className="btn btn-primary result-btn"><span className="glyphicon glyphicon-upload"></span></button>
									    	<button id="fn-save-1" className="btn btn-primary result-btn"><span className="glyphicon glyphicon-lock"></span></button>
									    </div>
								    </li>
								  }
								  {this.props.nameResults[3] &&
								    <li className="list-group-item">
								    	<div className="row">
									    	<span className="col-md-2">{this.props.nameResults[3].entry}</span>
									    	<button className="btn btn-primary result-btn"><span className="glyphicon glyphicon-plus"></span></button>
									    	<button className="btn btn-primary result-btn"><span className="glyphicon glyphicon-upload"></span></button>
									    	<button id="fn-save-1" className="btn btn-primary result-btn"><span className="glyphicon glyphicon-lock"></span></button>
									    </div>
								    </li>
								   }
								   {this.props.nameResults[4] &&
								    <li className="list-group-item">
								    	<div className="row">
									    	<span className="col-md-2">{this.props.nameResults[4].entry}</span>
									    	<button className="btn btn-primary result-btn"><span className="glyphicon glyphicon-plus"></span></button>
									    	<button className="btn btn-primary result-btn"><span className="glyphicon glyphicon-upload"></span></button>
									    	<button className="btn btn-primary result-btn"><span className="glyphicon glyphicon-lock"></span></button>
									    </div>
								    </li>
								   }
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