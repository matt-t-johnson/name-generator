var React = require('react');

//CHILDREN COMPONENTS
// var Results = require('./children/Results');

//Malfunctioning bit for inputs
// value={this.state.value} onChange={this.handleChange}

var Query = React.createClass({
	propTypes: {

	},
	getDefaultProps: function() {
		return {};
	},

	handleChange: function(event) {
		this.setState({value: event.target.value});
	},

	handleSubmit: function(event) {
		alert('A query was submitted: ' + this.state.value);
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
								  <label className="control-label" for="checkboxes">Gender</label>
								  <div className="checkbox">
								    <label for="checkboxes-0">
								      <input type="checkbox" name="checkboxes" id="maleSelect"  />
								      Male
								    </label>
									</div>
								  <div className="checkbox">
								    <label for="checkboxes-1">
								      <input type="checkbox" name="checkboxes" id="femaleSelect"  />
								      Female
								    </label>
									</div>
								</div>

								<div className="form-group col-md-2">
								  <label className="control-label" for="radios">Type</label>
								  <div className="checkbox">
								    <label for="checkboxes-0">
								      <input type="checkbox" name="checkboxes" id="firstNameSelect" />
								      First Name
								    </label>
									</div>
								  <div className="checkbox">
								    <label for="checkboxes-1">
								      <input type="checkbox" name="checkboxes" id="lastNameSelect" />
								      Last Name
								    </label>
									</div>
								</div>

								<div className="form-group col-md-2">
								  <label className="control-label" for="checkboxes">Culture</label>
								  <div className="checkbox">
								    <label for="checkboxes-2">
								      <input type="checkbox" name="checkboxes" id="norseSelect"  />
								      Norse
								    </label>
									</div>
								  <div className="checkbox">
								    <label for="checkboxes-3">
								      <input type="checkbox" name="checkboxes" id="turkishSelect"  />
								      Turkish
								    </label>
									</div>
								</div>

								<div className="container col-md-6">
									<div className="row">
										<div className="">
								   		<button id="genButton" name="genButton" className="btn btn-primary">Generate</button>
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

module.exports = Query;