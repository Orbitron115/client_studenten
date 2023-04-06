class Schaakklok {

    klokken = {
        A: 0,
        B: 0
    }

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

        // let url = 'http://localhost:3000/seconds';
        // ...
//student uitwerking

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

        console.log('toon de kloktijden in deze methode.')
//student uitwerking

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

        if(speler !== this.currentKlok){
            throw new Error('Je bent niet aan de beurt!')
        }
        console.log('maak in deze methode het wisselen van de speler werkend.')
        //this.currentKlok = ....
//student uitwerking

    }

    applyEventListeners(){
        document.getElementById('button-reset').addEventListener('click', () => {
            this.reset();
        });

        console.log('pas hier de eventlisteners toe op de switch knoppen.')
//student uitwerking

    }

}

const schaakklok = new Schaakklok();
schaakklok.start();
