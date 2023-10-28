console.log('Welcome to a game of Rock, Paper, Scissors!')

const playChoice = ['rock','paper', 'scissors']

function getComputerChoice() {
    return playChoice[Math.floor(Math.random() * playChoice.length)]
}

const playerSelection = prompt('Do you want to play rock, paper or scissors?')
const computerSelection = getComputerChoice()

console.log('Human plays: ' + playerSelection)

console.log('Computer plays: ' + computerSelection)

function playRound(playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection === computerSelection) return 0
    else if (playerSelection == 'rock' && computerSelection == 'scissors' ||
            playerSelection == 'paper' && computerSelection == 'rock' ||
            playerSelection == 'scissors' && computerSelection == 'paper') return 1
    else return 2
}

switch (playRound(playerSelection,computerSelection)) {
    case 0:
        console.log("It's a draw!")
        break;
    case 1:
        console.log("Human supremacy!! " + playerSelection + " beats " + computerSelection)
        break;
    case 2:
        console.log("Computer supremacy!! " + computerSelection + " beats " + playerSelection)
        break;
    default:
        console.log("I still don't know...")
}
