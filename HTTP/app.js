var http = require("http");

http.createServer((requisisao, resposta) => {
    resposta.end("<h1>Bem vindo ao meu site</h1><br><h4> Progamando muito </h4>"); //.end pra poder escrever algo no seu servidor

}).listen(9050); // cria ja um servidor ja.
console.log("Meu servidor esta rodando!");