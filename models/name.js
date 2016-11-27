'use strict';
module.exports = function(sequelize, DataTypes) {
  var Name = sequelize.define('Name', {
    entry: DataTypes.STRING,
    gender: DataTypes.STRING,
    origin: DataTypes.STRING,
    meaning: DataTypes.STRING,
    nameType: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Name;
};