const diceImages = ["./Images/dice1.png", "./Images/dice2.png", "./Images/dice3.png", "./Images/dice4.png", "./Images/dice5.png", "./Images/dice6.png"];
const diceImage = document.getElementById("dice");
const rollButton = document.getElementById("rollButton");
const resetButton = document.getElementById("resetButton");
const player1ScoreElement = document.getElementById("player1Score");
const player2ScoreElement = document.getElementById("player2Score");
const currentPlayerTurn = document.getElementById("currentPlayerTurn");

let currentPlayer = 1;
let player1Score = 0;
let player2Score = 0;

// Function to roll the dice
function rollDice() {
    if (currentPlayer === 1) {
        player1Score += rollAndDisplay();
        player1ScoreElement.textContent = player1Score;
    } else {
        player2Score += rollAndDisplay();
        player2ScoreElement.textContent = player2Score;
    }
    
    // Check if any player has won
    if (player1Score >= 30) {
        announceWinner(1);
    } else if (player2Score >= 30) {
        announceWinner(2);
    } else {
        toggleCurrentPlayer();
    }
}

// Function to roll the dice and display the result
function rollAndDisplay() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    diceImage.src = diceImages[randomNumber - 1];
    rollButton.disabled = true;
    return randomNumber;
}

// Function to toggle the current player
function toggleCurrentPlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    currentPlayerTurn.textContent = `Player- ${currentPlayer} To Play`;
    rollButton.disabled = false;
}

// Function to announce the winner
function announceWinner(player) {
    alert(`Player ${player} wins!`);
    rollButton.disabled = true;
    resetButton.disabled = false;
}

// Function to reset the game
function resetGame() {
    player1Score = 0;
    player2Score = 0;
    player1ScoreElement.textContent = 0;
    player2ScoreElement.textContent = 0;
    currentPlayer = Math.random() < 0.5 ? 1 : 2;
    currentPlayerTurn.textContent = `Player- ${currentPlayer}To Play`;
    rollButton.disabled = false;
    resetButton.disabled = true;
}

// Add event listeners
rollButton.addEventListener("click", rollDice);
resetButton.addEventListener("click", resetGame);

// Initialize the game
resetGame();
