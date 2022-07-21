const express = require('express');
const Games = require('../database/Games');
const GamesModel = require('../models/gamesModel')
const bodyParser = require("body-parser");

exports.get = (req, res, next) => {
    GamesModel.findAll().then((games) => {
        console.log(games);
        res.status(201);
        res.json({games: games})
    });
};
exports.show =(req, res, next) =>{
    let id = req.params.id;
    if(isNaN(id)){//se nao for um numero e o que significa esse isNaN
        res.sendStatus(400);
    }else{
    GamesModel.findByPk(id).then((games) => {
        if(games!= undefined){
            res.status(200);//deu certo
            res.json(games);
        }else{
            res.sendStatus(404);//not found
        }
        })}
}
exports.post = async(req, res, next) =>{
    var{id, title, year, price } = req.body;
    var game = await GamesModel.create(id, title, year, price);
    if(game!=undefined){
        res.sendStatus(200);
    
    }else{
        res.sendStatus(400);
    }
}
exports.delete = async (req, res, next) =>{
    var id = req.params.id;
    if(isNaN(id)){//se nao for um numero e o que significa esse isNaN
        res.sendStatus(400);
    }else{
    GamesModel.findByPk(id).then((game) => {
        if(game!= undefined){
            console.log(game)
            GamesModel.destroy(id);
            res.sendStatus(200);
        }else{
            res.sendStatus(404);//not found
        }
        })}
}
exports.put= async (req, res, next) =>{
    var id = req.params.id;
    var{ title, year, price } = req.body;
    if(isNaN(id)){//se nao for um numero e o que significa esse isNaN
        res.sendStatus(400);
    }else{
       var game = await GamesModel.findByPk(id);
    if(game!= undefined){
        game = await  GamesModel.update(id, title, year, price);
          res.sendStatus(200);
      }else{
          res.sendStatus(404);//not found
      }
    }
};

/*
app.post("/game",auth, (req, res) => {
    var{title, year, price } = req.body;
console.log("Aqui")
    DB.games.push({
        id: 232,
        title,
        year,
        price
    });
    res.sendStatus(200);
    
    //recebendo dados atravez do post
})

*/