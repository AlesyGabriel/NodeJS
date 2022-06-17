const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");
const connection = require("./database");


const Pergunta = connection.define('perguntas',{
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: null
    }


});// criando uma tabela no banco de dados

Pergunta.sync({force: false}).then(() =>{}); //fazendo que ele n fique recriando ela sempre que inicie o servidor

module.exports = Pergunta;