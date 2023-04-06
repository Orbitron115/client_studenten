import Boodschappen from "../opdracht-2/boodschappen";

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
            Boodschappen.render(lijsten);
        }
    }
})();


//student uitwerking



SPA.Boodschappen =(() => {

    let alleProducten = [];

    const init = (lijsten) => {
        alleproducten = lijsten.flat();
    }

    let aantalPerProdcut = new Map()

    alleproducten.forEach(product => {
        if (aantalPerProdcut.has(product)){
            aantalPerProdcut.set(product , aantalPerProdcut.get(product) + 1);
        } else {
            aantalPerProdcut.set(product , 1)
        }
        
    });

    let gesorteerdeProductAantallen = new Map([aantalPerProdcut.entries].sort((a,b) = )


    return{
        init,
        bereken
    }
})
//tip, Array.flat. Voorbeeld: console.log(lijsten.flat(2));


SPA.init(lijsten);

SPA.Boodschappen.bereken();
//student uitwerking


