class Webshop {


//#student-start
    constructor(url) {
        this.url = url;
        this.data = null;
    }

    async haalBeschikbaarheidOp() {
        this.data = await $.getJSON(this.url);
    }

    productAanwezigheidInWinkels(productNaam) {
        return this.data.reduce((p, c, i, a) => {

            let product = c.producten.find(p => p.naam == productNaam);

            if (product) {
                p.push({
                    winkel: c.winkel,
                    product: product.aantal
                });
            }

            return p;
        }, [])
    }

    beschikbareProducten() {

        let assortiment = this.data.reduce((p, c, i, a) => {
            for (let product of c.producten) {

                let productKey = product.naam;
                if (!p[productKey]) {
                    p[productKey] = [];
                }

                if (product.aantal > 0) {
                    p[productKey].push(`${c.winkel}(${product.aantal})`);
                }

            }
            return p;
        }, {});

        for (let k of Object.keys(assortiment)) {
            $(`<tr><td>${k}</td><td>${assortiment[k].join(', ')}</td></tr>`).appendTo('#producten-tabel tbody');
        }
    }
//#student-end

}
// Met onderstaande code kun je de tabel vullen, na implementatie methode webshop.beschikbareProducten.

// let webshop = new Webshop('producten.json');
//
// webshop.haalBeschikbaarheidOp().then(() => {
//     webshop.beschikbareProducten();
// })

