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
    const emailBody = `<html><h2>header</h2><strong>${words}</strong><br></br><em>Italic</em></html>`

    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    var mailOptions = {
        from: 'words@example.com',
        to: 'annevanderaar@hotmail.com',
        subject: 'New words for Skribbl',
        text: emailBody
    };

    if (words.length > 0) {
        transporter.sendMail(mailOptions, function (error) {
            if (error) {
                alert(error)
                return
            }
            alert('Success')
            this.words = [];
        });
    }
};

addToDoButton.addEventListener('click', function () {
    AddWord();
});

sendButton.addEventListener('click', function () {
    SendEmail();
});
