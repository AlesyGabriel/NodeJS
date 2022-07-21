const ejs = require("ejs");

class HtmlParser{
  static async  Parser(table){
        return await ejs.renderFile("C:/Users/games/OneDrive/Documentos/Estagio_Energy/Inicio_Node/Conversor_Excel_to_PDF/table.ejs",
        {header: table.header, rows: table.rows});
    }
}
module.exports = HtmlParser;