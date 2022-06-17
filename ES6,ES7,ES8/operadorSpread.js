var nome1 = "Alesy";
var idade = 20;
var  empresa = {
    nome: "Energy Source",
    cidade: "São paulo",
    site: "www.lezado.com",
    email: "alesygabriel3@gmail.com"
};

var user = {
    nome: nome1,
    idade: idade,
    empresa: empresa

}// modo normal

// FORMA REDUZIDA FUNCIONA SO COM VARIAVEIS
var user2 ={
    //operador spread ele cola os objetos de um para o outro
    ...empresa,
    nome1,
    idade

}

console.log(user2);

// with spread 
let arr = [1,2,3,-1];
  
console.log(Math.min(...arr)); //-1