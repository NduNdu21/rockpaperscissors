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