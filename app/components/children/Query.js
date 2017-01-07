var React = require('react');
var helpers = require("../utils/helpers");
var resultArray = [];

var Query = React.createClass({
	getInitialState: function() {
		return {
			maleSelect: false,
			femaleSelect: false,
			firstNameSelect: false,
			lastNameSelect: false,
			norseSelect: false,
			turkishSelect: false,
			results: [],
			showResultsComponent: false,
			showNameBuilder: false
		};
	},

	handleChange: function(event) {
		var newState = {};

		if (event.target.checked == false) {
			newState[event.target.id] = false;
		}
		else {
			newState[event.target.id] = true;
		}
    this.setState(newState);
		console.log("change handled");
	},

	handleSubmit: function(event) {
		var shuffledArray = [];
		var resultArray = [];

		this.props.setParameters(this.state);
		console.log("Query State: ", this.state);
		helpers.runQuery(this.state).then(function(data) {
    	for (var i = 0; i < data.length; i++) {
    		if (data[i].nameType === "First Name") {
    			resultArray.push(data[i].entry);
					console.log("resultArray[i]= ", resultArray[i]);
    		}
    		else {console.log(data[i].entry + " is not a first name");}
			}
			var shuffledArray = this.props.shuffleResults(resultArray);

			console.log(shuffledArray);
			console.log("Data: ", data);
			console.log("Results State: ", this.state);

			this.setState({
				results: shuffledArray,
				showFirstNames: this.state.firstNameSelect,
				showLastNames: this.state.lastNameSelect,
				showNameBuilder: true
			});

  		console.log("State after query: ", this.state);
  		console.log(this.props);
    }.bind(this));	
    event.preventDefault();
	},

	render: function() {
		return (
			<div id="QueryBody">
				<div className="panel panel-primary">
						<div className="panel-heading">Name Parameters</div>
						<div className="panel-body">
							<form className="row" onSubmit={this.handleSubmit}>
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
								   			type="submit"
								   			id="genButton" 
								   			name="genButton" 
								   			className="btn btn-primary"
								   			onClick={this.handleSubmit}
								   		>
								   		Generate</button>
								   	</div>
								  </div>
								</div>

							</form> 

						</div>
					</div> 
				</div>
		);
	}
});
// onClick={handleSubmit}
module.exports = Query;