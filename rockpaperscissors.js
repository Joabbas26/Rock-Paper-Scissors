var choices = ["paper", "rock", "scissors"];
var i = Math.floor(Math.random() * 3);
var ComputerChoice = choices[i];

//Used to calculate the score of each player
var playerScore = 0;
var cpuScore = 0;

var battleMessage = document.getElementByClassName('battleMessage');
var winningMessage = document.getElementByClassName('winningMessage');

//Used to display the cpu and player scores
document.getElementById('playerScore').innerHTML = `Player: ${playerScore}`;
document.getElementById('cpuScore').innerHTML = `CPU: ${cpuScore}`;

//Function called to begin the game
function game(userChoice){
    
//Change userChoice to be a event Listener
var userChoice = prompt("Do you choose rock, paper or scissors?");
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

var compare = function(userChoice, computerChoice) {
    if(userChoice === computerChoice) {
    return "The result is a tie!";
}
if(userChoice === "rock") {
    if(computerChoice === "scissors") {
        return "rock wins";
    } else {
        return "paper wins";
    }
}
if(userChoice === "paper") {
    if(computerChoice === "rock") {
        return "paper wins";
    } else {
        if(computerChoice === "scissors") {
            return "scissors wins";
    }
}
if(userChoice === "scissors") {
    if(computerChoice === "rock") {
        return "rock wins";
    } else {
        if(computerChoice === "paper") {
            return "scissors wins";
        }
    }
}
}
};
}

//When button pressed it will begin a new game with same score
function newGame() {
    battleMessage.innerHTML = "";
    winningMessage.innerHTML = "";
}

//When button is pressed it will reset the score and begin a new game
function resetGame() {
    cpuScore = 0;
    playerScore = 0;
    battleMessage.innerHTML = "";
    winningMessage.innerHTML = "";
}