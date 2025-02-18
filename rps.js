// define array of options
var rps = ["rock", "paper", "scissors"];

// // playgame funct organizes game into metaphorical "box"

function playGame () {

//define function grabbing computor's random choice and return result for further use
const getComputerChoice = () => {
    return rps[Math.floor(Math.random() * rps.length)].toLowerCase();
};

function getHumanChoice() {
    const humanChoice = prompt("Let's play rock paper scissors!").toLowerCase();

return humanChoice;
}
// to get human choice, a human needs to choose rock, paper, or scissors. So those options have to be avaliable to them. 
//the options must be selectable. The computer must intrepret the human decision and plug it back into the code for the next thing.

// Tracking Scores

var humanScore = 0

var computerScore = 0

// The game rounds

function playRound(humanChoice, computerChoice) {
    console.log("Human chose:", humanChoice)
    console.log("Computer chose:", computerChoice)

        if (humanChoice === computerChoice) {
        console.log("It is a tie!")
        console.log("Computer score is:", computerScore);
        console.log("Your score is:", humanScore);

    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")) {
        console.log("You win!")
        humanScore ++;
        console.log("Computer score is:", computerScore);
        console.log("Your score is:", humanScore);

    } else {
        console.log("You lose!")
        computerScore ++;
        console.log("Computer score is:", computerScore);
        console.log("Your score is:", humanScore);

    }
    
}

// Make rounds repeat and functionalize score keeping 

for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
}

if (humanScore > computerScore) {
    console.log("Congratulations, you win the game!")
} else if (computerScore > humanScore) {
    console.log("You lost the game! Try again next time.")
} else {
    console.log("It was a tie! Wowza! Come on, let's try again.")
}

}

playGame();
