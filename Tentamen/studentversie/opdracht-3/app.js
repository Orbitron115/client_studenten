class Schaakklok {

    klokken = {
        A: 0,
        B: 0
    }

    tijd = 0;

    currentKlok = ''

    intervalRef = null

    async start(){
        let total = 10;

        total = await this.fetchSeconds();

        this.klokken.A = total;
        this.klokken.B = total;
        this.displayKlokTijden();
        this.currentKlok = 'A';
        this.startInterval();
        this.applyEventListeners();
    }

    async fetchSeconds(){

        let url = 'http://localhost:3000/seconds';
        let response = await fetch(url);

        let secondes = await response.json();

        this.tijd = parseInt(secondes);
        return secondes;

    }

    startInterval(){
        this.intervalRef = setInterval(() => {

            if(this.klokken[this.currentKlok] === 0){
                this.stopInterval();
                let winnaar = '';
                this.currentKlok === 'A'? winnaar = 'B' : winnaar = 'A';
                alert(`De winaar is ${winnaar}`);
            }

            this.klokken[this.currentKlok]--;
            console.log(`resterende tijden:
            klok A: ${this.klokken['A']}
            klok B: ${this.klokken['B']}
            `)

            this.displayKlokTijden();
        }, 1000);

    }

    displayKlokTijden(){
        document.getElementById('tijd-klok-A').innerHTML = this.klokken.A;
        document.getElementById('tijd-klok-B').innerHTML = this.klokken.B;

    }

    formatTijd(seconden){
        return `${Math.floor(seconden/60)}:${seconden%60}`
    }

    stopInterval(){
        clearInterval(this.intervalRef);
    }

    async reset(){
        this.stopInterval();
        await this.start();
    }

    /**
     *
     * @param speler is letter A of letter B
     */
    toggleKlokken(speler){
        debugger;

        if(speler !== this.currentKlok){
            throw new Error('Je bent niet aan de beurt!')
        }

        
        if (this.currentKlok == "A"){
            this.currentKlok = "B";
        } else {
            this.currentKlok = "A";
        }

        console.log('maak in deze methode het wisselen van de speler werkend.')
//student uitwerking

    }

    applyEventListeners(){
        document.getElementById('button-reset').addEventListener('click', () => {
            this.reset();
        });

        document.getElementById('button-klok-a').addEventListener('click', () => {
            this.toggleKlokken("A");
        });

        document.getElementById('button-klok-b').addEventListener('click', () => {
            this.toggleKlokken("B");
        });


        console.log('pas hier de eventlisteners toe op de switch knoppen.')

    }

}

const schaakklok = new Schaakklok();
schaakklok.start();
