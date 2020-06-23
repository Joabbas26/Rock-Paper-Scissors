//Function should detect which image was clicked, keep it at the 
//same size and move on to the next function
function userChoice(user){
    var user;
    if (this === document.getElementByClassName('userRock')) {
        this.style.width = "250px";
        this.style.height = "250px";
        user = 0;
        return user;
    }
    else if (this === document.getElementByClassName('userPaper')) {
        var paper = document.getElementByClassName('userPaper');
        paper.style.width = "250px";
        paper.style.height = "250px";
        user = 1;
        return user;
    }
    else {
        this.style.width = "250px";
        this.style.height = "250px";
        user = 2;
        return user;
    }
    function computerChoice();
    function compare();
}

//Generates a random number and uses it to assign 0, 1 or 2 to rock, 
//paper and scissors respectabley
function computerChoice(computer){
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = 0;
        return computerChoice;
    } 
    else if(computerChoice <= 0.67) {
        computerChoice = 1;
        return computerChoice;
    } 
    else {
        computerChoice = 2;
        return computerChoice;
    }
}

//Function is supposed to take the returned value of both userChoice 
//and computerChoice and compare them to see who wins
function compare(computer, user){
    if(userChoice === computerChoice) {
        alert("The result is a tie!");
}
if(userChoice === 0) {
    if(computerChoice === 2) {
        alert("rock wins");
    } else {
        alert("paper wins");
    }
}
if(userChoice === 1) {
    if(computerChoice === 0) {
        alert("paper wins");
    } else {
        if(computerChoice === 2) {
            alert("scissors wins");
    }
}
if(userChoice === 2) {
    if(computerChoice === 0) {
        alert("rock wins");
    } else {
        if(computerChoice === 1) {
            alert("scissors wins");
        }
    }
}
}
}