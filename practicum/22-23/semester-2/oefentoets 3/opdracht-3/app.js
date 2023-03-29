class ChatBox {


    toggleChat() {

       //#student-start
       let chatBox = document.querySelector("#chatbox");
       chatBox.classList.toggle("chatbox--closed");
       let chatBoxButton = document.querySelector("#toonKnop");
       chatBoxButton.classList.toggle("toonKnop--closed");
       //#student-end
        
    }

    async sendMessage() {

        let messagebox = document.getElementById('chatbox__message');
        let message = messagebox.value;
        messagebox.value = "";

        let response = await fetch('http://localhost:3000/chat' , {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "message": message
            })
        })


        console.log(await response.json());
    }


}

// document ready...
$(() => {

    let chatBox = new ChatBox();
    let button = document.getElementById('toonKnop');
    let verzend = document.getElementById('verstuurKnop');

    button.onclick = () => {
        chatBox.toggleChat();
    }

    verzend.onclick = async () => {
        chatBox.sendMessage();
    }

//student uitwerking

});



