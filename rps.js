function getComputerChoice(){
    let computerChoice = ""
    let output = Math.random()
    if (output < 0.33){
        return computerChoice = "rock"
    }
    else if (output >= 0.33 && output < 0.66) {
        return computerChoice = "paper";
    }
    else{
        return computerChoice = "scissors";
    }
    
};

function getHumanChoice(){
    
}


console.log(getComputerChoice())
