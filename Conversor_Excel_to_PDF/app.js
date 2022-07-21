const fs = require("fs");
var Reader = require("./Reader");
var Processor = require("./Processor")
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var Writer = require("./Writer")
var PDFWriter = require("./PDFWriter");

var leitor = new Reader();

var escritor = new Writer();

const path = 'c:/Users/games/OneDrive/Documentos/Estagio_Energy/Inicio_Node/Conversor_Excel_to_PDF/';

//para rodar uma coisa async nesse arquivo e preciso criar uma funcao async na main
async function main(){
     var dados = await leitor.Read(`${path}users.csv`);
    
    var dadosProcessados = Processor.Process(dados);

    var usuarios = new Table (dadosProcessados);
    
   var html =  await HtmlParser.Parser(usuarios);
    escritor.Write(`${path}temp/meuhtmlgerado.html`,html);
    PDFWriter.WriterPDF(Date.now() + `.PDF`,html)
}
main();