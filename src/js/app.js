debugger;
const form = document.querySelector("form");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const description = document.getElementById("description");
const emailError = document.querySelector("#email + span.error");


form.addEventListener("submit", async (event) => {
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();

     if (validateInput() == false){
        return;
     }

     /*
    if (!email.validity.valid) {
        // If it isn't, we display an appropriate error message
        showError();
        return;
    }
    */
    
    let response = await fetch('http://localhost:3000/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email: email.value , subject: subject.value , description: description.value})
    });

    let data = await response.json();
    alert(JSON.stringify(data))

});

function showErrorEmail() {

    /*
    if (email.validity.valueMissing) {
        // If the field is empty,
        // display the following error message.
        emailError.textContent = "You need to enter an e-mail address.";
    } else if (email.validity.typeMismatch) {
        // If the field doesn't contain an email address,
        // display the following error message.
        emailError.textContent = "Entered value needs to be an e-mail address.";
    } else if (email.validity.tooShort) {
        // If the data is too short,
        // display the following error message.
        emailError.textContent = `E-mail should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }

    // Set the styling appropriately
    emailError.className = "error active";
    */
   alert("gaat wahet mis bij mail");
}

function showErrorSubject() {
    alert("Teveel characters subject!");
}

function showErrorDescription() {
    alert("Teveel characters description!");
}

function validateInput(){

    // mail validatie gaat mis
    if (!email.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
        {
            showErrorEmail();
            return false;
        }

    if (subject.value.length >= 200 || !(validateText(subject.value)))
        {
            showErrorSubject();
            return false;
        }

    if (description.value.length >= 600 || (!validateText(description.value)))
        {
            showErrorDescription();
            return false;
        }
    
    return true;
}

function validateText(input){

    var letterNumber = /^[0-9 a-zA-Z]+$/;

    if(input.match(letterNumber))
        {
            return true;
        }

    return false;
    
}
