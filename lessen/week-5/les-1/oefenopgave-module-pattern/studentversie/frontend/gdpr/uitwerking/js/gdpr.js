const gpdr = (function () {

    const init = () => {
        this.showStatus();
        this.showContent();
        this.bindEvents();

        if(this.cookieStatus() !== 'accept') this.showGDPR();
    }

    const bindEvents = () => {
        let buttonAccept = document.querySelector('.gdpr-consent__button--accept');
        buttonAccept.addEventListener('click', () => {
            this.cookieStatus('accept');
            this.showStatus();
            this.showContent();
            this.hideGDPR();
        });


        //#student-start
        let buttonReject = document.querySelector('.gdpr-consent__button--reject');
        buttonReject.addEventListener('click', () => {
            this.cookieStatus('reject');
            this.showStatus();
            this.showContent();
            this.hideGDPR();
        });
        //#student-end


    }
    
    const showContent = () => {
        this.resetContent();
        const status = this.cookieStatus() == null ? 'not-chosen' : this.cookieStatus();
        const element = document.querySelector(`.content-gdpr-${status}`);
        element.classList.add('show');

    }

    const resetContent = () =>{
        const classes = [
            '.content-gdpr-accept',

            //#student-start
            '.content-gdpr-reject',
            //#student-end

            '.content-gdpr-not-chosen'];

        for(const c of classes){
            document.querySelector(c).classList.add('hide');
            document.querySelector(c).classList.remove('show');
        }
    }

    const showStatus = () => {
        document.getElementById('content-gpdr-consent-status').innerHTML =
            this.cookieStatus() == null ? 'Niet gekozen' : this.cookieStatus();
    }

    const cookieStatus = (status) => {
        if (status) localStorage.setItem('gdpr-consent-choice', status);

        //#student-start
        if(status) this.saveMetaData();
        //#student-end

        return localStorage.getItem('gdpr-consent-choice');
    }


    //#student-start
    const saveMetaData = () =>{
        const date = new Date();
        let metadata  = {
            datum: `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`,
            tijd: `${date.getHours()}:${date.getMinutes()}`
        }
        localStorage.setItem('gdpr-consent-metadata', JSON.stringify(metadata) );
    }

    //#student-end

    const hideGDPR = () => {
        document.querySelector(`.gdpr-consent`).classList.add('hide');
        document.querySelector(`.gdpr-consent`).classList.remove('show');
    }

    showGDPR = () => {
        document.querySelector(`.gdpr-consent`).classList.add('show');
    }

    return{
        init
    }

}());

gpdr.init();