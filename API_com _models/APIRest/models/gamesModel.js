const express = require("express");
const DBGames = require("../database/Games");
const connection= require("../database/database");
const bodyParser = require("body-parser");

connection.authenticate()
.then(() =>{
    console.log("Conecção feita com o banco de dados G");
})
.catch((msgErro) =>{
    console.log(msgErro);
})

exports.findAll = async () => {
    return await DBGames.findAll({ raw: true,});
}

exports.findByPk = async(id) =>{
    return await DBGames.findByPk(id);   
}
exports.create = async (id, title, year, price) => {
    return await DBGames.create({ 
        id: id, 
        title: title, 
        year: year,
        price: price
    });
}
exports.destroy = async (id) =>{
    return await DBGames.destroy({
        where:{
            id: id
        }
    });
}
exports.update = async (id, title, year, price) => {
    return await DBGames.update({ 
            title: title,
            year: year, 
            price: price
        },{
        where: {
            id: id
        }
      });
}
