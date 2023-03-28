const SPA = (() => {
    const _print = (uitslag) => {
        console.log(uitslag);

        //onderstaande code mag je aanpassen om aan het format in de opdracht te voldoen
        // for (let l of uitslag) {
        //     console.log(`${l.voornaam}, ${l.geslaagd ? "geslaagd" : "niet geslaagd"}`);
        //     if (!l.geslaagd) {
        //         console.log(`niet behaalde toetsen:`);
        //         for (let r of Object.entries(l.resultaten)) {
        //             if (r[1] < 5.5) {
        //                 console.log(`${r[0]} \t ${r[1]}`);
        //             }
        //         }
        //     }
        //     console.log(``)
        // }

        //#student-start
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
        //#student-end

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

//#student-start
SPA.SlagingsBerekening = (() => {
    const _bereken = (leerlingen, toetsen) => {
        let result = {};

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

        //leerlingen - punten toevoegen aan resultaten array
        for (let t of toetsen) {
            result[t.leerling].resultaten[t.vak].push([t.cijfer, t.weging]);
        }

        //leerlingen - gemiddelde berekenen
        for (let l of leerlingen) {
            for (let v of vakken) {
                let som = 0;
                let weging = 0;
                for (let r of l.resultaten[v]) {
                    som += r[0] * r[1];
                    weging += r[1];
                }
                l.resultaten[v] = som / weging;
            }
        }

        //leerlingen - geslaagd
        for (let l of leerlingen) {
            let geslaagd = true;
            for (let v of vakken) {
                if (l.resultaten[v] < 5.5) {
                    geslaagd = false;
                }
            }
            l.geslaagd = geslaagd;
        }

        result = Object.values(result);
        result.sort((a, b) => {
            return a.voornaam.localeCompare(b.voornaam);
        });

        return result;
    }
    return {
        bereken: _bereken
    }
})
();
//#student-end

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
