const express = require("express");
const DBUsers = require("../database/Users");
const connection= require("../database/database");
const bodyParser = require("body-parser");


connection.authenticate()
.then(() =>{
    console.log("Conecção feita com o banco de dados U");
})
.catch((msgErro) =>{
    console.log(msgErro);
})

exports.create = async (email, password) =>{
    return await DBUsers.create({
        email:email,
        password:password
    });
}
exports.findOne = async(value) =>{
    return await DBUsers.findOne({
        where: {
            email:value
        }}
        ||{
            password:value
        }
    );
}
exports.destroy = async(id) =>{
    return await DBUsers.destroy({
        where: {
            id:id
        }}
    );
}
//
exports.findByPk = async(id) =>{
    return await DBUsers.findByPk(id);   
}
exports.update = async(id, password)=> {
    return await DBUsers.update({
        password:password
    },{
    where:{
        id:id
        }
    })
}
