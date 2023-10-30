const { DataTypes } = require('sequelize');
const { sequelize } = require('./db'); // Import the sequelize instance from db.js

const LoginPerson = sequelize.define('LoginPerson', {
    // Here we define our model attributes
    // Each attribute will pair to a column in our database

    
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },

    
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},)

// `sequelize.define` also returns the model
console.log(LoginPerson === sequelize.models.LoginPerson); // true

module.exports = { 
    LoginPerson,
    sequelize
}