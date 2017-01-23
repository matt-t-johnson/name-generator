var React = require('react');

//GRANDCHILD COMPONENTS
var ResultLineItem = require('./grandchildren/ResultLineItem');

var FirstNameResults = React.createClass({
	getInitialState: function() {
		return this.props.mainState;
	},
	shouldComponentUpdate: function() {
		// console.log("shouldComponentUpdate: Results");
		return true;
	},
	moveToNameBuilder: function(index) {
		console.log("index ", index);
		var nb1Name = this.props.nameResults[index].entry;
		this.props.setParameters({nb1Name});
	},
	render: function() {
		var lineItems = [];

		for (var i=0; i < 5; i++) {
		    lineItems.push(<ResultLineItem key={i} index={i} nameType="fn" nameResult={this.props.nameResults[i]} moveToNameBuilder={this.moveToNameBuilder}/>);
		}
		return (
					<div className={this.props.width}>
							<div className="panel panel-primary">
								  <div className="panel-heading">First Names</div>
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

module.exports = FirstNameResults;