var React = require('react');
var helpers = require("../utils/helpers");

var SavedCharacters = React.createClass({
	getInitialState: function() {
		return {
			characterList: [],
		}
	},
	shouldComponentUpdate: function() {
		return true;
	},
	findCharacters: function() {
		var results = [];

		helpers.getCharacters().then(function(data) {
			for (var i = 0; i < data.length; i++) {
				results.push(<ul>{data[i].fullName}</ul>);
			};

		});
		
		this.setState({
				characterList: results
		});
	},
	componentWillMount: function() {

	},
	render: function() {
		
		return (
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div className="panel panel-primary">
						  <div className="panel-heading">Saved Characters</div>
						  <div className="panel-body">
						  	<div className="row">
						  		<div className="well well-sm col-md-4 col-md-offset-1">
						  				<ul>{this.state.characterList}</ul>
						  		</div>
								</div>
						  </div>
						</div>
					</div>
		);
	}
});

module.exports = SavedCharacters;