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

function playGame() {
    let humanScore = 0
    let computerScore = 0
    
    const humanChoice = getHumanChoice()
    const computerChoice = getComputerChoice()
    
    function playRound(humanCho, computerCho) {
        switch (humanCho) {
            case "rock":
                if (computerCho === "rock") {
                    return "Draw, try again!"
                } else if (computerCho === "paper") {
                    computerScore++
                    return "You lose! Paper beats Rock"
                } else if (computerCho === "scissors") {
                    humanScore++
                    return "You win! Rock beats Scissors"
                }
            break;
            case "paper":
                if (computerCho === "rock") {
                    humanScore++
                    return "You win! Paper beats Rock"
                } else if (computerCho === "paper") {
                    return "Draw, try again!"
                } else if (computerCho === "scissors") {
                    computerScore++
                    return "You lose! Scissors beats Paper"
                }
            break;
            case "scissors":
                if (computerCho === "rock") {
                    computerScore++
                    return "You lose! Rock beats Scissors"
                } else if (computerCho === "paper") {
                    humanScore++
                    return "You win! Scissors beats Paper"
                } else if (computerCho === "scissors") {
                    return "Draw, try again!"
                }
            break;
        }
    }

    for (let i = 1; i <= 5; i++) {
        playRound(humanChoice, computerChoice)
    }

    return "You won " + humanScore + " times"
}
