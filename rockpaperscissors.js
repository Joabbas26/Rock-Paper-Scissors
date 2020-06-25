function zoomImage(choice){
    choice.style.height = "250px";
    choice.style.width = "250px";
    choice.style.cursor = "pointer";
}

function zoomOutImage(choice){
    choice.style.height = "200px";
    choice.style.width = "200px";
}

//Function should detect which image was clicked, keep it at the 
//same size and move on to the next function
var User = function userChoice(user){
    var user;
    if (this === document.getElementByClassName('.userRock')) {
        this.style.width = "250px";
        this.style.height = "250px";
        return 0;
    }
    else if (this === document.getElementByClassName('.userPaper')) {
        this.style.width = "250px";
        this.style.height = "250px";
        return 1;
    }
    else {
        this.style.width = "250px";
        this.style.height = "250px";
        return 2;
    }
    computerChoice();
    compare(computer, user);
}


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