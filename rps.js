// define array of options
var rps = ["rock", "paper", "scissors"];

//define function grabbing computor's random choice and return result for further use
const getComputerChoice = () => {
    return rps[Math.floor(Math.random() * rps.length)].toLowerCase();
};

function getHumanChoice() {
    const humanChoice = prompt("Let's play rock paper scissors!").toLowerCase();
console.log(humanChoice);

return humanChoice;
}
// to get human choice, a human needs to choose rock, paper, or scissors. So those options have to be avaliable to them. 
//the options must be selectable. The computer must intrepret the human decision and plug it back into the code for the next thing.

// Tracking Scores

var humansScore = 0
var computerScore = 0

// The game rounds

function playRound(humanChoice, computerChoice) {
    console.log("Human chose: ", humanChoice)
    console.log("Computer chose: ", computerChoice)

        if (humanChoice === computerChoice) {
        console.log("It is a tie!")

    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")) {
        console.log("You Win!")
    } else 
        console.log("You lose!")
    
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);


// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.


// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.

// Increment the humanScore or computerScore variable based on the round winner.

// Example code:

// function playRound(humanChoice, computerChoice) {
//   // your code here!
// }

// const humanChoice = getHumanChoice();
// const computerChoice = getComputerChoice();

// playRound(humanChoice, computerChoice);