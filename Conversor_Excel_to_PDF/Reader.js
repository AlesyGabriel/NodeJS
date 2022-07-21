const fs = require("fs");
const util = require("util")//função promisify




class Reader{ ///fundção promisify tranforma qualquer coisa em promise
    constructor(){
        this.reader = util.promisify(fs.readFile);
    }

    async Read(filepath){/// antiga e async e ultiliza apenas callback
       try{
           return await this.reader(filepath,"utf8");
       }catch(err){
        return undefined;
       }
       
    }
}

//todo async gera um try e catch , eso pode usar await se tiver async na função
//classe de leitura

module.exports = Reader;