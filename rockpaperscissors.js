var choices = ["paper", "rock", "scissors"];
var i = Math.floor(Math.random() * 3);
var ComputerChoice = choices[i];

//Used to calculate the score of each player
var playerScore = 0;
var cpuScore = 0;

//Display the 2 choices and who won
var battleMessage = document.getElementsByClassName('battleMessage');
var winningMessage = document.getElementsByClassName('winningMessage');

//Results of each game
var draw = "It's a Draw";
var cpuWin = "CPU Wins!";
var userWin = "You Win!";

//Used to display the cpu and player scores
document.getElementById('playerScore').innerHTML = `Player: ${playerScore}`;
document.getElementById('cpuScore').innerHTML = `CPU: ${cpuScore}`;

//To be activated when the rock image is clicked
var rock = document.getElementByClassName('userRock');
rock.addEventListener("click", game(this));

//To be activated when the paper image is clicked
var paper = document.getElementByClassName('userPaper');
paper.addEventListener("click", game(this));

//To be activated when the paper image is clicked
var scissors = document.getElementByClassName('userScissors');
scissors.addEventListener("click", game(this));

//Function called to begin the game
function game(userChoice){
    if (userChoice === rock) {
        if (ComputerChoice === "rock") {
            battleMessage.innerHTML = "Rock vs Rock"
            winningMessage.innerHTML = draw;
        }
        else if (ComputerChoice === "paper") {
            battleMessage.innerHTML = "Rock vs Paper"
            winningMessage.innerHTML = cpuWin;
        }
        else {
            battleMessage.innerHTML = "Rock vs Scissors"
            winningMessage.innerHTML = userWin;
        }
    }
    else if (userChoice === paper) {
        if (ComputerChoice === "rock") {
            battleMessage.innerHTML = "Paper vs Rock"
            winningMessage.innerHTML = userWin;
        }
        else if (ComputerChoice === "paper") {
            battleMessage.innerHTML = "Paper vs Paper"
            winningMessage.innerHTML = draw;
        }
        else {
            battleMessage.innerHTML = "Paper vs Scissors"
            winningMessage.innerHTML = cpuWin;
        }
    }
    else {
        if (ComputerChoice === "scissors") {
            battleMessage.innerHTML = "Scissors vs Rock"
            winningMessage.innerHTML = cpuWin;
        }
        else if (ComputerChoice === "paper") {
            battleMessage.innerHTML = "Scissors vs Paper"
            winningMessage.innerHTML = userWin;
        }
        else {
            battleMessage.innerHTML = "Scissors vs Scissors"
            winningMessage.innerHTML = draw;
        }
    }
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