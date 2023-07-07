
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection = prompt("Rock Paper Scissors"), computerSelection = getComputerChoice()){
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

function game() {
    let winCount = 0;
    let winner;
    for  (let rounds = 0; rounds < 5; rounds++) {
        roundResult = playRound();
        if (roundResult.slice(0, 7) == "You Win") {
            ++winCount;
        } else if (roundResult.slice(0,8) == "You Lose") {
            --winCount;
        }
        console.log(roundResult);
    }
    if (winCount > 0) {
        winner = "You won the best of 5!"
    } else if (winCount < 0) {
        winner = "You lost the best of 5."
    } else {
        winner = "The best of 5 resulted in a tie."
    }
    return winner;
}