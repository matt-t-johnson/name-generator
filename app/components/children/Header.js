var React = require('react');

//CHILDREN COMPONENTS
// var Results = require('./children/Results');

//Malfunctioning bit for inputs
// value={this.state.value} onChange={this.handleChange}

var Header = React.createClass({
	render: function() {
		return (
			<nav className="navbar navbar-default navbar-fixed-top">
			  <div className="container">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <a className="navbar-brand" href="#">Name Generator</a>
			    </div>

			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <ul className="nav navbar-nav navbar-right">
			        <li className="dropdown">
			          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Projects<span className="caret"></span></a>
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
