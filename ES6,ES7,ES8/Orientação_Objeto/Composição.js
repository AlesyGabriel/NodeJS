// Composição e apenas criar uma classe com outras classes
class Leitor{
    Ler(caminho){
        return "Conteudo do Arquivo"
    }
}
class Escritor{
    Escrever(arquivo, conteudo){
        console.log("Conteudo escrito");
    }
}
class Criador{
    Criar(nome){
        console.log("Arquivo criado");
    }
}
class Destruir{
    Deletar(nome){
        console.log("Arquivo Deletado")
    }
}
    
//essas pequenas classes sao componentes q vao compor uma classe maior de manipular arquivos
/// e Util isso pois posso reutilizar em outras classes pra ajudar ou diminiuir os codes

class ManipuladorDeArquivos{
    constructor(nome){
        this.arquivo = nome;
        this.leitor = new Leitor();
        this.escritor = new Escritor();
        this.criador = new Criador();
        this.deletar = new Destruir();
    }
}

var manipular = new ManipuladorDeArquivos("meuarquivo.txt");

manipular.leitor.Ler();
manipular.escritor.Escrever();
manipular.criador.Criar();
manipular.deletar.Deletar();