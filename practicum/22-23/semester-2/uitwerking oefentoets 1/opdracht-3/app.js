// Deze gegeven functie voegt elke twee seconden een 'random' voertuig toe aan de lijst op de pagina.
startInterval = (callback) => {
    setInterval(() => {
        let voertuig;
        if (Date.now() % 2) {
            voertuig = 'vrachtwagen';
        } else {
            voertuig = 'auto';
        }

        $('.verkeersstroom').append(`<li class="list-group-item">${voertuig}</li>`);

        callback(voertuig)
    }, 2000);
}

// document ready, de spa applicatie starten
$(() => {
// SpaApp.init(startInterval);
});



//#student-start
const SpaApp = (() => {
    const init = (intervallen) => {
        intervallen(SpaApp.VerkeersStatistieken.wegCapaciteit);
    };

    return {
        init: init
    }
})();
//#student-end
//SpaApp module


//#student-start
SpaApp.VerkeersStatistieken = (() => {

    let stateMap = {
        aantalAutos : 0,
        aantalVrachtwagens : 0
    };

    const wegCapaciteit = (voertuig) => {
        if(voertuig == 'auto'){
            stateMap.aantalAutos++
        }else{
            stateMap.aantalVrachtwagens++
        }
        console.log(`Weggebruik. auto: ${stateMap.aantalAutos} vrachtwagens: ${stateMap.aantalVrachtwagens} totaal: ${stateMap.aantalAutos + stateMap.aantalVrachtwagens}`);
    };

    return {
        wegCapaciteit: wegCapaciteit,
        stateMap: stateMap
    }
})();
//#student-end
//Verkeerstatistieken module (als property van SpaApp)
