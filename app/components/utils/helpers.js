// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");


// Helper functions (in this case the only one is runQuery)
var helpers = {

  runQuery: function(parameters) {

    console.log(parameters);

    var queryURL = "http://localhost:9001/search";
    var requestConfig = {
      params: parameters
    }

    return axios.get(queryURL, requestConfig).then(function(response) {

      console.log("Axios response: ", response);
      return response.data.results[0].formatted;
    });
  }
};


module.exports = helpers;
