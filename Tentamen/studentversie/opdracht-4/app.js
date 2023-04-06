const SPA = (() => {
    const _print = (schaakPartijen) => {

        let resultaat = [];

        // resultaat = SPA.SchaakMeester.bereken(schaakPartijen);
        // for (const resultaatElement of resultaat) {
        //     console.log(`
        //     ${resultaatElement.naam}
        //     aantal gewonnen: ${resultaatElement.gewonnen}
        //     aantal verloren: ${resultaatElement.verloren}
        //     rating: ${resultaatElement.rating}
        //     `)
        // }

//student uitwerking
    }


    return {
        print: _print
    };
})();


//student uitwerking

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

