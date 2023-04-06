const SPA = (() => {
    const _print = (schaakPartijen) => {

        let resultaat = [];

        resultaat = SPA.SchaakMeester.bereken(schaakPartijen);

        for (const resultaatElement of resultaat) {
            console.log(`
            ${resultaatElement.naam}
            aantal gewonnen: ${resultaatElement.gewonnen}
            aantal verloren: ${resultaatElement.verloren}
            rating: ${resultaatElement.rating}
            `)
        }
    }


    return {
        print: _print
    };
})();

//#student-start
SPA.SchaakMeester = (() => {
    const bereken = (schaakPartijen) => {

        let resultaat = [];
        debugger;

        schaakPartijen.forEach((partij) => {
            


            // speler wit
            if (resultaat.filter( x => x.naam == partij.spelerWit).length > 0){

                let persoon1 = resultaat.filter( x => x.naam == partij.spelerWit);

                if (partij.winnaar == partij.spelerWit){
                    persoon1.rating ++;
                    persoon1.gewonnen ++;
                }else {
                    persoon1.rating --;
                    persoon1.verloren ++;
                }

            }else {

                let resultaatElement = {
                    naam: partij.spelerWit,
                    gewonnen : 0,
                    verloren : 0,
                    rating: 0
                }

                if (partij.spelerWit == partij.winnaar){
                    resultaatElement.gewonnen ++;
                    resultaatElement.rating ++;
                }else {
                    resultaatElement.verloren ++;
                    resultaatElement.rating --;
                }

                resultaat.push(resultaatElement);
            }
            
            //speler zwart
            if (resultaat.filter( x => x.naam == partij.spelerZwart).length > 0){

                let persoon1 = resultaat.filter( x => x.naam == partij.spelerZwart);

                if (partij.winnaar == partij.spelerZwart){
                    persoon1.rating ++;
                    persoon1.gewonnen ++ ;
                }else {
                    persoon1.rating --;
                    persoon1.verloren ++;
                }
            } else {

                let resultaatElement = {
                    naam: partij.spelerZwart,
                    gewonnen : 0,
                    verloren : 0,
                    rating: 0
                }

                if (partij.spelerZwart == partij.winnaar){
                    resultaatElement.gewonnen ++;
                    resultaatElement.rating ++;
                }else {
                    resultaatElement.verloren ++;
                    resultaatElement.rating --;
                }

                resultaat.push(resultaatElement);
            }
        });

        return resultaat.sort(a => a.rating);
    }

    return {
        bereken: bereken
    }

})();


//Leerlingen en toetsen
const schaakPartijen = [
    {
        spelerWit: 'Marieke',
        spelerZwart: 'Evert',
        winnaar: 'Marieke'
    },
    {
        spelerWit: 'Marieke',
        spelerZwart: 'Jaap',
        winnaar: 'Marieke'
    },
    {
        spelerWit: 'Marieke',
        spelerZwart: 'Nelleke',
        winnaar: 'Marieke'
    },
    {
        spelerWit: 'Evert',
        spelerZwart: 'Jaap',
        winnaar: 'Evert'
    },
    {
        spelerWit: 'Evert',
        spelerZwart: 'Nelleke',
        winnaar: 'Evert'
    },
    {
        spelerWit: 'Jaap',
        spelerZwart: 'Nelleke',
        winnaar: 'Jaap'
    }

];

SPA.print(schaakPartijen);

