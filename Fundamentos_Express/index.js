const express = require("express"); /// importando o express
const app = express(); /// passando tod ainfirmação pro app




app.get("/",(req, res) => {
     res.send("<h1>Bem vindo a progamação do Alesy</h1>") 
// .send usado pra enviar alguma coisa so pode enviar uma vez so durante uma rota
});     // criando uma rota pode ser feita por .post, .get, .patch

app.get("/blog/:artigo?", (req, res) => { /// quando colocado o ? depois do parametro vira um parametro opcional
    var artigo = req.params.artigo;
    
    if(artigo){
        res.send("<h2> Artigo : " + artigo +"</h2>");
    }
    else
    {
        res.send("Bem vindo ao blog") ;
    }


});

app.get("/canal/youtube", (req, res) => {
    var canal = req.query["canal"];//query ficaria depois do ultima rota colocando um ?nomedavariavel = ValorDaVariavel
    if(canal){
        res.send("<h1>Bem vindo ao meu canal!</h1>" +canal) ;    
    }
    else  
    {
        res.send("<h1>Canal N fornecido</h1>") ;
    }
});

app.get("/ola/:nome/:empresa",(req, res) =>{ // o /: funciona para criar parametro obrigatorio
    let nome = req.params.nome;
    let empresa = req.params.empresa;
    res.send("<h1> Oi "+ nome + " da " + empresa +"</h1>");
// o req funciona pegando as informações enviadas pelo usuario ou quem acessou a paina
// REQ => DADOS ENVIADOS PELO USUARIO
// RES => RESPOSTA ENVIADA PARA O USUARIO

});

app.listen(9050 ,(erro) =>{ // .listen e para abrir um servidor e o 9050 e a porta que o servidor esta hospedado
    if(erro){
        console.log("ocorreu um erro");
    }
    else{
        console.log("Servidor Iniciado com suscesso");
    }
})

//ctrl + c pra fechar o servidor
//nodemon inicia o servidor automaticamente sempre que ouver uma modificação