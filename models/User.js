
var bcrypt = require('bcryptjs');
module.exports = function (sequelize, DataTypes) {

  var User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  User.beforeCreate((user, options) => {
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(user.password, salt);
  });


  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  return User;
};
