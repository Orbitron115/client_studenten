class Voertuigen {


    //#student-start
    constructor(jsonFile) {
        this.data = [];
        this.jsonFile = jsonFile;
    }

    async haalGegevensOp() {
        let self = this;
        this.data = await $.getJSON(this.jsonFile);
    }

    tabelVullen(leeftijd) {
        for (let i = 2000; i <= 2020; i++) {
            let count = this.voertuigenTellen(leeftijd, i)

            $(`<tr><td>${i}</td><td>${leeftijd}</td><td>${count}</td></tr>`).appendTo('#voertuigentabel tbody');
        }
    }

    voertuigenTellen(leeftijd, jaar) {
        return this.data.reduce((p, c, i, a) => {
            if (c.leeftijd == leeftijd && c.jaar == jaar) {
                return p + parseInt(c.alleVoertuigen.trim());
            }
            return p
        }, 0);
    }
    //#student-end
    //implementatie constructor en methoden
}
