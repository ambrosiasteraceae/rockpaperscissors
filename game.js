
var humanScore = 0;
var aiScore = 0;
var numberRound = 0;
const scores = document.querySelector(".scores")
choices = ["rock", "paper", "scissors"]
// we can use color dictionary
var colorDictionary = {
    "rock" : "#04AA6D",
    "paper" : "#049caa",
    "scissors" :"#c94141"
}; 


let cont = document.querySelector("#container")
console.log(cont)

cont.addEventListener("click", (e) =>
{
    if (numberRound == 0)
            resetGame();

    numberRound +=1;
    let humanChoice = e.target.className;
    let aiChoice = getaiChoice();
    let result = playRound(humanChoice, aiChoice);
    addElements(humanChoice, aiChoice);
    addIntermediaryResult(result);
    if (numberRound == 5)
    {
        addTotalScore(humanScore, aiScore);
        numberRound = 0;
    }
      


   

})

function addTotalScore(humanScore, aiScore)
{
    const tResult = document.createElement("h3");
    let winner = humanScore > aiScore? "Player Wins" : humanScore == aiScore? "Draw" : "Ai Wins";
    tResult.textContent = `***** ${winner} ****`;
    scores.appendChild(tResult);


}
function resetGame()
{
    humanScore = 0;
    aiScore = 0;
    numberRound = 0;

    // const ascores = document.querySelector(".scores");
    while (scores.firstElementChild)
        scores.removeChild(scores.lastElementChild);

    
}

function addIntermediaryResult(result)
{
    const iResult = document.createElement("div");
    iResult.classList.add("iresult");
    let roundResult = result >0? "Player Wins." : result == 0? "It's a draw." : "AI Wins.";
    iResult.innerHTML = `${roundResult} Score is: ${humanScore}/${aiScore}`;
    scores.appendChild(iResult);
}

function addElements(humanChoice, aiChoice)
{

    const round = document.createElement("div");
    round.innerHTML = `Round:${numberRound}. Player chooses
     <span class =${humanChoice}> ${humanChoice} </span> 
     AI chooses <span class =${aiChoice}> ${aiChoice} </span>`;
    round.classList.add("content");
    scores.appendChild(round);


}


let getaiChoice = () => {
    let aiChoice = parseInt(Math.random()*3);
    return choices[aiChoice]
};


function playRound(a, b)
{   let aiWin = aiScore;
    let pWin = humanScore;
    if (a == b)
    {
        aiScore+=0;
        return 0;
    }

    else if (a == "rock" && b == "paper")
    {
        aiScore += 1;
        return -1;
    }

    else if (a == "rock" && b == "scissors")
    {
        humanScore += 1;
        return 1;
    }
    else if (a =="paper" && b == "rock")
        {
            humanScore += 1;
            return 1;
        }
    else if (a =="paper" && b == "scissors")
        {
            aiScore += 1;
            return -1;
        }
    else if (a =="scissors" && b == "rock")
        {
            aiScore += 1;
            return -1;
        }
    else if (a == "scissors" && b == "paper")
        {
            humanScore += 1;
            return 1;
        }
    // if (aiwin < aiScore)
    //     return 0
    // else if (pWin < humanScore)
    // return 0

}

