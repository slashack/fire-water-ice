function getComputerChoice() {
    //Random number from 0 to 2
    let i = Math.floor(Math.random() * 3);
    switch (i){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === "rock" && computerSelection === "rock") {
        playerCount++;
        computerCount++;
        return "It's a tie!";
    } else if(playerSelection === "paper" && computerSelection === "paper") {
        playerCount++;
        computerCount++;
        return "It's a tie!";
    } else if(playerSelection === "scissors" && computerSelection === "scissors") {
        playerCount++;
        computerCount++;
        return "It's a tie!";
    } else if(playerSelection === "rock" && computerSelection === "paper") {
        playerCount++;
        return "You Win! Rock beats Paper";
     } else if(playerSelection === "rock" && computerSelection === "scissors") {
        playerCount++;
        return "You Win! Rock beats Scissors";
     } else if(playerSelection === "paper" && computerSelection === "rock") {
        playerCount++;
        return "You Win! Paper beats Rock";
     } else if(playerSelection === "scissors" && computerSelection === "rock") {
        computerCount++;
        return "You Lose! Rock beats Scissors";
     } else if(playerSelection === "paper" && computerSelection === "scissors") {
        computerCount++;
        return "You Lose! Scissors beat Paper";
     } else if(playerSelection === "scissors" && computerSelection === "paper") {
        computerCount++;
        return "You Win! Scissors beat Paper";
     }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose Rock, Paper, Or Scissors:");
        const computerSelection = getComputerChoice().toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
    }
    if(playerCount > computerCount) {
        console.log("Congrats, you won the match!");
    } else {
        console.log("Sorry, you lose the math");
    }
}
let playerCount = 0;
let computerCount = 0;
console.log(game());