/// e recomendado ter uma classe apenas por arquivos, e o arquivo tenha nome da classe
class Filme {
    constructor() {// local aonde vou definir no  meu construtor

        this.titulo = '';
        this.ano = 0;
        this.genero = '';
        this.diretor = '';
        this.atores = [];
        this.duracao = 0;
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

}