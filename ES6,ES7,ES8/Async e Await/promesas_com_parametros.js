  //promessa pois funciona no futuro
  const enviarEmail = (corpo, para) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{

            var deuEro = false;
           
            if(!deuEro){
                resolve({time: 6, to: "Alesy"})// pode ter apenas um parametro,ou entao usase um json
            }else{
                reject("Fila cheia")//normalmente e um aviso de erro como parametro
            }
        },4000)
    }) 
  }

enviarEmail("Olá Alesy","Lezy@gmail.com").then( ({time, to}) =>{ // usando a desestruturação
    console.log(`
        Time: ${time}
        --------------------------
        To: ${to}
        --------------------------


    `)

}).catch((erro ) => {
    console.log("Não deu, não consgui cumprir a promesa...Perdão.." + erro);
})