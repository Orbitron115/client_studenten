// document ready, de spa applicatie gebruiken om de tekorten op te halen
$(() => {

// na opdracht 3b
// let tekorten = WinkelApp.Statistieken.tekorten(producten);
// console.log(tekorten);

//na opdracht 3c
// let tekorten = WinkelApp.Statistieken.tekorten(producten, (w) => {console.log(w.winkel)});
});



//#student-start
setInterval(() => {
    WinkelApp.Statistieken.tekorten(producten, (w) => {console.log(`winkel: ${w.winkel}, tekorten: ${w.tekorten.join(', ')}`)});
}, 1000)
//#student-end

//#student-start
let WinkelApp = (() => {
    return {};
})();

WinkelApp.Statistieken = (() => {

    let tekorten = (winkeldata, cb) => {

        return  winkeldata.reduce((p, c, i, a) => {
            for (let product of c.producten) {
                if (product.aantal == 0) {

                    let winkelInArray = p.find(e => e.winkel == c.winkel);
                    if(!winkelInArray){
                        winkelInArray = {winkel : c.winkel, tekorten: [product.naam]};
                        p.push(winkelInArray);
                    }else{
                        winkelInArray.producten.push(product.naam);
                    }

                    cb(winkelInArray);
                }
            }
            return p;
        }, []);

    };

    return {
        tekorten: tekorten
    }
})();

//#student-end

let producten = [
    {
        "winkel": "Zwolle",
        "producten": [
            {
                "naam": "grasmaaier",
                "aantal":  100
            },
            {
                "naam": "boormachine",
                "aantal": 1
            }
        ]
    },
    {
        "winkel": "Zutphen",
        "producten": [
            {
                "naam": "grasmaaier",
                "aantal":  5
            },
            {
                "naam": "boormachine",
                "aantal": 2
            }
        ]
    },
    {
        "winkel": "Apeldoorn",
        "producten": [
            {
                "naam": "grasmaaier",
                "aantal":  0
            },
            {
                "naam": "boormachine",
                "aantal": 37
            }
        ]
    }
];
