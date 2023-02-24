function getComputerChoice(n){
    computerChoice = Math.ceil(Math.random() * 3)
    switch(computerChoice) {
        case 1:
            computerChoice = "rock"
            break;
        case 2:
            computerChoice = "paper"
            break;
        case 3:
            computerChoice = "scissors"
            break;
        default:
            computerChoice = "broken"
            break;
      }
    console.log(`CPU chooses ${computerChoice}`)
    return computerChoice
}

function playRound(playerSelection, computerSelection) {
    if((playerSelection == 'rock' && computerSelection == 'rock') || (playerSelection == 'paper' && computerSelection == 'paper') || (playerSelection == 'scissors' && computerSelection == 'scissors')){
        console.log('Tie')
        document.querySelector("#gameresults").innerHTML = "RESULT: TIE"
        scoreTies++
        return 'Tie'
    }
    if((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')){
        console.log('You Win')
        document.querySelector("#gameresults").innerHTML = "RESULT: YOU WIN"
        scorePlayer++
        return 'You Win'
    }
    if((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'rock')){
        console.log('CPU wins')
        document.querySelector("#gameresults").innerHTML = "RESULT: CPU WINS"
        scoreCPU++
        return 'CPU wins'
    }
    else{
        console.log('Broken')
        return 'Broken'
    }
  }

function game(){
    playRound(playerChoice, getComputerChoice());
    console.log(`CPU score: ${scoreCPU}`)
    console.log(`Player score: ${scorePlayer}`)
    updateplayerchoice()
    updatecomputerchoice()
}

function rockbuttonfunction(){
    console.log('rockbuttonfunction clicked')
    playerChoice = 'rock'
    game()
}

function paperbuttonfunction(){
    console.log('paperbuttonfunctionclicked')
    playerChoice = 'paper'
    game()
}

function scissorsbuttonfunction(){
    console.log('scissorsbuttonfunction clicked')
    playerChoice = 'scissors'
    game()
}

function updateplayerchoice(){
    choicetitlescore++
    document.querySelector("#playerchoice").innerHTML = `You have chosen: ${playerChoice}`
    document.querySelector("#choicetitle").innerHTML = `ROUND ${choicetitlescore}`
    document.querySelector("#totalscoreboard").innerHTML = `CPU: ${scoreCPU} Player: ${scorePlayer} Ties: ${scoreTies}`
}

function updatecomputerchoice(){
    document.querySelector("#computerchoice").innerHTML = `The computer chooses: ${computerChoice}`
 }

 function resetfunction(){
    choicetitlescore = 0
    scoreCPU = 0
    scorePlayer = 0
    scoreTies = 0
    document.querySelector("#choicetitle").innerHTML = `ROUND ${choicetitlescore}`
    document.querySelector("#totalscoreboard").innerHTML = `CPU: ${scoreCPU} Player: ${scorePlayer} Ties: ${scoreTies}`
    document.querySelector("#gameresults").innerHTML = ""
    document.querySelector("#playerchoice").innerHTML = ""
    document.querySelector("#computerchoice").innerHTML = ""
 }


choicetitlescore = 0
scoreCPU = 0
scorePlayer = 0
scoreTies = 0


document.querySelector("#rockbutton").addEventListener("click", rockbuttonfunction);
document.querySelector("#paperbutton").addEventListener("click", paperbuttonfunction);
document.querySelector("#scissorsbutton").addEventListener("click", scissorsbuttonfunction);

document.querySelector("#resetbutton").addEventListener("click", resetfunction);