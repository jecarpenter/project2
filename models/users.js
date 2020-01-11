module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        user_id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: function (id) {
                var alphaNumeric = "abcdefghijklmnopqrstuvwxyz0123456789"; //possible characters for unique id
                var idArray = []; //array to hold random characters
                for (var i = 0; i < 20; i++) {
                    //loop through string 20 times to create 20 character string
                    var randChar = Math.floor(Math.random() * 35); //random string position
                    idArray.push(alphaNumeric.charAt(randChar));
                }
                id = idArray.join(""); //concats idArray
                return id; //returns user_id value
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        token: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: " "
        },
    });
    return Users;
};