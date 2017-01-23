var React = require('react');
var helpers = require("../utils/helpers");

var SavedCharacters = React.createClass({
	shouldComponentUpdate: function() {
		return true;
	},
	render: function() {
		var characters = [];
		for (var i = 0; i < this.props.characterList; i++) {
			characters.push(<span>{this.props.characterList[i].fullName}</span>);
		}
		return (
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div className="panel panel-primary">
						  <div className="panel-heading">Saved Characters</div>
						  <div className="panel-body">
						  	<div className="row">
						  		<div className="well well-sm col-md-4 col-md-offset-1">
						  				<div></div>
						  		</div>
								</div>
						  </div>
						</div>
					</div>
		);
	}
});

module.exports = SavedCharacters;