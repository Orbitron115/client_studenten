debugger;
const form = document.querySelector("form");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const name = document.getElementById("name");
const description = document.getElementById("description");
const emailError = document.querySelector("#email + span.error");


form.addEventListener("submit", async (event) => {
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();

    if (document.querySelector('[name="h-captcha-response"]').value == ""){
        alert("please complte the captcha")
    }else{
    
        if (validateInput() == false){
           return;
        }
       
       let response = await fetch('http://localhost:3000/form', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({email: email.value , subject: subject.value , description: description.value, name: name.value})
       });
   
       let data = await response.json();
       sendMail()
       alert(JSON.stringify(data))
   
   }
});

function showErrorEmail() {

   alert("Vul een geldig emailadres in!");
}

function showErrorSubject(bool) {
    if (bool)
        alert("Teveel charachters voor het onderwerp!")
    else
        alert("Alleen normale letters en spaties cijfers gebruiken in het onderwerp!")
}

function showErrorDescription(bool) {
    if (bool)
        alert("Teveel charachters voor het bericht!")
    else
        alert("Alleen normale letters en spaties cijfers gebruiken in het bericht!")
}

function validateInput(){

    // mail validatie gaat mis
    if (!email.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
        {
            showErrorEmail();
            return false;
        }

    if (subject.value.length >= 200){
        showErrorSubject(true);
        return false;
    }

    if (!validateText(subject.value)){
        showErrorSubject(false);
        return false;
    }
        
    if (description.value.length >= 200){
        showErrorSubject(true);
        return false;
    }

    if (!validateText(description.value)){
        showErrorSubject(false);
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

function sendMail(){

    Email.send({
        SecureToken: "e178ef23-2ece-42fb-96af-efe220bf0ae4",
        Username : "robin.contactit@gmail.com",
        Password : "A09AA4B7BD4510155365548435CEC8193A8E",
        To : email.value,
        From : "robin.contactit@gmail.com",
        Subject : "This is the subject",
        Body : "<html> <h3>Name: " + name.value + "<h3><br><br>"+
                     "<h4>Email:" + email.value + "</h4><br>"+
                    "<h4>Subject:" + subject.value + "</h4><br>"+
                    "<p>Message:" + description.value + "</p><br>"+
                    "</html>",
    }).then(
      message => alert(message)
    );
}

function hCaptchaCallback(token){
    form.setAttribute("data-hcaptcha-response" , token);

}