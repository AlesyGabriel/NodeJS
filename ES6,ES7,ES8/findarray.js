var  empresa = {
    nome: "Energy Source",
    cidade: "São paulo",
    site: "www.lezado.com",
    email: "alesygabriel3@gmail.com"
};

var  empresa2 = {
    nome: "Cabrinho",
    cidade: "Amazonas",
    site: "www.ezado.com",
    email: "alesy@gmail.com"
};

var  empresa3 = {
    nome: "Demolitor",
    cidade: "Aguas da Prata",
    site: "www.leza.com",
    email: "gabriel3@gmail.com"
};

// comandos ultilizados pra isso Filter e forEach




var users = [empresa, empresa2, empresa3];
//novo modo e o Find
//ele verifica todos objetos dentro do array em busca do objeto q tem a row(linha da condição)
// ele retorna apenas um row
var usuario = users.find(user => user.email === "gabriel3@gmail.com");

console.log(usuario);