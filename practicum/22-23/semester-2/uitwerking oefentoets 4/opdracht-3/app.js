const lijsten = [
    ['melk', 'brood', 'eieren', 'kaas'],
    ['appels', 'peren', 'bananen', 'kiwi'],
    ['aardappelen', 'wortelen', 'paprika', 'ui'],
    ['koffie', 'thee', 'peren', 'chocolademelk', 'cappuccino'],
    ['kip', 'varkensvlees', 'rundvlees', 'vis'],
    ['sinaasappelsap', 'appelsap', 'perensap', 'kiwisap'],
    ['aardbeien', 'frambozen', 'blauwe bessen', 'bosbessen', 'peren']
];

const SPA = (() => {

    return {
        init(lijsten) {
            //SPA.Boodschappen.init(lijsten);

            //#student-start
            SPA.Boodschappen.init(lijsten);
            //#student-end

        }
    }
})();


//#student-start
SPA.Boodschappen = (() => {

    const statusMap = {
        lijsten: []
    }

    const init = (lijsten) => {
        statusMap.lijsten = lijsten;
    };

    const bereken = () => {



            const reduced = statusMap.lijsten
            .flat()
            .reduce((p, c) => {
                    if (p[c]) {
                        p[c]++;
                    }else{
                        p[c] = 1;
                    }
                return p;
            }, {});

        const result = Object.entries(reduced).sort((a, b) => b[1] - a[1]);
        print(result)
    }

    const print = (result) => {
        result.map((item) => {
            console.log(`${item[0]}: ${item[1]}`);
        });

        console.log('Meest: ' + result[0][0]);
    }

    const flatPrint = () => {
        console.log(statusMap.lijsten.flat(2));
    }

    return {
        init: init,
        flatPrint: flatPrint,
        bereken: bereken,
    }
})();
//#student-end

SPA.init(lijsten);
//tip, Array.flat. Voorbeeld: console.log(lijsten.flat(2));
//SPA.Boodschappen.bereken();
//#student-start
SPA.Boodschappen.bereken();
//#student-end


