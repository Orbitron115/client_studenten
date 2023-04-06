import Boodschappen from './boodschappen.js';

class App {

    boodschappen;

    start() {
        // this.boodschappen = new Boodschappen('boodschappen');
        // this.addEventListeners();
        //#student-start
        this.boodschappen = new Boodschappen('boodschappen');
        this.addEventListeners();
        //#student-end
    }

    async haalBoodschappenOp() {
        //fetch...
        //#student-start
        const response = await fetch('http://localhost:3000/boodschappen');
        const data = await response.json();
        this.boodschappen.setLijst(data);
        this.boodschappen.render();
        //#student-end
    }

    /* Alternatieve uitwerking met then
    haalBoodschappenOp() {
        //fetch...
        //#student-start
        fetch('http://localhost:3000/boodschappen')
            .then(response => response.json())
            .then(data => {
                this.boodschappen.setLijst(data)
                this.boodschappen.render();
            });
        //#student-end
    }
    */

    voegBoodschapToe() {
        let boodschap = document.getElementById('boodschap-invoer').value;
        //#student-start
        document.getElementById('boodschap-invoer').value = '';
        this.boodschappen.addBoodschap(boodschap);
        this.boodschappen.render();
        //#student-end
    }

    addEventListeners() {
        let self = this;
       document.getElementById(`haal-boodschappen-knop`)
           .addEventListener(`click`, () => self.#haalBoodschappenOp());
       //#student-start
       document.getElementById((`voeg-boodschap-toe-knop`))
           .addEventListener(`click`, () => self.voegBoodschapToe());
       //#student-end
    }
}

const app = new App();
app.start();
