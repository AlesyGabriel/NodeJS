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





async function principal(){
 var id = await pegarID();
 var email = await buscarEmail(id);
 enviarEmail("Como ta indo as coias?", email).then(() => {
    console.log("Email enviado com sucesso!")
 }).catch((err) => {
    console.log(err);
 })

}

principal();

//quando se usa await n se pode mais usar catch e como resolver isso? VEM COM O PAI VEM

async function principal1(){
    var id = await pegarID();
    var email = await buscarEmail(id);
    //USASE O TRY CLARO MEU COMPADRE mas nao e so limitado a promises
    try{    
    await enviarEmail("Como ta indo as coias?", email);// se acontecer erro na primeira linha , nem chega na segunda
    console.log("Email enviado com sucesso!")
   }catch(erro){
    console.log(erro);
   }

}
principal1();
    

