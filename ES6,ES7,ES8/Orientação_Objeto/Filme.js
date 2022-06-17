/// e recomendado ter uma classe apenas por arquivos, e o arquivo tenha nome da classe
class Filme {
    constructor(titulo, ano, genero, diretor, duracao) {// local aonde vou definir no  meu construtor

        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.atores = [];
        this.duracao = duracao;
    }

    // sao funções mas funciona assim dentro da class
    Reproduzir(){
        console.log("Reproduzindo...")
    }
    Pausar( ){
        console.log(" Pausado || ")
    }
    
    Avancar( ){
        console.log(" Avançando >> ")
    }
    Fechar( ){
        console.log(" Fechar X ")
    }
// O This e usado pra acessar os atributos daquele objeto
    Ficha(){
        console.log("Titulo: " + this.titulo)
        console.log("ANo: " + this.ano)
        this.Reproduzir();
    }
   
}

//classe e um modelo ou estrutura de objeto


var vingadores = new Filme("Vingadores 2", 2014, "Ação","Eu","2h"); /// se faz uma copia da class e ta armazenada dentro da variavel vingadores
 /// essas mudanças so se aplicam a copia feita que ta esta armazenada na variavel



vingadores.Ficha();

var hulk = new Filme();/// esta instanciando um novo objeto
 hulk.titulo = "Hulk no brasil"
 hulk.ano = "2012"
 hulk.genero = "Ação"

 console.log(hulk.titulo);

 //-------------------------------------------------------

 //Maneira simples de atribuir valores a classe


