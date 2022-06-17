class Calculadora {// com dois metodos
    static Somar(a, b){
        console.log( a + b);
    }
    static Sob(a, b){
        console.log( a - b);
    }
}
// com os metodos staticos n precisa criar uma instancia para usar os methodos dela

Calculadora.Somar(10,20)
Calculadora.Sub(10,20)


//-------------------------------------------------//
//aqui em baixo criando uma instancia

var calc = new Calculadora();

calc.Somar(2,2);
calc.Sub(2,4);