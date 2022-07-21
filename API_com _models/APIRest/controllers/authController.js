const express = require("express");
const usersModel = require('../models/usersModel')
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const jwtsecret = "senhafoda"

exports.post = async (req, res, next) => {
    var {email, password} = req.body;
    if(email != undefined){
        var user = await usersModel.findOne(email)
        if(user != undefined){
            if(user.password == password){
                jwt.sign({id: user.id, email: user.email},jwtsecret,{expiresIn:'48h'},(err, token) => {
                    if(err){
                        res.status(400);
                        res.json({err: "Falha interna"})
                    }else{
                        res.status(200);
                        res.json ({token: token});
                    }
                })
            }else{
                res.status(401);
                res.json({err: "Credenciais invalidas"})
            }
        }else{
            res.status(404);
            res.json({err:"O email não existe"})
        }
    }else{
        res.status(400);
        res.json({err:"O email é invalido"})
    }
}
        

