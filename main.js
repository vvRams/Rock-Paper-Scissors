const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    let randomPick = Math.floor(Math.random() * choices.length);
    return choices[randomPick]
}