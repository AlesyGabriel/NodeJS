const fs = require("fs"); // biblioteca pra ler arquivos

//---------------------------------------------------------------------------------------------------//
function modificarUsuario(nome, curso, categoria){
    fs.readFile("c:/Users/games/OneDrive/Documentos/Estagio_Energy/Inicio_Node/Conversor_Excel_to_PDF/usuario.json",
    {encoding: "utf-8"}, (err , dados) =>{
    
        if(err){
            console.log("Um erro aconteceu!")
        }else{
            var conteudo = JSON.parse(dados)
            conteudo.nome = nome;
            conteudo.curso = curso;
            conteudo.categoria = categoria;
            fs.writeFile("c:/Users/games/OneDrive/Documentos/Estagio_Energy/Inicio_Node/Conversor_Excel_to_PDF/usuario.json",
            JSON.stringify(conteudo),err =>{
                if(err){
                    console.log("Não deu pra escrever no arquivo")
                }
            }) /// stringify transforma objetos em texto
    
            console.log(conteudo);
        }
    
    })
}

modificarUsuario("João Bertoni","Biomedicina","Medicia");
