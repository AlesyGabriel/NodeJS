var pdf = require("html-pdf");
class PDFWriter{
    static WriterPDF(filename, html){
        pdf.create(html,{}).toFile(filename,(err)=>{}); ///essa função obriatoriamente precisa ter um call back
    }
}
module.exports = PDFWriter;