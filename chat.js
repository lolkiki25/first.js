const sendBtnElement = document.getElementById("sendBtn");
const inputElement = document.getElementById("input");
const chatsElement = document.getElementById("chats");

const sendBtnClickHandler = () => {
    const chat = inputElement.value;
    chatsElement.innerHTML = chatsElement.innerHTML + `<p>${chat}</p>`;
    if (chat.toLowerCase().includes("hello")) {
        chatsElement.innerHTML =
            chatsElement.innerHTML + `<p style="text-align: right;">How old are you</p>`;
    }
    if (chat.toLowerCase().includes("bye")) {
        chatsElement.innerHTML =
            chatsElement.innerHTML + `<p style="text-align: right;">Good bye have you nice day</p>`;
    }
};
sendBtnElement.addEventListener("click", sendBtnClickHandler);  
Pinecone$