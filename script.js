// Function to get a random choice for the computer
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Declare the players' score variables
let humanScore = 0;
let computerScore = 0;

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    const resultDiv = document.getElementById('result');
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        resultDiv.textContent = `It's a tie! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    updateScore();

    if (humanScore === 5 || computerScore === 5) {
        declareWinner();
    }
}

// Function to update the score display
function updateScore() {
    const scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `Player: ${humanScore}, Computer: ${computerScore}`;
}

// Function to declare the winner
function declareWinner() {
    const resultDiv = document.getElementById('result');
    if (humanScore > computerScore) {
        resultDiv.textContent = `Congratulations! You won the game with a score of ${humanScore}.`;
    } else {
        resultDiv.textContent = `You lost the game. The computer won with a score of ${computerScore}.`;
    }

    // Disable buttons after game ends
    toggleButtons(true);

    // Show reset button
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Play Again';
    resetButton.id = 'resetButton'; // Add an ID to the reset button
    resetButton.addEventListener('click', resetGame);
    document.body.appendChild(resetButton);
}

// Function to toggle button state
function toggleButtons(disabled) {
    document.getElementById('rock').disabled = disabled;
    document.getElementById('paper').disabled = disabled;
    document.getElementById('scissors').disabled = disabled;
}

// Function to reset the game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    updateScore();
    document.getElementById('result').textContent = '';

    // Enable buttons
    toggleButtons(false);

    // Remove reset button
    const resetButton = document.getElementById('resetButton'); // Select by ID to ensure the correct button is removed
    if (resetButton) {
        document.body.removeChild(resetButton);
    }
}

// Event listeners for buttons
document.getElementById('rock').addEventListener('click', () => playRound('rock', getComputerChoice()));
document.getElementById('paper').addEventListener('click', () => playRound('paper', getComputerChoice()));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors', getComputerChoice()));

// Initial call to enable buttons
toggleButtons(false);
