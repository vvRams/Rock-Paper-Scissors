const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let randomPick = Math.floor(Math.random() * choices.length);
    return choices[randomPick];
}
function playRound(playerSelection, computerSelection){
    let result;
    if ((playerSelection).toLowerCase() == computerSelection) {
        result = "It's a Tie.";
    } else {
        switch (computerSelection) {
            case "rock":
                if ((playerSelection).toLowerCase() == "paper") {
                    result = "You Win! Paper beats Rock.";
                } else if ((playerSelection).toLowerCase() == "scissors") {
                    result = "You Lose. Rock beats Scissors.";
                }
                break;
            case "paper":
                if ((playerSelection).toLowerCase() == "scissors") {
                    result = "You Win! Scissors beats Paper.";
                } else if ((playerSelection).toLowerCase() == "rock") {
                    result = "You Lose. Paper beats Rock.";
                }
                break;
            case "scissors":
                if ((playerSelection).toLowerCase() == "rock") {
                    result = "You Win! Rock beats Scissors.";
                } else if ((playerSelection).toLowerCase() == "paper") {
                    result = "You Lose. Scissors beats Paper.";
                }
                break;
        } 
    }
    return result;
}
const computerSelection = getComputerChoice();
const playerSelection = "paper";
console.log(computerSelection);
