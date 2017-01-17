var React = require('react');

//GRANDCHILD COMPONENTS
// var ResultLineItem = require('./grandchildren/ResultLineItem');

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
	moveToNameBuilder: function(event) {
		// console.log(event);
		// console.log(event.target.id);
		// var nameID = event.target.id;
		// document.getElementById('nb-choice-1').appendChild(document.getElementById(nameID));
		// // var fragment = document.createDocumentFragment();
		// // fragment.appendChild(document.getElementById(nameID));
		// // document.getElementById('nb-choice-1').appendChild(fragment);
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
									    	<span id="fn-name-1" className="col-md-2">{this.props.nameResults[0].entry}</span>
									    	<button className="btn btn-primary result-btn" type="button" data-toggle="collapse" data-target="#fn-Result-1" aria-expanded="false" aria-controls="fn-Result-1"><span className="glyphicon glyphicon-plus"></span></button>
									    	<button className="btn btn-primary result-btn" onClick={this.moveToNameBuilder}><span className="glyphicon glyphicon-upload"></span></button>
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
								  }
								  {this.props.nameResults[1] &&
								    <li className="list-group-item">
								    	<div className="row">
									    	<span className="col-md-2">{this.props.nameResults[1].entry}</span>
									    	<button className="btn btn-primary result-btn" type="button" data-toggle="collapse" data-target="#fn-Result-2" aria-expanded="false" aria-controls="fn-Result-2"><span className="glyphicon glyphicon-plus"></span></button>
									    	<button className="btn btn-primary result-btn" onClick={this.moveToNameBuilder}><span className="glyphicon glyphicon-upload"></span></button>
									    </div>
									    <div className="collapse" id="fn-Result-2">
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
											    			<td>{this.props.nameResults[1].gender}</td>
											    			<td>{this.props.nameResults[1].origin}</td>
											    			<td>{this.props.nameResults[1].meaning}</td>
											    		</tr>
											    	</tbody>
									    		</table>
									    	</div>
									    </div>
								    </li>
								  }
								  {this.props.nameResults[2] &&
								    <li className="list-group-item">
								    	<div className="row">
									    	<span className="col-md-2">{this.props.nameResults[2].entry}</span>
									    	<button className="btn btn-primary result-btn" type="button" data-toggle="collapse" data-target="#fn-Result-3" aria-expanded="false" aria-controls="fn-Result-3"><span className="glyphicon glyphicon-plus"></span></button>
									    	<button className="btn btn-primary result-btn" onClick={this.moveToNameBuilder}><span className="glyphicon glyphicon-upload"></span></button>
									    </div>
									    <div className="collapse" id="fn-Result-3">
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
											    			<td>{this.props.nameResults[2].gender}</td>
											    			<td>{this.props.nameResults[2].origin}</td>
											    			<td>{this.props.nameResults[2].meaning}</td>
											    		</tr>
											    	</tbody>
									    		</table>
									    	</div>
									    </div>
								    </li>
								  }
								  {this.props.nameResults[3] &&
								    <li className="list-group-item">
								    	<div className="row">
									    	<span className="col-md-2">{this.props.nameResults[3].entry}</span>
									    	<button className="btn btn-primary result-btn" type="button" data-toggle="collapse" data-target="#fn-Result-4" aria-expanded="false" aria-controls="fn-Result-4"><span className="glyphicon glyphicon-plus"></span></button>
									    	<button className="btn btn-primary result-btn" onClick={this.moveToNameBuilder}><span className="glyphicon glyphicon-upload"></span></button>
									    </div>
									    <div className="collapse" id="fn-Result-4">
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
											    			<td>{this.props.nameResults[3].gender}</td>
											    			<td>{this.props.nameResults[3].origin}</td>
											    			<td>{this.props.nameResults[3].meaning}</td>
											    		</tr>
											    	</tbody>
									    		</table>
									    	</div>
									    </div>
								    </li>
								   }
								   {this.props.nameResults[4] &&
								    <li className="list-group-item">
								    	<div className="row">
									    	<span className="col-md-2">{this.props.nameResults[4].entry}</span>
									    	<button className="btn btn-primary result-btn" type="button" data-toggle="collapse" data-target="#fn-Result-5" aria-expanded="false" aria-controls="fn-Result-5"><span className="glyphicon glyphicon-plus"></span></button>
									    	<button className="btn btn-primary result-btn" onClick={this.moveToNameBuilder}><span className="glyphicon glyphicon-upload"></span></button>
									    </div>
									    <div className="collapse" id="fn-Result-5">
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
											    			<td>{this.props.nameResults[4].gender}</td>
											    			<td>{this.props.nameResults[4].origin}</td>
											    			<td>{this.props.nameResults[4].meaning}</td>
											    		</tr>
											    	</tbody>
									    		</table>
									    	</div>
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

module.exports = FirstNameResults;