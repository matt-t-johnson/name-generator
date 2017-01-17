var React = require('react');

var ResultLineItem = React.createClass({
	getInitialState: function() {
		return null;
	},
	componentWillMount: function() {
		// console.log("componentWillMount: Results");
		// this.setState(this.props.mainState);
	},
	shouldComponentUpdate: function() {
		// console.log("shouldComponentUpdate: Results");
		return true;
	},
	componentWillUpdate: function() {
		// console.log("componentWillUpdate: Results");
	},
	render: function() {
			return (
				<div>
					{(function() {
							for (var i=0; i<5; i++) {
								return 
									<div>
										<li className="list-group-item">
								    	<div className="row">
									    	<span id="fn-name-1" className="col-md-2">{this.props.nameResults[0].entry}</span>
									    	<button className="btn btn-primary result-btn" type="button" data-toggle="collapse" data-target="#fn-Result-1" aria-expanded="false" aria-controls="fn-Result-1"><span className="glyphicon glyphicon-plus"></span></button>
									    	<button className="btn btn-primary result-btn" onClick={this.moveToNameBuilder}><span className="glyphicon glyphicon-upload"></span></button>
									    	<button id="fn-save-1" className="btn btn-primary result-btn"><span className="glyphicon glyphicon-lock"></span></button>
									    </div>
									    <div className="collapse" id="fn-Result-1">
									    	<div className="well collapsibleResult">
									    		<table className="table table-sm table-responsive">
									    			<thead className="thead-default">
										    			<tr>
											    			<th>Gender</th>
											    			<th>Origin</th>
											    			<th>Meaning</th>
											    		</tr>
											    	</thead>
											    	<tbody>
											    		<tr>
											    			<td>{this.props.nameResults[0].gender}</td>
											    			<td>{this.props.nameResults[0].origin}</td>
											    			<td>{this.props.nameResults[0].meaning}</td>
											    		</tr>
											    	</tbody>
									    		</table>
									    	</div>
									    </div>
								    </li>
							    </div>
							  ;
							}  
					})};  
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

module.exports = ResultLineItem;