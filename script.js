//Returns random choice
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

//Html Var instantiation 
let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");
let resultText = document.querySelector("#results");
let winLossText = document.querySelector("#winLossText");
let playerCountText = document.querySelector("#playerCountText");
let computerCountText = document.querySelector("#computerCountText");
//Var event listeners that call game()
rockButton.addEventListener("click", () => game(scissorsButton.innerHTML.toLowerCase()));
paperButton.addEventListener("click", () => game(scissorsButton.innerHTML.toLowerCase()));
scissorsButton.addEventListener("click", () => game(scissorsButton.innerHTML.toLowerCase()));
    //Win Count Vars
    let playerCount = 0;
    let computerCount = 0;
//Game logic returns 
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
//Old game logic
 function game(userChoice) {
    //removes win loss text if new game
    winLossText.innerText = "";
    //Assign result from gameRound() to resultString and display for user
    let resultString = playRound(userChoice,getComputerChoice());
    resultText.innerText = resultString;

    playerCountText.innerText = playerCount;
    computerCountText.innerText = computerCount;

    if(playerCount === 5) {
        winLossText.innerText = "Congrats, you won the match!";
        playerCount = 0;
        computerCount = 0
    } else if (computerCount === 5) {
        winLossText.innerText = "Congrats, you won the match!";
        playerCount = 0;
        computerCount = 0;

    }


} 