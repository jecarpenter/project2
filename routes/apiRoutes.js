var db = require("../models");

module.exports = function (app) {

  // Create new
  const Model = Sequelize.Model;
  class User extends Model { }
  User.init({
    // attributes
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'user'
    // options
  });



}


