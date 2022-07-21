const express = require("express");
const jwt = require("jsonwebtoken");
const authController = require('./controllers/authController');

exports.authu= (req, res, next) =>{// middleware

    const authToken = req.headers['authorization'];
    
    if(authToken != undefined){ //validando o token

        const bearer = authToken.split(' ');
        var token = bearer[1];
        jwt.verify(token,jwtsecret,(err, data) => {
            if(err){
                res.status(401);
                res.json({err:"Token Invalido"})
            }else{
                req.token= token;
                req.loggedUser = {id: data.id, email: data.email};
                console.log(data);
                next(); /// quando middleware e executado com sucesso precisa-se do next
            }
        })

    }else{
        res.status(401);
        res.json({err:"Token Invalida"})
    }


}
