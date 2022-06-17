class TiposDados {
    static Aliatorio(lados){
        let min = Math.ceil(1);//.ceil pra gerar apenas numeros inteiros
        let max = Math.floor(lados);
        let valor = Math.floor(Math.random() * (max - min + 1) + min);
        console.log("O lado do dado que caiu e de numero: " + valor)
    }
};
TiposDados.Aliatorio(100);
TiposDados.Aliatorio(20);
TiposDados.Aliatorio(6);

//-----------------modo professor --------------//
class Dados{
    constructor(faces){
        this.faces = faces;
    }
    Rolar(){

        let min = Math.ceil(1);//.ceil pra gerar apenas numeros inteiros
        let max = Math.floor(this.faces);
        let valor = Math.floor(Math.random() * (max - min + 1) + min);
        console.log("O lado do dado que caiu e de numero: " + valor);
        
    }
}
var d6 = new Dados(6);
var d12 = new Dados(12);
var d100 = new Dados(100);

d6.Rolar();
d12.Rolar();
d100.Rolar();