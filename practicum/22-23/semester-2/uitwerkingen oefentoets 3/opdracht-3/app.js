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

        //#student-start
        let message = document.querySelector("#chatbox__message");
        let messageString = message.value;
        message.value = "";
        let chatBox = document.querySelector("#chatbox");
        this.toggleChat();
        let url = 'http://localhost:3000/chat';
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                    "message": messageString
                }
            )
        })
        console.log(await response.json());
        //#student-end

        //console.log(await response.json());
    }


}

// document ready...
$(() => {

    // let chatBox = new ChatBox();
    // let button = document.getElementById('toonKnop');

    //#student-start
    let chatBox = new ChatBox();
    let button = document.getElementById('toonKnop');
    button.onclick = async () => {
        chatBox.toggleChat();
    }

    let sendButton = document.getElementById('verstuurKnop');
    sendButton.onclick = async () => {

        await chatBox.sendMessage();
    }
    //#student-end

});



