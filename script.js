//JavaScript code for rock paper scissors game
console.log("Hello World!");

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
console.log(getComputerChoice())

function getHumanChoice() {
    let choice = prompt("Let's play rock, paper, scissors!\nChoose your option by typing \"rock\", \"paper\" or \"scissors\" in lowercase").toLowerCase()

    return choice
}
console.log(getHumanChoice())