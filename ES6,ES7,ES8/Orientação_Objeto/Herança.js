//reutilização de codigo e praticamente isso

class Animal {//classe mae
    constructor(nome, idade, preco){
        this.nome = nome;
        this.idade = idade;
        this.preco = preco;
    }
    ChecarEstoque(){
        return 10;
    }
    MetodoQualquer(){
        console.log("Sem criatividade!")
    }
}

class Cachoro extends Animal { // a classe cachoro vai ter as mesmas coisas que a classe animal
    // essa seria a classe filha pq?
    // cachoro ainda e um animal, mas ele tem mais atributos que apenas os 3 nome idade e preco
   
    constructor(nome,idade,preco, raca, peso){
        super(nome, idade, preco);
        this.raca = raca;
        this.peso = peso;
    }
   
    Latir(){
    console.log("Rolf ROLF!");
   }
   ChecarEstoque(){
    return 67; ///pode mudar todos metodos q herdam da classe mae
   }
   MetodoQualquer(){
    super.MetodoQualquer(); /// super pega o comportamento do metodo selecionado da classe mae
    console.log("Funcionalidade")
    }
}



var dog = new Cachoro("Dogzao", 5 , 250,"Rotvailer", 6);

dog.MetodoQualquer();
dog.Latir();
console.log(dog);