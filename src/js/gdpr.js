class GDPR {

    constructor() {
        debugger;
        this.bindEvents();
        if(this.cookieStatus() !== 'accept' && this.cookieStatus() !== 'reject') this.showGDPR();
    }

    bindEvents() {

        let buttonAccept = document.querySelector('.gdpr-consent__button--accept');
        buttonAccept.addEventListener('click', () => {
            this.cookieStatus('accept');
            this.hideGDPR();
        });

        let buttonReject = document.querySelector('.gdpr-consent__button--reject');
        buttonReject.addEventListener('click', () => {
            this.cookieStatus('reject');
            this.hideGDPR();
        });

    }


    cookieStatus(status) {
        if (status) localStorage.setItem('gdpr-consent-choice', status);

        let date = new Date();

        const metaData = [
            `${date.getDate}-${date.getMonth}-${date.getFullYear}`,
            `${date.getHours}-${date.getSeconds}`
        ]

        localStorage.setItem('metaData', metaData);
        
        return localStorage.getItem('gdpr-consent-choice');
    }

    hideGDPR(){
        document.querySelector(`.gdpr-consent`).classList.add('hide');
        document.querySelector(`.gdpr-consent`).classList.remove('show');
    }

    showGDPR(){
        document.querySelector(`.gdpr-consent`).classList.add('show');
    }
}

const gdpr = new GDPR();

