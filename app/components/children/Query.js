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
			showResultsComponent: false,
			showNameBuilder: false,
			gender: [],
			type: [],
			culture: []
		};
	},

	handleChange: function(event) {
		var checked = event.target.checked;
		var targetArray = event.target.dataset.group;
		var targetValue = event.target.dataset.id;
		var targetID = event.target.id;
		var stateArray = this.state[targetArray];
		var stateID = this.state[targetID];
		var index = stateArray.indexOf(targetValue);

		var newState = {};
		if (checked == true) {
			newState[event.target.id] = true;
			stateArray.push(targetValue);
			newState[targetArray] = stateArray;
		}
		else {
			newState[event.target.id] = false;
			stateArray.splice(index, 1);
			newState[targetArray] = stateArray;
		}
    this.setState(newState);
	},

	handleSubmit: function(event) {
		var shuffledFirstNames = [];
		var shuffledLastNames = [];
		var firstNameResults = [];
		var lastNameResults = [];

		helpers.runQuery(this.state).then(function(data) {
    	for (var i = 0; i < data.length; i++) {
    		var nameTypeChosen = this.state.type.includes(data[i].nameType);
    		var genderChosen = this.state.gender.includes(data[i].gender);
    		var cultureChosen = this.state.culture.includes(data[i].origin);

    		if (data[i].nameType === "First Name") {
    			if (nameTypeChosen && genderChosen && cultureChosen) {
    				firstNameResults.push(data[i]);
    			};
    		} else if (data[i].nameType === "Last Name") {
    				if (nameTypeChosen && cultureChosen) {
    					lastNameResults.push(data[i]);

    				};
    			};

			}
			var shuffledFirstNames = this.shuffleResults(firstNameResults);
			var shuffledLastNames = this.shuffleResults(lastNameResults);

			this.setState({
				firstNameResults: shuffledFirstNames,
				lastNameResults: shuffledLastNames,
				showFirstNames: this.state.firstNameSelect,
				showLastNames: this.state.lastNameSelect,
				showNameBuilder: true,
				resultsObject: data
			});
			this.props.setParameters(this.state);
    }.bind(this));	
    event.preventDefault();
	},

	shuffleResults: function(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
	  while (0 !== currentIndex) {
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }
	  return array;
	},
	render: function() {
		return (
			<div id="QueryBody" className="col-md-12">
				<div className="panel panel-primary">
						<div className="panel-heading">Name Parameters</div>
						<div className="panel-body">
							<form className="row" onSubmit={this.handleSubmit}>
								<div className="form-group col-md-4 col-xs-4 col-sm-4">
								  <label className="control-label" htmlFor="checkboxes">Gender</label>
								  <div className="checkbox">
								    <label htmlFor="checkboxes-0">
								      <input 
								      	type="checkbox" 
								      	name="checkboxes"
								      	id="maleSelect"
								      	value={this.state.maleSelect}
								      	onChange={this.handleChange}
								      	data-group="gender"
								      	data-id="Male"
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
								      	data-group="gender"
								      	data-id="Female"
								      />
								      Female
								    </label>
									</div>
								</div>

								<div className="form-group col-md-4 col-xs-4 col-sm-4">
								  <label className="control-label" htmlFor="radios">Type</label>
								  <div className="checkbox">
								    <label htmlFor="checkboxes-0">
								      <input 
								      	type="checkbox" 
								      	name="checkboxes" 
								      	id="firstNameSelect"
								      	value={this.state.firstNameSelect}
								      	onChange={this.handleChange} 
								      	data-group="type"
								      	data-id="First Name"
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
								      	data-group="type"
								      	data-id="Last Name"
								      />
								      Last Name
								    </label>
									</div>
								</div>

								<div className="form-group col-md-4 col-xs-4 col-sm-4">
								  <label className="control-label" htmlFor="checkboxes">Culture</label>
								  <div className="checkbox">
								    <label htmlFor="checkboxes-2">
								      <input 
								      	type="checkbox" 
								      	name="checkboxes" 
								      	id="norseSelect" 
								      	value={this.state.norseSelect}
								      	onChange={this.handleChange} 
								      	data-group="culture"
								      	data-id="Norse"
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
								      	data-group="culture"
								      	data-id="Turkish"
								      />
								      Turkish
								    </label>
									</div>
								</div>

								<div className="container col-xs-12 col-sm-12 col-md-12 col-lg-12">
									<div className="row">
										<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
										<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
								   		<button 
								   			type="submit"
								   			id="genButton" 
								   			name="genButton" 
								   			className="btn btn-primary"
								   			onClick={this.handleSubmit}
								   		>
								   		Generate</button>
								   	</div>
								   	<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
								  </div>
								</div>

							</form> 

						</div>
					</div> 
				</div>
		);
	}
});

module.exports = Query;