
//getComputerChoice()

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

//playerSelection()

function playerSelection(n){
    var playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    console.log(playerChoice)
    switch(playerChoice) {
        case "rock":
            playerChoice = "rock"
            break;
        case "paper":
            playerChoice = "paper"
            break;
        case "scissors":
            playerChoice = "scissors"
            break;
        default:
            playerChoice = "broken"
            break;
      }
    console.log(`you have chosen ${playerChoice}`)
    return playerChoice
}

function playerSelectionV2(n){
    console.log("hello world")
}

function playRound(playerSelectionV2, computerSelection) {
    if((playerSelection == 'rock' && computerSelection == 'rock') || (playerSelection == 'paper' && computerSelection == 'paper') || (playerSelection == 'scissors' && computerSelection == 'scissors')){
        console.log('Tie')
        return 'Tie'
    }
    if((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')){
        console.log('You Win')
        scorePlayer++
        return 'You Win'
    }
    if((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'rock')){
        console.log('CPU wins')
        scoreCPU++
        return 'CPU wins'
    }
    else{
        console.log('Broken')
        return 'Broken'
    }
  }

function game(){
    for (let i = 0; i < 5; i++) {
        playRound(playerSelectionV2(), getComputerChoice());
        console.log(`CPU score: ${scoreCPU}`)
        console.log(`Player score: ${scorePlayer}`)
     } 
}

scoreCPU = 0
scorePlayer = 0
game()

document.querySelector("#rockbutton").addEventListener("click", rockbuttonfunction);
document.querySelector("#paperbutton").addEventListener("click", paperbuttonfunction);
document.querySelector("#scissorsbutton").addEventListener("click", scissorsbuttonfunction);

function rockbuttonfunction(){
    console.log('rockbuttonfunction clicked')
}

function paperbuttonfunction(){
    console.log('paperbuttonfunctionclicked')
}

function scissorsbuttonfunction(){
    console.log('scissorsbuttonfunction clicked')
}