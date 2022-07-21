const Sequelize = require('sequelize')
const connection = require("./database");


const Games = connection.define('games',{
    id: {
        primaryKey: true,
        type: Sequelize.NUMBER,
        allowNull:false
    },

    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    year:{
        type: Sequelize.NUMBER,
        allowNull: false
    },
    price:{
        type: Sequelize.NUMBER,
        allowNull: false
    }
},
{
    timestamps: false
} );// criando uma tabela no banco de dados

Games.sync({force: false}).then(() =>{}); //fazendo que ele n fique recriando ela sempre que inicie o servidor

module.exports = Games
