class GDPR {

    constructor() {
        debugger;
        this.bindEvents();
    }

    bindEvents() {

        
        let buttonSubmit = document.querySelector('.gdpr-consent__button--reject');
        buttonReject.addEventListener('click', () => {
            this.cookieStatus('reject');
            this.hideGDPR();
        });
    }



}

const gdpr = new GDPR();

