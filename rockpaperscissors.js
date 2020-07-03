function zoomImage(choice){
    choice.style.height = "250px";
    choice.style.width = "250px";
    choice.style.cursor = "pointer";
}

function zoomOutImage(choice){
    choice.style.height = "200px";
    choice.style.width = "200px";
}

//Used to calculate the score of each player
var playerScore = 0;
var cpuScore = 0;

//Should detect which image was clicked, keep it at the 
//same size and set user variable to respective number
var user = 0;
var rockChoice = document.getElementByClassName('.userRock');
var paperChoice = document.getElementByClassName('.userPaper');
var scissorsChoice = document.getElementByClassName('.userScissors');

var onRockChoice = function(user){
    rockChoice.style.width = "250px";
    rockChoice.style.height = "250px";
    return 0;
}

var onPaperChoice = function(user){
    paperChoice.style.width = "250px";
    paperChoice.style.height = "250px";
    return 1;
}

var onScissorsChoice = function(user){
    scissorsChoice.style.width = "250px";
    scissorsChoice.style.height = "250px";
    return 2;
}

rockChoice.addEventListener("click", onRockChoice);
paperChoice.addEventListener("click", onPaperChoice);
scissorsChoice.addEventListener("click", onScissorsChoice);


//Generates a random number and uses it to assign 0, 1 or 2 to rock, 
//paper and scissors respectabley
function computerChoice(computer){
    var computer = Math.random();
    if (computer < 0.34) {
        computer = 0;
        return computer;
    } 
    else if(computer <= 0.67) {
        computer = 1;
        return computer;
    } 
    else {
        computer = 2;
        return computer;
    }
}

//Function is supposed to take the returned value of both user 
//and computer and compare them to see who wins
function compare(computer, user){
    if(user === computer) {
        alert("The result is a tie!");
    }
    if(user === 0) {
        if(computer === 2) {
        alert("rock wins");
     } else {
        alert("paper wins");
        }
    }
if(user === 1) {
    if(computer === 0) {
        alert("paper wins");
    } else {
        if(computer === 2) {
            alert("scissors wins");
    }
}
if(user === 2) {
    if(computer === 0) {
        alert("rock wins");
    } else {
        if(computer === 1) {
            alert("scissors wins");
        }
    }
}
}
}

//When button pressed it will begin a new game with same score
function newGame() {

}

//When button is pressed it will reset the score and begin a new game
function resetGame() {

}

