class Webshop {


    //#student-start
    constructor(url) {
        this.url = url;
        this.data = null;
    }

    async haalBeschikbaarheidOp() {
        this.data = await $.getJSON(this.url);
    }
//student uitwerking

}
// Met onderstaande code kun je de tabel vullen, na implementatie methode webshop.beschikbareProducten.

// let webshop = new Webshop('producten.json');
//
// webshop.haalBeschikbaarheidOp().then(() => {
//     webshop.beschikbareProducten();
// })

