class SchaakBord extends HTMLElement {

    shadowRoot;
    templateId = 'schaak-bord-tpl';
    elementId = 'schaak-bord';

    constructor() {
        super();
        this.shadowRoot = this.attachShadow({mode: 'open'})
    }

    connectedCallback() {
        this.applyTemplate();
        this.attachStyling();
        this.applyEventlisteners();
    }

    applyTemplate() {
        let template = document.getElementById(this.templateId);
        let clone = template.content.cloneNode(true);

        this.shadowRoot.appendChild(clone);

    }

    attachStyling() {
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", "stylesheets/components/schaakbord.css");
        this.shadowRoot.appendChild(linkElem);
    }

    applyEventlisteners() {
        let self = this;

        this.shadowRoot.querySelectorAll('.veld').forEach(e => {
            e.addEventListener('click', (e) => {
                self.removeToren();
                self.addToren(e.currentTarget.dataset.veld);
            });
        });

    }

    addToren(veld) {

        let toren = document.createElement('img');
        toren.src = 'images/toren.png';

        let element = this.shadowRoot.querySelector(`[data-veld="${veld}"]`)
        element.append(toren);

    }

    removeToren() {
        // tip: ... forEach(n => n.childNodes.forEach(n => n.remove()) ...
        //student uitwerking
    }

}

customElements.define('schaak-bord-tpl', SchaakBord);


export default SchaakBord;
