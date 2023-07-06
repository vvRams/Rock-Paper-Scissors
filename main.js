const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let randomPick = Math.floor(Math.random() * choices.length);
    return choices[randomPick];
}
function playRound(playerSelection, computerSelection){
    let result;
    switch (computerSelection) {
        case "rock":
            if ((playerSelection).toLowerCase() == "paper") {
                result = "You Win! Paper beats Rock.";
            } else if ((playerSelection).toLowerCase() == "scissors") {
                result = "You Lose. Rock beats Scissors."
            }
            break;
    } 
    return result
}
const computerSelection = getComputerChoice();
const playerSelection = "paper";