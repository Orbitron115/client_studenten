class Webshop {


    //#student-start
    constructor(url) {
        this.url = url;
        this.data = null;
        this.haalBeschikbaarheidOp();
    }

    async haalBeschikbaarheidOp() {
        this.data = await $.getJSON(this.url);
    }

    async productAanwezigheidInWinkels() {
        
    }

    async beschikbareProducten() {
        
    }
//student uitwerking

}
// Met onderstaande code kun je de tabel vullen, na implementatie methode webshop.beschikbareProducten.

// let webshop = new Webshop('producten.json');
//
// webshop.haalBeschikbaarheidOp().then(() => {
//     webshop.beschikbareProducten();
// })

