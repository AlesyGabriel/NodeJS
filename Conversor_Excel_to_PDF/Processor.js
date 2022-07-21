class Processor{
    static Process(data){
        var a = data.split("\n")
        var rows = [];
;// split serve pra quebrar strings separar elas por uma informação
// usase \n pra separar por quebra de linha
        a.forEach(row => {
           var arr = row.split(",")
            rows.push(arr);
        });//forEach pra percorer o array e separar por virgula
        return rows;
    }
}


module.exports = Processor