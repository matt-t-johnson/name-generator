// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");


// Helper functions (in this case the only one is runQuery)
var helpers = {

  runQuery: function(parameters) {

    console.log("Parameters: ", parameters);
    var queryURL = "http://localhost:9001/search";
    var requestConfig = {
      params: parameters
    }

    return axios.get(queryURL, requestConfig).then(function(response) {
      return response.data;
    });
  },
  runQuery2: function(parameters) {
    console.log("Parameters: ", parameters);
    var gender = parameters.femaleSelect ? "female" : "male";
    var type = parameters.lastNameSelect ? "last" : "first";
    var culture = parameters.turkishSelect ? "turkish" : "norse";
    
    var queryURL = "http://localhost:9001/search/"+gender+"/"+type+"/"+culture;
    var requestConfig = {
      params: {
        male: parameters.maleSelect,
        female: parameters.femaleSelect,
        first: parameters.firstNameSelect,
        last: parameters.lastNameSelect,
        norse: parameters.norseSelect,
        turkish: parameters.turkishSelect,
      }
    }

    return axios.get(queryURL, requestConfig).then(function(response) {
      return response.data;
    });
  },
};


module.exports = helpers;
