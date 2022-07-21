const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors")
const jwt = require("jsonwebtoken");



const jwtsecret = "uiinegada" // isso e como se fosse sua chave mestre, ninguem pode ter acesso a ela
//se n a pessoa geraria tokens falsos para roubar infos no seu DB

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));//configuração padrao
app.use(bodyParser.json());


function auth(req, res, next){// middleware

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


var DB ={
    games:[
        {
            id: 23,
            title: "Genshin Impact",
            year: 2020,
            price: 0
        },
        {
            id: 65,
            title: "Sea of Teaives",
            year: 2018,
            price: 40
        },
        {
            id: 2,
            title: "Elsword",
            year: 2012,
            price: 0
        }

    ],
    users: [
        {
            id: 1,
            name: "Alesy Gabriel",
            email:"alesygabriel3@gmail.com",
            password:"nodada50"
        },
        {
            id: 2,
            name: "Thobias",
            email:"thoba@gmail.com",
            password:"noseutoba"
        }
    ]

}
//esse get foi o primeiro endpoint
app.get("/games",auth, (req, res) => {//melhor coisa a se fazer e dar m nome otimo pra sua rota no seu APIRest
    
    var HATEOAS = [
        {
            href: "http://localhost:9050/game/:id",
            method: "DELETE",
            rel: "delete_game"
        },
        {
            href: "http://localhost:9050/game",
            method: "GET",
            rel: "get_game"

        },
        {
            href: "http://localhost:9050/auth",
            method: "POST",
            rel: "Login"

        }
    ]
    
    
    
    res.statusCode = 200; //quando se produz aAPI sempre e bom dar um status code
    res.json({games: DB.games, _links: HATEOAS});
});


app.get("/game/:id",auth,(req, res) =>{

    if(isNaN(req.params.id)){//se nao for um numero e o que significa esse isNaN
        res.sendStatus(400);
    }else{
        var id = parseInt(req.params.id);

        var HATEOAS = [
            {
                href: "http://localhost:9050/game/" + id,
                method: "DELETE",
                rel: "delete_game"
            },
            {
                href: "http://localhost:9050/game/" + id,
                method: "PUT",
                rel: "edit_game"
            },
            {
                href: "http://localhost:9050/game/" +id,
                method: "GET",
                rel: "get_game"
    
            },
            {
                href: "http://localhost:9050/games",
                method: "GET",
                rel: "get_all_games"
    
            }
        ]/// HATEOAES E USADO PRA FACILITAR A ULTILIZAÇÃO USUARIO
        


       var game = DB.games.find(g => g.id == id);

       if (game != undefined){
        res.statusCode = 200;//deu certo
        res.json({game, _links: HATEOAS});
       }else{
        res.sendStatus(404);//not found
       }

    }


});
//salvar dados
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

app.delete("/game/:id", auth,(req, res) => {
    if(isNaN(req.params.id)){//se nao for um numero e o que significa esse isNaN
        res.sendStatus(400);
       console.log("Aqui")
    }else{
        var id = parseInt(req.params.id);
       var index = DB.games.findIndex(g => g.id == id);//peocurar se existe ale com o mesmo numero de ID
       if(index == -1){
        console.log(index);
        res.sendStatus(404);
       }else{
        DB.games.splice(index, 1);
        res.sendStatus(200);
        console.log("Foi");// debugando pra ver aonde esta caindo
       }

    }
});
// edição de dados e apenas com put
app.put("/game/:id",auth,(req, res) =>{
    
    if(isNaN(req.params.id)){//se nao for um numero e o que significa esse isNaN
        res.sendStatus(400);
       console.log("Text");
    }else{
        var id = parseInt(req.params.id);
       var game = DB.games.find(g => g.id == id);
        console.log("Aqui oh");
       if (game != undefined){
        var{title, price, year } = req.body;///edita o que tu quizer.
            if( title != undefined){
                game.title = title;
                console.log("Uuui");
            }   
            if( price != undefined){
                game.price = price;
                console.log("oh");
            }   
            if( year != undefined){
                game.year = year;
                console.log("Aqu");
            }   
            res.sendStatus(200);

       }else{
        res.sendStatus(404);//not found
       }

    }


});

app.post("/auth", (req, res) => {

    var {email, password }= req.body;

    if(email != undefined){

       var user = DB.users.find(u => u.email == email);
        if(user != undefined){
            if(user.password== password){

                jwt.sign({id: user.id, email: user.email},jwtsecret,{expiresIn:'48h'},(err, token) => {
                    if(err){
                        res.status(400);
                        res.json({err: "Falha interna"})
                    }else{

                    }

                    res.status(200);
                    res.json ({token: token});

                })//geranto token e ela precisa trabalhar com callback



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
})


//get e um endpoint responsavel por retornar dados
app.listen(9050,() =>{
    console.log("API rodando");
})