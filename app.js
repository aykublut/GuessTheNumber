const theNumber = document.querySelector("#theNumber");
const theNumberYouGuess = document.querySelector("#theNumberYouGuess");
const confirmButton = document.querySelector("#confirm");
const GuessValueNumber = document.querySelector("#GuessValue");

const container = document.querySelector(".container");

runEvents();
function runEvents() {
    confirmButton.addEventListener("click", exe)
}

function exe() {
    const theNumberValue = Math.floor(Math.random() * 10 + 1);
    const GuessValue = GuessValueNumber.value.trim();
    console.log(GuessValue);
    valueControl(GuessValue, theNumberValue);
    didYouWinControl(theNumberValue, GuessValue);

}

function valueControl(GuessValue, theNumberValue) {
    if (GuessValue > 0 && GuessValue < 11) {
        theNumber.textContent = theNumberValue;
        theNumberYouGuess.textContent = GuessValue;

    }
    else {
        alert("Hatali değer girdiniz");
    }
}

function didYouWinControl(theNumberValue, GuessValue) {
    if (Number(theNumberValue) === Number(GuessValue)) {
        container.classList.remove("lose");
        container.classList.add("win");
        console.log("kazandın");
    }
    else if (GuessValue === "" || GuessValue === null) {
        console.log("hata");
    } else {
        container.classList.remove("win");
        container.classList.add("lose");
        console.log("kaybettin");
    }
}