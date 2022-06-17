const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Resposta");
//Database
connection.authenticate()
.then(() =>{
    console.log("Conecção feita com o banco de dados");
})
.catch((msgErro) =>{
    console.log(msgErro);
})
//then e usado pra caso sucesso e o catch pra quando da erro estrutura promises





app.set('view engine','ejs'); // esta dizendo para que o express use o ejs
//ejs seria o framework pra desenhar html no javascript
app.use(express.static('public'))// permite que puxe arrquivos estaticos

app.use(bodyParser.urlencoded({extended: false})) //decodifica os dados enviados pelo formulario
app.use(bodyParser.json());// usado para API


//ROTAS
app.get("/",(req, res) =>{
    Pergunta.findAll({ raw: true,order:[
        ['id','DESC']//colocando da mais nova pra mais antiga postagem

    ]}).then(perguntas => {// raw vai trazer so as variaveis
        console.log(perguntas);
        res.render("index",{
            perguntas:perguntas // mandando as perguntas pra variavel perguntas
        });
    })
    //findAll usado pra pegar tudo da tabela e enviar pra pagina principal ou a /
 
}); 
app.get("/perguntar",(req, res) => {
    res.render("perguntar");
});

app.post("/salvarpergunta",(req, res) =>{
    // usado para receber dados de formulario
    var titulo = req.body.titulo;
    var descricao = req.body.descricao; // pegando as infos

    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() =>{
        res.redirect("/"); // assim que receber a info redirecionando a pagina principal
    
    })
    // create e o responsavel por salvar ou enviar algo para o banco de dados

})
app.get("/pergunta/:id",(req, res) =>{
    var id = req.params.id;
    Pergunta.findOne({
        where:{id: id}
        }).then(pergunta =>{
        if(pergunta != undefined){//pergunta foi achada
            Resposta.findAll({
                where:{perguntaId: pergunta.id},
                order: [ ['id','DESC'] ]
            }).then(respostas =>{
               
                res.render("pergunta",{
                    pergunta: pergunta,
                    respostas: respostas
                });
            });
            
        }else{//n encontrou a pergunta
            res.redirect("/")
        }
    })
    //findOne busca um dado apenas do banco de dados
})


// .render seria pra renderizar um arquivo
app.post("/responder",(req, res) =>{
     var corpo = req.body.corpo;
     var perguntaID = req.body.pergunta;
     
     Resposta.create({
        corpo: corpo,
        perguntaId: perguntaID
     }).then(() =>{
        res.redirect("/pergunta/" + perguntaID);

     })

})

app.listen(9050,()=>{console.log("Servidor funciondo")});