// ====================== ~ rng =========================

let numberGenerator = (intRange) => Math.floor(Math.random() * intRange);

let rngSelect = numberGenerator(3);

// ====================== ~ computer-selection =========================

let computerSelection = undefined;

function computerPlay() {
  if (rngSelect === 0) {
    return computerSelection = 'Rock'
  } else if (rngSelect === 1) {
    return computerSelection = 'Paper'
  } else if (rngSelect === 2) {
    return computerSelection = 'Scissors'
  }
}

// ====================== ~ player-selection =========================


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

let playerSelection = undefined

rock.addEventListener('click', function() {
    playerSelection = 'Rock'
    rngSelect = numberGenerator(3);
    computerPlay();
    playRound()

        // --- display-selection ---

        const body = document.querySelector('body')

        const playerSelectionDisplay = document.createElement('p');
        playerSelectionDisplay.textContent = `Player Selection: ${playerSelection}`
        body.appendChild(playerSelectionDisplay);

        const computerSelectionDisplay = document.createElement('p');
        computerSelectionDisplay.textContent = `Computer Selection: ${computerSelection}`
        body.appendChild(computerSelectionDisplay);

        // --- display-winner ---

        const winnerDisplay = document.createElement('p');
        winnerDisplay.textContent = `Winner: ${winner}`
        body.appendChild(winnerDisplay);

        // --- add-to-tally ---

        tally();

        // --- display-score ---
        const score = document.createElement('p');
        score.textContent = `Player Score: ${playerTally} | Computer Score: ${computerTally}`
        body.appendChild(score);
    })

paper.addEventListener('click', function() {
    playerSelection = 'Paper'
    rngSelect = numberGenerator(3);
    computerPlay();
    playRound()

        // --- display-selection ---

        const body = document.querySelector('body')

        const playerSelectionDisplay = document.createElement('p');
        playerSelectionDisplay.textContent = `Player Selection: ${playerSelection}`
        body.appendChild(playerSelectionDisplay);

        const computerSelectionDisplay = document.createElement('p');
        computerSelectionDisplay.textContent = `Computer Selection: ${computerSelection}`
        body.appendChild(computerSelectionDisplay);

        // --- display-winner ---

        const winnerDisplay = document.createElement('p');
        winnerDisplay.textContent = `Winner: ${winner}`
        body.appendChild(winnerDisplay);

        // --- add-to-tally ---

        tally();

        // --- display-score ---
        const score = document.createElement('p');
        score.textContent = `Player Score: ${playerTally} | Computer Score: ${computerTally}`
        body.appendChild(score);
})

scissors.addEventListener('click', function() {
    playerSelection = 'Scissors'
    rngSelect = numberGenerator(3);
    computerPlay();
    playRound()

        // --- display-selection ---

        const body = document.querySelector('body')

        const playerSelectionDisplay = document.createElement('p');
        playerSelectionDisplay.textContent = `Player Selection: ${playerSelection}`
        body.appendChild(playerSelectionDisplay);

        const computerSelectionDisplay = document.createElement('p');
        computerSelectionDisplay.textContent = `Computer Selection: ${computerSelection}`
        body.appendChild(computerSelectionDisplay);
        // --- display-winner ---

        const winnerDisplay = document.createElement('p');
        winnerDisplay.textContent = `Winner: ${winner}`
        body.appendChild(winnerDisplay);

        // --- add-to-tally ---

        tally();

        // --- display-score ---
        const score = document.createElement('p');
        score.textContent = `Player Score: ${playerTally} | Computer Score: ${computerTally}`
        body.appendChild(score);
})

// ====================== ~ play-round =========================

let winner

function playRound(player, computer) {
    if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "rock") {
    return (winner = `it's a tie! You both chose rock.`);
  } else if (computerSelection === "rock" && playerSelection.toLowerCase() === "paper") {
    return (winner = `Player Wins! Paper beats rock.`);
  } else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "scissors") {
    return (winner = `Computer Wins! Rock beats scissors.`);
  } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock") {
    return (winner = `Computer Wins! Paper beats rock.`);
  } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "paper") {
    return (winner = `It's a tie! You both chose paper.`);
  } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "scissors") {
    return (winner = `Player Wins! Scissors beats paper.`);
  } else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "rock") {
    return (winner = `Player Wins! Rock beats scissors.`);
  } else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "paper") {
    return (winner = `Computer Wins! Scissors beats paper.`);
  } else if (
    computerSelection.toLowerCase() === "scissors" &&
    playerSelection.toLowerCase() === "scissors"
  ) {
    return (winner = `It's a tie! You both chose scissors.`);
  } else {
    return `Invalid input. Please choose rock, paper or scissors.`;
  }
}

// ====================== ~ tally =========================

let computerTally = 0;
let playerTally = 0;

function tally() {
   if (
    winner === `Player Wins! Paper beats rock.` ||
    winner === `Player Wins! Scissors beats paper.` ||
    winner === `Player Wins! Rock beats scissors.`
  ) {
    return playerTally++;
  } else if (
    winner === `Computer Wins! Rock beats scissors.` ||
    winner === `Computer Wins! Paper beats rock.` ||
    winner === `Computer Wins! Scissors beats paper.`
  ) {
    return computerTally++;
  }
}

// ====================== ~ title =========================