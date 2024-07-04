 // Step 2: Function to get a random choice for the Computer

 function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
 }

 // Test the Function
 console.log(getComputerChoice()) // Should log "rock", "paper", or "scissors"


 // Step 3 : Write the logic to get the Human choice

 function getHumanChoice() {
    const choice = prompt("Please enter rock, paper, scissors:").toLowerCase();
    if(['rock', 'paper', 'scissors'].includes(choice)) {
        return choice;
    } else {
        alert("Invalid CHoice. Please Try Again");
        return getHumanChoice();
    }
 }

  // Test the Function
console.log(getHumanChoice())

// Step 4: Declare the Players score vairiables

let humanScore = 0;
let computerScore = 0;

// Step 5: Write the logic to play a single round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase() // Make human choice lowerCase

    if (humanChoice == computerChoice) {
        console.log(`it's a tie! Both chose ${humanChoice}`);
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        console.log(`You win ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose ${computerChoice} Beats ${humanChoice}`);
    }
}
  // Test the Function
  const humanSelection = getHumanChoice()
  const computerSelection = getComputerChoice()
  playRound(humanSelection, computerSelection);

  // Step 6 : Write the logic to play the entire game

  function playGame() {
    // reset scores at the start of each game
    let humanScore = 0;
    let computerScore = 0;

    // Play 5 rounds
    for(let i = 0; i <5; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection);
    }

    // Declare the Winner
    if (humanScore > computerScore) {
        console.log(`Congratulations! You won the game with a score of ${humanScore}`);
    } else if (humanScore < computerScore) {
        console.log(`You lost the Game. The computer win with score ${computerScore}`);
    } else {
        console.log(`The game is tie with a score ${humanScore} vs ${computerScore}`);
    }
  }

  // Start the Game
  playGame();
