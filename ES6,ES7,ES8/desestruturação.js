var  empresa = {
    nome: "Energy Source",
    cidade: "São paulo",
    site: "www.lezado.com",
    email: "alesygabriel3@gmail.com"
};

//forma antiga de fazer
var nome = empresa.nome
var cidade = empresa.cidade

//forma nova usando desestruturação
var { nome, cidade, site } = empresa;

console.log(nome);
console.log(cidade);
console.log(site);