console.log('Welcome to a game of Rock, Paper, Scissors!')

let playerScore = 0
let computerScore = 0

const playChoice = ['rock','paper', 'scissors']

function getComputerChoice() {
    return playChoice[Math.floor(Math.random() * playChoice.length)]
}


function playRound(playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection === computerSelection){
        playerScore++
        computerScore++
        return "It's a tie! Both chose " + playerSelection  
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors' ||
        playerSelection == 'paper' && computerSelection == 'rock' ||
        playerSelection == 'scissors' && computerSelection == 'paper'){
        playerScore++
        return 'Humankind wins! ' + playerSelection + ' beats ' + computerSelection
        }
    else{
        computerScore++
        return 'Machine wins! ' + computerSelection + ' beats ' + playerSelection
    }
}

function game(){
    for (i=1; i < 6; i++){
        console.log('Round ' + i + ':')
        const playerSelection = prompt('Rock, paper or scissors?')
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection,computerSelection))
        console.log('The score is: Humans - ' + playerScore + ' | Machines - ' + computerScore)
    }
    if (playerScore > computerScore) return "\nMankind won the game! At least for now..."
    else if (computerScore > playerScore) return "\nThe machines have won! Say hello to your new masters..."
    else return "How the hell did this happened?! Refresh the page for a new game."
}

console.log(game())