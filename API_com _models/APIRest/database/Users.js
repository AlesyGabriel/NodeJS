const Sequelize = require('sequelize')
const connection = require("./database");


const users = connection.define('users',{
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.NUMBER,
        allowNull:false
    },

    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    }},
{
    timestamps: false
} );// criando uma tabela no banco de dados

users.sync({force: false}).then(() =>{}); //fazendo que ele n fique recriando ela sempre que inicie o servidor

module.exports = users
