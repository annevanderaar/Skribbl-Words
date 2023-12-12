let addToDoButton = document.querySelector('#addWordButton');
let sendButton = document.querySelector('#sendButton');
let inputField = document.getElementById('inputFieldWord');
let wordsContainer = document.getElementById('wordsContainer');
let words = [];

function AddWord() {
    words.push(inputField.value);
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    wordsContainer.appendChild(paragraph);
    inputField.value = "";
};

function SendEmail() {
    if (words.length > 0) {
        Email.send({
            Host: "smtp.mailslurp.com",
            Username: "<mailslurp username>",
            Password: "<mailslurp password>",
            To: 'annevanderaar@hotmail.com',
            From: "words@example.com",
            Subject: "New words for Skribbl",
            Body: `<html><h2>header</h2><strong>${words}</strong><br></br><em>Italic</em></html>`
        }).then(message => {
            alert(message)
            this.words = [];
        });
    };

};

addToDoButton.addEventListener('click', function () {
    AddWord();
});

sendButton.addEventListener('click', function () {
    SendEmail();
});
