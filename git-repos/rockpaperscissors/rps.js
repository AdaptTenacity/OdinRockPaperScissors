// define array of options
var rps = ["rock", "paper", "scissors"];

//define function grabbing computor's random choice
const getComputerChoice = () => {
    return rps[Math.floor(Math.random() * rps.length)];
};

// Log choice to console.
console.log(getComputerChoice());

const getHumanChoice = prompt("Let's play rock paper scissors!");

console.log(getHumanChoice());
// to get human choice, a human needs to choose rock, paper, or scissors. So those options have to be avaliable to them. 
//the options must be selectable. The computer must intrepret the human decision and plug it back into the code for the next thing.

// Tracking Scores

var humansScore = 0
var computerScore = 0

// The game rounds

function playRound(humanChoice, computerChoice) {
    //your codeeeee Yayyy
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
    if (humanSelection == "rock" && computerSelection == "rock") {
    console.log("It is a tie!")
}
 

// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.



// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// Increment the humanScore or computerScore variable based on the round winner.

// Example code:

// function playRound(humanChoice, computerChoice) {
//   // your code here!
// }

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);