class Vierkant extends HTMLElement {

    shadowRoot;
    templateId = 'click-vierkant-tpl';
    elementId = 'click-vierkant';


    constructor() {
        super(); // always call super() first in the ctor.
        this.shadowRoot = this.attachShadow({mode: 'open'});
        this.state = {
            cirkelClicks: 0
        };
        this.applyTemplate();
        this.attachStyling();
    }

    connectedCallback() {
        this.shadowRoot.querySelector('div')
            .classList.add(this.getAttribute('color'));
    }
    
    applyTemplate() {
        let template = document.getElementById(this.templateId);
        let clone = template.content.cloneNode(true);
        this.shadowRoot.appendChild(clone);
    }

    attachStyling(){
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", "stylesheets/components/vierkant.css");
        this.shadowRoot.appendChild(linkElem);
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[ property ] = newValue;
    }

    // attributeChangedCallback(property, oldValue, newValue) {
    //
    //     console.log('property')
    //     // this.shadowRoot.querySelector('p').innerHTML(newValue);
    //
    //     if (oldValue === newValue) return;
    //     this[ property ] = newValue;
    //
    // }
    //
    // set answerText(value){
    //     this.setAttribute('answer-text', value)
    // }
    //
    // get answerText(){
    //     this.getAttribute('answer-text')
    // }

}

customElements.define('click-vierkant', Vierkant);

export {Vierkant};
