// ====================== rng =========================

let numberGenerator = (intRange) => Math.floor(Math.random() * intRange);

let rngSelect = numberGenerator(3);

// ====================== computer-selection =========================

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

// ====================== player-selection =========================


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

let playerSelection = undefined

rock.addEventListener('click', function() {
    playerSelection = 'Rock'
    computerPlay();
    console.log(`Player Selection: ${playerSelection}`)
    console.log(`Computer Selection: ${computerSelection}`)
    playRound()

    // ====================== display-selection =========================

    const body = document.querySelector('body')

    const playerSelectionDisplay = document.createElement('p');
    playerSelectionDisplay.textContent = `Player Selection: ${playerSelection}`
    body.appendChild(playerSelectionDisplay);

    const computerSelectionDisplay = document.createElement('p');
    computerSelectionDisplay.textContent = `Computer Selection: ${computerSelection}`
    body.appendChild(computerSelectionDisplay);
    })

paper.addEventListener('click', function() {
    playerSelection = 'Paper'
    computerPlay();
    console.log(`Player Selection: ${playerSelection}`)
    console.log(`Computer Selection: ${computerSelection}`)
    playRound()

    // ====================== display-selection =========================

    const body = document.querySelector('body')

    const playerSelectionDisplay = document.createElement('p');
    playerSelectionDisplay.textContent = `Player Selection: ${playerSelection}`
    body.appendChild(playerSelectionDisplay);

    const computerSelectionDisplay = document.createElement('p');
    computerSelectionDisplay.textContent = `Computer Selection: ${computerSelection}`
    body.appendChild(computerSelectionDisplay);
})

scissors.addEventListener('click', function() {
    playerSelection = 'Scissors'
    computerPlay();
    console.log(`Player Selection: ${playerSelection}`)
    console.log(`Computer Selection: ${computerSelection}`)
    playRound()

    // ====================== display-selection =========================

    const body = document.querySelector('body')

    const playerSelectionDisplay = document.createElement('p');
    playerSelectionDisplay.textContent = `Player Selection: ${playerSelection}`
    body.appendChild(playerSelectionDisplay);

    const computerSelectionDisplay = document.createElement('p');
    computerSelectionDisplay.textContent = `Computer Selection: ${computerSelection}`
    body.appendChild(computerSelectionDisplay);
})

// ====================== plays-round =========================

function playRound(player, computer) {
    if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "rock") {
    console.log(`it's a tie! You both chose rock.`);
  } else if (computerSelection === "rock" && playerSelection.toLowerCase() === "paper") {
    console.log(`Player Wins! Paper beats rock.`);
  } else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "scissors") {
    console.log(`Computer Wins! Rock beats scissors.`);
  } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock") {
    console.log(`Computer Wins! Paper beats rock.`);
  } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "paper") {
    console.log(`It's a tie! You both chose paper.`);
  } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "scissors") {
    console.log(`Player Wins! Scissors beats paper.`);
  } else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "rock") {
    console.log(`Player Wins! Rock beats scissors.`);
  } else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "paper") {
    console.log(`Computer Wins! Scissors beats paper.`);
  } else if (
    computerSelection.toLowerCase() === "scissors" &&
    playerSelection.toLowerCase() === "scissors"
  ) {
    console.log(`It's a tie! You both chose scissors.`);
  } else {
    return `Invalid input. Please choose rock, paper or scissors.`;
  }
}



// ====================== title =========================