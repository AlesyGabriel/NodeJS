class Produto {
constructor(){
    this.nome = '';
    this.tipo = '';
    this.preco = 0;
    this.avaliacao = '';
    this.marca = '';
    }

    Abrir(){
        console.log("Abrindo o produto")
    }
    Ligar(){
        console.log("Ligando")
    }
    Desligar(){
        console.log("desligando")
    }

}

class Personagem {
    constructor(){
        this.nome = '';
        this.arma = '';
        this.genero = '';
        this.classe = '';
        this.lore = '';
    }
    Atacar(){
        console.log("ATACK!");
    }
    Defender(){
        console.log("DEFENSE UP!");
    }
    Esquivar(){
        console.log("DASH");
    }
    Curar(){
        console.log("TOMA ESSA BREJA PRA CURAR");
    }
}

class Agendamento {
    constructor(){
        this.data = "";
        this.dentista = "";
        this.preco = 0;
        this.servico = "";
        this.clinica = "";
    }
    Dor(){
        console.log("AI AI AI QUE DOR NOS DENTES");
    }
    Telefonar(){
        console.log("...Alo e do Dentista?");
    }
    PassarInfo(){
        console.log("Então eu to com dor nos dentes do lado direito")
    }
    DesligarTelefone(){
        console.log("Só dia 26? certo obrigado.. tchau");
    }
}
class Curso {
    constructor(){
        this.nome = '';
        this.professor = '';
        this.conteudo = '';
        this.topicos = '';
        this.aulas = '';
        this.horasCurso = 0;
        this.preco = 0;
    }
    Comprar(){
        console.log("Comprei cursinho iiya!");
    }
    Assistir(){
        console.log("Aula 7 ja de 278 KKKK vai demorar");
    }
    Pausar(){
        console.log("Outra hr continuo");
    }
    Aprender(){
        console.log("Aprendendo muitas coisas novas")
    }
}

class Inventario {
    constructor(){
        this.slots = 0;
        this.craftingMaterials = '';
        this.equips = '';
        this.consumiveis = '';
        this.money = 0;
    }
    Organize(){
        console.log("Organizando esse inventario")
    }
    Craft(){
        console.log("Criando itens com esses materiais");
    }
    Equiping(){
        console.log("Me equipando")
    }
}
class Mensagem {
    constructor(){
        this.texto = '';
        this.receptor = '';
        this.emote = '';
        this.emissor = '';
    }
    Escrever(){
        console.log("click click click click");
    }
    Enviar(){
        console.log("AAHH ELE RECEBEU A MENSAGEM")
    }
    Receber(){
        console.log("Finalmente me respondeu")
    }
}