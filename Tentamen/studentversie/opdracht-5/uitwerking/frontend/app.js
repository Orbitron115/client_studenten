import SchaakBord from './components/schaakbord.js';

class App extends HTMLElement {

    shadowRoot;
    templateId = 'schaak-app-tpl';
    elementId = 'schaak-app';

    constructor() {
        super();
        this.shadowRoot = this.attachShadow({mode: 'open'})
    }

    connectedCallback() {
        this.applyTemplate();
        this.attachStyling();
    }

    applyTemplate() {
        let appTemplate = document.getElementById(this.templateId);
        let clone = appTemplate.content.cloneNode(true);
        this.shadowRoot.appendChild(clone);
    }

    attachStyling() {
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", "stylesheets/app.css");
        this.shadowRoot.appendChild(linkElem);
    }

}

customElements.define('schaak-app', App);
