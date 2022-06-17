  //promessa pois funciona no futuro
const enviarEmail = (corpo, para) =>{
    return new Promise((resolve, reject) =>{// isso e como se fosse "Eu prometo que..."
        /// toda progamação tem q ser feita dentro da promise
        setTimeout(() =>{

            var deuEro = true;
           
            if(!deuEro){
                resolve()// Conseguiu cumprir a promessa
            }else{
                reject()// Foi mal, não consegui cumprir falhei :(
            }// toda promise rejeitada precisa ser tratada, para n dar erro no code

        },4000)
    }) 
  }

enviarEmail("Olá Alesy","Lezy@gmail.com").then(( ) =>{/// Then so entra quando a promessa e cumprida
    console.log("PROMESSA CUMPRIDA :D , FELIZ DISSO")
}).catch(( ) => { // sempre q for regeitado a promise entra-se nele
    console.log("Não deu, não consgui cumprir a promesa...Perdão..");
})