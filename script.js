//Returns random choice
function getComputerChoice() {
    //Random number from 0 to 2
    let i = Math.floor(Math.random() * 3);
    switch (i){
        case 0:
            return "fire";
        case 1:
            return "water";
        case 2:
            return "ice";
    }
}

//Html Var instantiation 
let rockButton = document.querySelector("#fire");
let paperButton = document.querySelector("#water");
let scissorsButton = document.querySelector("#ice");
let resultText = document.querySelector("#results");
let winLossText = document.querySelector("#winLossText");
let playerCountText = document.querySelector("#playerCountText");
let computerCountText = document.querySelector("#computerCountText");
//Var event listeners that call game()
rockButton.addEventListener("click", () => game(rockButton.innerHTML.toLowerCase()));
paperButton.addEventListener("click", () => game(paperButton.innerHTML.toLowerCase()));
scissorsButton.addEventListener("click", () => game(scissorsButton.innerHTML.toLowerCase()));
    //Win Count Vars
    let playerCount = 0;
    let computerCount = 0;
//Game logic returns 
function playRound(playerSelection, computerSelection) {
    if(playerSelection === "fire" && computerSelection === "fire") {
        playerCount++;
        computerCount++;
        return "It's a draw!";
    } else if(playerSelection === "water" && computerSelection === "water") {
        playerCount++;
        computerCount++;
        return "It's a draw!";
    } else if(playerSelection === "ice" && computerSelection === "ice") {
        playerCount++;
        computerCount++;
        return "It's a draw!";
    } else if(playerSelection === "fire" && computerSelection === "water") {
        computerCount++;
        return `You Lose! Their ${computerSelection} extinguished your ${playerSelection}!`;
     } else if(playerSelection === "fire" && computerSelection === "ice") {
        playerCount++;
        return `You Win! Their ${playerSelection} scorched ${computerSelection}!`;
     } else if(playerSelection === "water" && computerSelection === "fire") {
        playerCount++;
        return `You Win! Their ${playerSelection} extinguished ${computerSelection}!`;
     } else if(playerSelection === "ice" && computerSelection === "fire") {
        computerCount++;
        return `You Lose! Their ${computerSelection} scorched your ${playerSelection}!`;
     } else if(playerSelection === "water" && computerSelection === "ice") {
        computerCount++;
        return `You Lose! Their ${computerSelection} froze your ${playerSelection}!`;
     } else if(playerSelection === "ice" && computerSelection === "water") {
        playerCount++;
        return `You Win! Your ${playerSelection} froze ${computerSelection}!`;
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
    if (playerCount === 5 && computerCount === 5) {
        winLossText.innerText = "Its a tie!";
        playerCount = 0;
        computerCount = 0;
    } else if(playerCount === 5) {
        winLossText.innerText = "Congrats, you won the match!";
        playerCount = 0;
        computerCount = 0;
    } else if (computerCount === 5) {
        winLossText.innerText = "Darn, you lost the match!";
        playerCount = 0;
        computerCount = 0;

    }


} 