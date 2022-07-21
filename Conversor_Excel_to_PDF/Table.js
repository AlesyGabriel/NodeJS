class Table{
constructor(arr){
    this.header = arr[0];
    arr.shift()// remove o primeiro elemento
    this.rows = arr;
    }
    /// get transforma o metodo em um atributo
    get RowCount(){// campo virtual pra contagem de linhas atuais
        return this.rows.length;
    }
    get ColumnCount(){
        return this.header.length;
    }
}
module.exports = Table