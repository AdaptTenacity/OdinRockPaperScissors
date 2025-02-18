// define array of options
var rps = ["rock", "paper", "scissors"];

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
        console.log("You Win!")
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
    console.log("It was a tie five times in a row!")
}

}

playGame();
















// // define array of options
// var rps = ["rock", "paper", "scissors"];

// //define function grabbing computor's random choice and return result for further use
// const getComputerChoice = () => {
//     return rps[Math.floor(Math.random() * rps.length)].toLowerCase();
// };

// function getHumanChoice() {
//     const humanChoice = prompt("Let's play rock paper scissors!").toLowerCase();
// console.log(humanChoice);

// return humanChoice;
// }
// // to get human choice, a human needs to choose rock, paper, or scissors. So those options have to be avaliable to them. 
// // the options must be selectable. The computer must intrepret the human decision and plug it back into the code for the next thing.




// // Make rounds repeat and functionalize score keeping 
// // Also organizes game into metaphorical "box"

// function playGame () {
//     // Tracking Scores

// var humansScore = 0
// var computerScore = 0

// // The game rounds

// function playRound(humanChoice, computerChoice) {
//     console.log("Human chose:", humanChoice)
//     console.log("Computer chose:", computerChoice)

//         if (humanChoice === computerChoice) {
//         console.log("It is a tie!")

//     } else if (
//         (humanChoice === "rock" && computerChoice === "scissors") ||
//         (humanChoice === "scissors" && computerChoice === "paper") ||
//         (humanChoice === "paper" && computerChoice === "rock")) {
//         console.log("You Win!")
//         humansScore ++;

//     } else {
//         console.log("You lose!")
//         computerScore ++;
//     }
// }

// // Score Keeping

// console.log("Computer score is:", computerScore);
// console.log("Your score is:", humanScore);

// // use for loop to set rounds to occur 5 times.

// for (let i = 0; i < 5; i++) {
//     const humanChoice = getHumanChoice();
//     const computerChoice = getComputerChoice();

//     playRound(humanChoice, computerChoice);
// }
// }

// playGame();

//


// Step 6: Write the logic to play the entire game
// Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.


// Move your playRound function and score variables so that they’re declared inside of the new playGame function

// Play 5 rounds by calling playRound 5 times.
// Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. 
// Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.

// Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
// If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.



// If computer wins, its score increases. if user wins, their score increases.

// if (console.log("You Win!")) {
//     humanScore ++
//     console.log("Your score is:", humanScore)
// } else if (console.log("You Lose!")) {
//     computerScore ++
//     console.log("Computer score is:", computerScore)
// };



// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.