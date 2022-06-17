  //promessa pois funciona no futuro
  const pegarID = () => {
     return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            resolve(4)
        }, 1500)
     })
  };
  
const buscarEmail = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("alesygabriel3@gmail.com")
        },2000)
    })
};
  
  
  
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
  };

pegarID().then((id) => { /// promisses alinhadas de forma sincrona e pode dar erro
    buscarEmail(id).then((email) => {

        enviarEmail("Ola, Alesy ta ai?",email).then(() =>{
            console.log("Email enviado, para o usuario com id:" + id);
        }).catch(err => {
            console.log(err);
        })

    })
})