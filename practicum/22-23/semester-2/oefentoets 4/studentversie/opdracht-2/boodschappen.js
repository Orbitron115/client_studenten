
export default class Boodschappen{

    selector;

    constructor(selector) {
        this.selector = selector;
        this.data = [];
    }

    setLijst(data){
        this.data = [...this.data, ...data];
    }

    addBoodschap(boodschap){
        this.data.push(boodschap);
    }

    render(lijsten){

        var dict = {}
        
        lijsten.foreach(lijst => {

            lijst.foreach(item => {

                dict[item] = dict[item] + 1;
            })
            
        })


    }

}
