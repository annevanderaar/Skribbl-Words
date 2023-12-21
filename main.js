let addToDoButton = document.querySelector("#addWordButton");
let sendButton = document.querySelector("#sendButton");
let inputField = document.getElementById("inputFieldWord");
let wordsContainer = document.getElementById("wordsContainer");
let words = [];

function AddWord() {
    words.push(inputField.value);
    var paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = inputField.value;
    wordsContainer.appendChild(paragraph);
    inputField.value = "";
}

function SendEmail() {
    axios.post("https://everlastingwild.nl/mail.php", {
        content: words,
    }, { headers: { "Content-Type": "application/json" } }).then(() => {
        alert("Success");
    }).catch((err) => {
        alert(err);
        console.log(err);
    });
}

addToDoButton.addEventListener("click", function () {
    AddWord();
});

sendButton.addEventListener("click", function () {
    SendEmail();
});
