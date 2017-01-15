// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");


// Helper functions (in this case the only one is runQuery)
var helpers = {

  runQuery: function(parameters) {

    console.log("Parameters: ", parameters);
    var queryURL = "/search";
    var requestConfig = {
      params: parameters
    }

    return axios.get(queryURL, requestConfig).then(function(response) {
      return response.data;
    });
  }
};


module.exports = helpers;
