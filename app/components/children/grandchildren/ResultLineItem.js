var React = require('react');

var ResultLineItem = React.createClass({
	shouldComponentUpdate: function() {
		// console.log("shouldComponentUpdate: Results");
		return true;
	},
	buttonClick: function() {
		this.props.moveToNameBuilder(this.props.index);
	},
	render: function() {
			var idName = `${this.props.nameType}-name-${this.props.index+1}`;
			var dataTarget = `#${this.props.nameType}-Result-${this.props.index+1}`;
			var xnResult = `${this.props.nameType}-Result-${this.props.index+1}`;
			return (
				<div>
					<li className="list-group-item">
			    	<div className="row">
				    	<span id={idName} className="col-md-2">{this.props.nameResult.entry}</span>
				    	<button className="btn btn-primary result-btn" type="button" data-toggle="collapse" data-target={dataTarget} aria-expanded="false" aria-controls={xnResult}><span className="glyphicon glyphicon-plus"></span></button>
				    	<button id="moveToNB" className="btn btn-primary result-btn" onClick={this.buttonClick}><span className="glyphicon glyphicon-upload"></span></button>
				    </div>
				    <div className="collapse" id={xnResult}>
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
						    			<td>{this.props.nameResult.gender}</td>
						    			<td>{this.props.nameResult.origin}</td>
						    			<td>{this.props.nameResult.meaning}</td>
						    		</tr>
						    	</tbody>
				    		</table>
				    	</div>
				    </div>
			    </li>
		    </div>
		);
	}
});

module.exports = ResultLineItem;