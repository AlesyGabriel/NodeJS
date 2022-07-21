const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");


const jwtsecret = "senhafoda"

exports.auth = (req, res, next) => {// middleware
    const authToken = req.headers['authorization'];
    if(authToken != undefined){ 
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
                next(); 
            }
        })
    }else{
        res.status(401);
        res.json({err:"Token Invalida"})
    }
}