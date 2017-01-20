var React = require('react');

//GRANDCHILD COMPONENTS
var ResultLineItem = require('./grandchildren/ResultLineItem');

var LastNameResults = React.createClass({
	getInitialState: function() {
		return this.props.mainState;
	},
	shouldComponentUpdate: function() {
		// console.log("shouldComponentUpdate: Results");
		return true;
	},
	moveToNameBuilder: function(index) {
		console.log("index ", index);
		var nb2Name = this.props.nameResults[index].entry;
		this.props.setParameters({nb2Name});
	},
	render: function() {
		var lineItems = [];
		for (var i=0; i < 5; i++) {
		    lineItems.push(<ResultLineItem key={i} index={i} nameType="ln" nameResult={this.props.nameResults[i]} moveToNameBuilder={this.moveToNameBuilder}/>);
		}
		return (
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						<div className="panel panel-primary">
						  <div className="panel-heading">Last Names</div>
						  <div className="panel-body">
						    <ul className="list-group">
						    	<div>{lineItems}</div>
							  </ul>
						  </div>
						</div>
					</div>
		);
	}
});

module.exports = LastNameResults;