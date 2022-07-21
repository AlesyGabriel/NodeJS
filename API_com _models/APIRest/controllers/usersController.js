const express = require('express');
const usersModel = require('../models/usersModel')
const bodyParser = require("body-parser");
const users = require('../database/Users');
let Validator = require('validatorjs');

exports.post = async (req, res, next) =>{
    var{email ,password} = req.body;
    if(valid (email, password) == false){
        res.sendStatus(500);
        return;
    }

    var user = await validatorUser(email);
    console.log('=============================');
    console.log(user);
    console.log('=============================');
    if (user == null){
        user = await usersModel.create(email,password)
        if(user != null){
            res.sendStatus(201);
        }
        else{
            res.sendStatus(400);
        }
    }
    else {
        res.sendStatus(200);
    }

}

exports.delete = async(req, res, next) =>{
    var id = req.params.id;
    var user = await usersModel.findByPk(id)
    if(user == null){
        res.sendStatus(400);
    }
    else{
        await usersModel.destroy(id); 
        res.sendStatus(200);
    }
}

exports.put = async (req, res, next) =>{
    var id = req.params.id;
    console.log(id)
    var {password} = req.body;
    var user = await usersModel.findByPk(id);
    console.log(password)
    if(user){
        if(user.password == password){
            res.sendStatus(400);
        }else{
            console.log(user)
            await usersModel.update(id,password);
            res.sendStatus(200);
        }
    }
    else{
        console.log(user);
        res.sendStatus(404);
    }
}



async function validatorUser (value){
    return await usersModel.findOne(value);
 }

function valid (email, password){
    let validation = new Validator({
        email: email,
        password: password
    }, {
        email: 'required|email',
        password: 'required|min:5'
    });

    return validation.passes();
}