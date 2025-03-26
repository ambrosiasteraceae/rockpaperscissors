var humanScore = 0;
var aiScore = 0;
let choices = ["rock", "paper", "scissors"];

let getHumanChoice = (s) => prompt(`Please enter any of the choices : "rock", "paper", "scissors"'`);

let getaiChoice = () => {
    let aiChoice = parseInt(Math.random()*3);
    return choices[aiChoice]
};


function playRound(a, b)
{
    if (a == b)
    aiScore+=0;
    else if (a == "rock" && b == "paper")
        aiScore += 1;
    else if (a == "rock" && b == "scissors")
        humanScore += 1;
    else if (a =="paper" && b == "rock")
        humanScore += 1;
    else if (a =="paper" && b == "scissors")
        aiScore += 1;
    else if (a =="scissors" && b == "rock")
        aiScore +=1 ; 
    else if (a == "scissors" && b == "paper")
        humanScore += 1;
    return 0

}

for (let i = 0; i<3; i++)
{
    let humanChoice = getHumanChoice();
    let aiChoice = getaiChoice();
    console.log("Round:" + i);
    console.log(" Player: " + humanChoice +" Computer: " + aiChoice);
    playRound(humanChoice, aiChoice)
}
console.log("****************")
console.log("Final score:")
console.log(" Player: " + humanScore +" Computer: " + aiScore);

