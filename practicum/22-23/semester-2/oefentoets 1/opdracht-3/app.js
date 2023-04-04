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



//student uitwerking
//SpaApp module


//student uitwerking
//Verkeerstatistieken module (als property van SpaApp)
