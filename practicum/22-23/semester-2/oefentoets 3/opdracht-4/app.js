const SPA = (() => {
    const _print = (uitslag) => {
        console.log(uitslag);

        //onderstaande code mag je aanpassen om aan het format in de opdracht te voldoen
        for (let l of uitslag) {
            console.log(`${l.voornaam}, ${l.geslaagd ? "geslaagd" : "niet geslaagd"}`);
            if (!l.geslaagd) {
                console.log(`niet behaalde toetsen:`);
                for (let r of Object.entries(l.resultaten)) {
                    if (r[1] < 5.5) {
                        console.log(`${r[0]} \t ${r[1]}`);
                    }
                }
            }
            console.log(``)
        }

//student uitwerking

    }

    return {
        print: _print
    };
})();

// Hint sorteren:
//
//strings
// result.sort((a, b) => {
//   return a.voornaam.localeCompare(b.voornaam);
// });
//
// integers
// result.sort((a, b) => {
//     return b.voornaam - a.voornaam;
// });

// Hint berekening:
//  onderstaande code mag je gebruiken, je mag ook zelf een andere oplossing kiezen
//
// //vakken
// let vakken = new Set();
// for (let t of toetsen) {
//     vakken.add(t.vak);
// }
//
// //leerlingen - vakken resultaten array
// for (let l of leerlingen) {
//     l.resultaten = {};
//     for (let v of vakken) {
//         l.resultaten[v] = [];
//     }
//
//     result[l.leerlingNummer] = l;
// }

SPA.SlagingsBerekening = (() => {

    const _bereken = (leerlingen , toetsen) => {

        //Hint sorteren:

        

        //integers
        result.sort((a, b) => {
            return b.voornaam - a.voornaam;
        });

        //Hint berekening:
        //onderstaande code mag je gebruiken, je mag ook zelf een andere oplossing kiezen

        //vakken
        let vakken = new Set();
        for (let t of toetsen) {
            vakken.add(t.vak);
        }

        //leerlingen - vakken resultaten array
        for (let l of leerlingen) {
            l.resultaten = {};
            for (let v of vakken) {
                l.resultaten[v] = [];
            }

            result[l.leerlingNummer] = l;
        }
        //
        for (let t of toetsen)
        return result;


    };

    return {
        bereken : _bereken
    }

})();

//Leerlingen en toetsen
const leerlingen = [
    {
        leerlingNummer: 's1234567',
        voornaam: 'Marieke'
    },
    {
        leerlingNummer: 's7654321',
        voornaam: 'Evert'
    },
    {
        leerlingNummer: 's1111111',
        voornaam: 'Maurits'
    }
];
const toetsen = [
    {
        leerling: 's1234567',
        vak: 'aardrijkskunde',
        cijfer: 7,
        weging: 2
    },
    {
        leerling: 's1234567',
        vak: 'aardrijkskunde',
        cijfer: 3,
        weging: 1
    },
    {
        leerling: 's1234567',
        vak: 'engels',
        cijfer: 5.4,
        weging: 3
    },
    {
        leerling: 's1234567',
        vak: 'engels',
        cijfer: 5.2,
        weging: 1
    },
    {
        leerling: 's7654321',
        vak: 'aardrijkskunde',
        cijfer: 8,
        weging: 2
    },
    {
        leerling: 's7654321',
        vak: 'aardrijkskunde',
        cijfer: 9,
        weging: 1
    },
    {
        leerling: 's7654321',
        vak: 'engels',
        cijfer: 6.1,
        weging: 3
    },
    {
        leerling: 's7654321',
        vak: 'engels',
        cijfer: 5.2,
        weging: 1
    },
    {
        leerling: 's1111111',
        vak: 'aardrijkskunde',
        cijfer: 10,
        weging: 2
    },
    {
        leerling: 's1111111',
        vak: 'aardrijkskunde',
        cijfer: 8.5,
        weging: 1
    },
    {
        leerling: 's1111111',
        vak: 'engels',
        cijfer: 5.2,
        weging: 3
    },
    {
        leerling: 's1111111',
        vak: 'engels',
        cijfer: 5.8,
        weging: 1
    }
];

$(() => {
    let overzicht = SPA.SlagingsBerekening.bereken(leerlingen, toetsen);
    SPA.print(overzicht);
})
