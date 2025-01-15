//JavaScript code for rock paper scissors game

function getComputerChoice() {
    let play = Math.floor(Math.random() * 3);
    if (play == 0) {
        return "rock";
    } else if (play == 1) {
        return "paper";
    } else if (play == 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Let's play rock, paper, scissors!\nChoose your option by typing \"rock\", \"paper\" or \"scissors\" in lowercase\nType \"quit\" if you're done playing").toLowerCase()

    return choice
}

let humanScore = 0
let computerScore = 0

const humanChoice = getHumanChoice()
const computerChoice = getComputerChoice()

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                return "Draw, try again!"
            } else if (computerChoice === "paper") {
                computerChoice++
                return "You lose! Paper beats Rock"
            } else if (computerChoice === "scissors") {
                humanScore++
                return "You win! Rock beats Scissors"
            }
        break;
        case "paper":
            if (computerChoice === "rock") {
                humanScore++
                return "You win! Paper beats Rock"
            } else if (computerChoice === "paper") {
                return "Draw, try again!"
            } else if (computerChoice === "scissors") {
                computerScore++
                return "You lose! Scissors beats Paper"
            }
        break;
        case "scissors":
            if (computerChoice === "rock") {
                computerScore++
                return "You lose! Rock beats Scissors"
            } else if (computerChoice === "paper") {
                humanScore++
                return "You win! Scissors beats Paper"
            } else if (computerChoice === "scissors") {
                return "Draw, try again!"
            }
        break;
    }
}

function playGame() {

}
