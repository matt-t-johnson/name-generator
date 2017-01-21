// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");


// Helper functions (in this case the only one is runQuery)
var helpers = {

  runQuery: function(parameters) {
    var route = "/search";
    var requestConfig = {
      params: parameters
    }

    return axios.get(route, requestConfig).then(function(response) {
      return response.data;
    });
  },
  saveName: function(fn, ln) {
    var first = fn;
    var last = ln;
    var full = first + " " + last;
    console.log(full);
    return axios.post('/create', {
      firstName: first,
      lastName: last,
      fullName: full
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
};


module.exports = helpers;
