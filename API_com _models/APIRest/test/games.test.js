
const server = require("../app.js");
const supertest = require("supertest");
const request = supertest(server)

test("Deve retornar a lista de  todos jogos que esta no banco de dados da tabela Games",()=>{
    return request.get("games/").then(res => {
        expect(res.statusCode).toEqual(200)
    })
})