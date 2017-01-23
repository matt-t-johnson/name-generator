var React = require('react');
var helpers = require("../utils/helpers");

var Header = React.createClass({
	getInitialState: function() {
		return {
			characterList: [],
		}
	},
	showCharacters: function() {
		var results = [];

		helpers.getCharacters().then(function(data) {
			for (var i = 0; i < data.length; i++) {
				results.push(data[i].fullName);
				console.log(data[i].fullName);
			}

		});
		console.log("results: ", results)
		
		this.setState({
				characterList: results
		});
		console.log("set state");
		this.props.setParameters(this.state);
		console.log("set params");
	},
	render: function() {
		return (
			<nav className="navbar navbar-default navbar-fixed-top" id="header">
			  <div className="container">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <a id="nav-brand" className="navbar-brand" href="#">Name Generator</a>
			    </div>

			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <ul className="nav navbar-nav navbar-right">
			        <li><a href="#"><span onClick={this.showCharacters}>Characters</span></a></li>
			        <li className="dropdown">
			          <a id="navButtons" href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Projects<span className="caret"></span></a>
			          <ul className="dropdown-menu">
			            <li><a href="#">Project 1</a></li>
			            <li><a href="#">Project 2</a></li>
			            <li><a href="#">Project 3</a></li>
			          </ul>
			        </li>
			      	<li><a href="#">Log In</a></li>
			      	<li><a href="#">Sign Up</a></li>
			      </ul>
			    </div>
			  </div>
			</nav>
			
		);
	}
});

module.exports = Header;
