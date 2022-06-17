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
               resolve({time: 6, to: "Alesy"})
           }else{
               reject("Fila cheia")
           }
       },4000)
   }) 
 };

 const pegarUsuarios = () =>{
    return new Promise((resolve, reject) => {
        resolve([
            {name: "Alesy", lang: "Javascript"},
            {name: "Lais", lang: "React"},
            {name: "Victor" ,lang:"Todas"}
        ])
    })
 }

async function principal(){// para usar o await e preciso estar dentro de uma função
    var usuarios = await pegarUsuarios();// isso e corespondente ao codigo de baixo usando async await
   /* pegarUsuarios().then(usuario =>{
        console.log(usuario)
    })*/
    console.log(usuarios);
    console.log("   OLA")
 }
principal();





