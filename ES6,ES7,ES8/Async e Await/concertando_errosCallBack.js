const enviarEmail = (corpo, para, callback) =>{
    setTimeout(() =>{ /// usado pra simular o envio de algum arquivo para textes de sincrono
        
        var deuEro = false;

        if(deuEro){
            
            callback("Falha no envio");//passando parametros,e na função dentro e so selecionar o que tu quer receber
        }else{
            
            callback();//passando parametros,e na função dentro e so selecionar o que tu quer receber
        }



    },4000)// set ja funciona como algo assincrona

}
console.log("Enviando email");
enviarEmail("Oi, testando o envio de email","games.lord2013@hotmail.com",( erro ) => {

    if(erro == undefined){
        console.log("Tudo OK");
    }else{
        console.log("ocoreu um erro :" + erro);
    }

});

//callback linka uma função ou algo a uma ação assyncrona, aonde so vai ser mandado assim q a ação async terminar

