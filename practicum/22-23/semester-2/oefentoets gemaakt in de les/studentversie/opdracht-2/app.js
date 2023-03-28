import Boodschappen from './boodschappen.js';

class App {

    boodschappen;

    start() {
        this.boodschappen = new Boodschappen('boodschappen');
        this.addEventListeners();
        debugger;
    }

    async haalBoodschappenOp() {

        let response2 = await fetch('http://localhost:3000/boodschappen');
        const data2 = await response.json();

        let response = await fetch('http://localhost:3000/boodschappen', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }})

        
        let data = await response.json();
        this.boodschappen.data = data;
        
        this.boodschappen.data.forEach((item)=> {
            let listItem = document.createElement("li" , item);
            listItem.innerHTML = item.toString();
            document.getElementById("lijst").appendChild(listItem);
        });

    };

    voegBoodschapToe() {
        debugger;
        let boodschap = document.getElementById('boodschap-invoer').value;
        this.boodschappen.addBoodschap(boodschap);

        let listItem = document.createElement("li" , boodschap);
        listItem.innerHTML = boodschap.toString();
        document.getElementById("lijst").appendChild(listItem);

        document.getElementById('boodschap-invoer').value = '';
    }

    addEventListeners() {
    let self = this;
    document.getElementById(`haal-boodschappen-knop`)
           .addEventListener(`click`, () => self.haalBoodschappenOp());

    document.getElementById(`voeg-boodschap-toe-knop`)
           .addEventListener(`click`, () => self.voegBoodschapToe());
    }
}

const app = new App();
app.start();
