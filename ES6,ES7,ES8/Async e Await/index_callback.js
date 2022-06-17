const enviarEmail = (corpo, para, callback) =>{
    setTimeout(() =>{ /// usado pra simular o envio de algum arquivo para textes de sincrono
        console.log(`
        Para: ${para}
        -----------------------------
        ${corpo}
        --------------------------
        Alesy
        `)
        callback("OK!", 7, "8s");//passando parametros,e na função dentro e so selecionar o que tu quer receber


    },8000)// set ja funciona como algo assincrona

}
console.log("Enviando email");
enviarEmail("Oi, testando o envio de email","games.lord2013@hotmail.com",( status, amount,time) => {
    console.log(`
    status: ${status}
    --------------------------
    contatos: ${amount}
    ----------
    tempo de envio: ${time}
    
    `)
    console.log("callback iniciando e funcionado")
    console.log("Seu email foi enviado, deve chegar jaja");
    console.log("Tudo OK");
});

//callback linka uma função ou algo a uma ação assyncrona, aonde so vai ser mandado assim q a ação async terminar

