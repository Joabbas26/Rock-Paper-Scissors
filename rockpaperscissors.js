var choices = ["rock", "paper", "scissors"];
var i = Math.floor(Math.random() * 3);
var ComputerChoice = choices[i];

//Will be set to user choice later
var userChoice;

//Used to calculate the score of each player
var playerScore = 0;
var cpuScore = 0;

//Display the 2 choices and who won
var battleMessage = document.getElementById('battleMessage');
var winningMessage = document.getElementById('winningMessage');

//Results of each game
var draw = "It's a Draw";
var cpuWin = "CPU Wins!";
var userWin = "You Win!";

//Used to display the cpu and player scores
document.getElementById('playerScore').innerHTML = `Player: ${playerScore}`;
document.getElementById('cpuScore').innerHTML = `CPU: ${cpuScore}`;

//To be activated when the rock image is clicked
var rock = document.getElementById('userRock');
rock.addEventListener("click", function rockChoice(){
    userChoice = choices[0];
    game(userChoice);
});

//To be activated when the paper image is clicked
var paper = document.getElementById('userPaper');
paper.addEventListener("click", function paperChoice(){
    userChoice = choices[1];
    game(userChoice);
});

//To be activated when the paper image is clicked
var scissors = document.getElementById('userScissors');
scissors.addEventListener("click", function scissorsChoice(){
    userChoice = choices[2];
    game(userChoice);
});

//Function called to begin the game
function game(userChoice){
    if (userChoice === "rock") {   
        if (ComputerChoice === "rock") {
            battleMessage.innerHTML = "Rock vs Rock";
            winningMessage.innerHTML = draw;
        }
        else if (ComputerChoice === "paper") {
            battleMessage.innerHTML = "Rock vs Paper";
            winningMessage.innerHTML = cpuWin;
            cpuScore += 1;
        }
        else {
            battleMessage.innerHTML = "Rock vs Scissors";
            winningMessage.innerHTML = userWin;
            playerScore += 1;
        }
    }
    else if (userChoice === "paper") {
        if (ComputerChoice === "rock") {
            battleMessage.innerHTML = "Paper vs Rock";
            winningMessage.innerHTML = userWin;
            playerScore += 1;
        }
        else if (ComputerChoice === "paper") {
            battleMessage.innerHTML = "Paper vs Paper";
            winningMessage.innerHTML = draw;
        }
        else {
            battleMessage.innerHTML = "Paper vs Scissors";
            winningMessage.innerHTML = cpuWin;
            cpuScore += 1;
        }
    }
    else {
        if (ComputerChoice === "scissors") {
            battleMessage.innerHTML = "Scissors vs Rock";
            winningMessage.innerHTML = cpuWin;
            cpuScore += 1;
        }
        else if (ComputerChoice === "paper") {
            battleMessage.innerHTML = "Scissors vs Paper";
            winningMessage.innerHTML = userWin;
            playerScore += 1;
        }
        else {
            battleMessage.innerHTML = "Scissors vs Scissors";
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
    playerScore = 0;
    cpuScore = 0;
    battleMessage.innerHTML = "";
    winningMessage.innerHTML = "";
}