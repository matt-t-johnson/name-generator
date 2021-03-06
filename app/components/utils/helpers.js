//Using axios for performing http requests
var axios = require("axios");

var helpers = {

  runQuery: function(parameters) {
    var route = "/search";
    
    console.log(parameters);
    return axios.post(route, parameters).then(function(response) {
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
  },
  getCharacters: function() {
    var route = "/characters";
    return axios.get(route).then(function(response) {
      return response.data;
    });
  }
};


module.exports = helpers;
