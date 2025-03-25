const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const player = document.getElementById("human");
const computer = document.getElementById("computer");
const text = document.getElementById("text");
rock.addEventListener("click",place_holder);
clicks++;
function place_holder() {
    if (player === "scissors" && computer === "paper");
    text.innerHTML = "Scissors loses to paper!";
}


