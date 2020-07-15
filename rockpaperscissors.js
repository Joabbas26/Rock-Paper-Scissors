var choices = ["paper", "rock", "scissors"];
var i = Math.floor(Math.random() * 3);
var ComputerChoice = choices[i];

//Used to calculate the score of each player
var playerScore = 0;
var cpuScore = 0;

//Used to display the cpu and player scores
document.getElementById('playerScore').innerHTML = `Player: ${playerScore}`;
document.getElementById('cpuScore').innerHTML = `CPU: ${cpuScore}`;

//Function called to begin the game
function game(userChoice){

}



//When button pressed it will begin a new game with same score
function newGame() {

}

//When button is pressed it will reset the score and begin a new game
function resetGame() {
    cpuScore = 0;
    playerScore = 0;

}