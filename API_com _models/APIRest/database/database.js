const sequelize = require("sequelize");

const connection = new sequelize('registrogames','root','root',{
    host:'localhost',// local q ta sendo usado, no caso meu proprio computador
    dialect: 'mysql'// qual banco de dados quero me conectar
});

module.exports = connection;
