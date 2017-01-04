var React = require('react');

//CHILDREN COMPONENTS
// var Results = require('./children/Results');


var Query = React.createClass({
	getInitialState: function() {
		return {
			maleSelect: false,
			femaleSelect: false,
			firstNameSelect: false,
			lastNameSelect: false,
			norseSelect: false,
			turkishSelect: false
		};
	},
	getDefaultProps: function() {
		return {};
	},

	handleChange: function(event) {
		var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
		console.log("change handled");
	},

	handleSubmit: function(event) {
		alert('A query was submitted: ' + this.state);
		this.props.setParameters(this.state);
    event.preventDefault();
	},

	render: function() {
		return (
			<div id="QueryBody">
				<div className="panel panel-primary">
						<div className="panel-heading">Name Parameters</div>
						<div className="panel-body">
							<div className="row">
								<div className="form-group col-md-2">
								  <label className="control-label" htmlFor="checkboxes">Gender</label>
								  <div className="checkbox">
								    <label htmlFor="checkboxes-0">
								      <input 
								      	type="checkbox" 
								      	name="checkboxes" 
								      	id="maleSelect"
								      	value={this.state.maleSelect}
								      	onChange={this.handleChange}
								      />
								      Male
								    </label>
									</div>
								  <div className="checkbox">
								    <label htmlFor="checkboxes-1">
								      <input 
								      	type="checkbox" 
								      	name="checkboxes" 
								      	id="femaleSelect" 
								      	value={this.state.femaleSelect}
								      	onChange={this.handleChange} 
								      />
								      Female
								    </label>
									</div>
								</div>

								<div className="form-group col-md-2">
								  <label className="control-label" htmlFor="radios">Type</label>
								  <div className="checkbox">
								    <label htmlFor="checkboxes-0">
								      <input 
								      	type="checkbox" 
								      	name="checkboxes" 
								      	id="firstNameSelect"
								      	value={this.state.firstNameSelect}
								      	onChange={this.handleChange} 
								      />
								      First Name
								    </label>
									</div>
								  <div className="checkbox">
								    <label htmlFor="checkboxes-1">
								      <input 
								      	type="checkbox" 
								      	name="checkboxes" 
								      	id="lastNameSelect"
								      	value={this.state.lastNameSelect}
								      	onChange={this.handleChange} 
								      />
								      Last Name
								    </label>
									</div>
								</div>

								<div className="form-group col-md-2">
								  <label className="control-label" htmlFor="checkboxes">Culture</label>
								  <div className="checkbox">
								    <label htmlFor="checkboxes-2">
								      <input 
								      	type="checkbox" 
								      	name="checkboxes" 
								      	id="norseSelect" 
								      	value={this.state.norseSelect}
								      	onChange={this.handleChange} 
								      />
								      Norse
								    </label>
									</div>
								  <div className="checkbox">
								    <label htmlFor="checkboxes-3">
								      <input 
								      	type="checkbox" 
								      	name="checkboxes" 
								      	id="turkishSelect"  
								      	value={this.state.turkishSelect}
								      	onChange={this.handleChange}
								      />
								      Turkish
								    </label>
									</div>
								</div>

								<div className="container col-md-6">
									<div className="row">
										<div className="">
								   		<button 
								   			id="genButton" 
								   			name="genButton" 
								   			className="btn btn-primary"
								   			onClick={this.handleSubmit}
								   		>
								   		Generate</button>
								   	</div>
								  </div>
								  <div className="row">
								    <button id="ranButton" name="ranButton" className="btn btn-danger">Random</button>
								  </div>
								</div>

							</div> 

						</div>
					</div> 
				</div>
		);
	}
});
// onClick={handleSubmit}
module.exports = Query;