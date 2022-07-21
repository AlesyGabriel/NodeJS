const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");
const connection = require("./database");

const Users = connection.define("users",{
    id:{
        type: Sequelize.NUMBER,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull:false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull:false
    }
});

Users.sync({force: false});

module.exports = Users;