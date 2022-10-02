// ====================== rng =========================

let numberGenerator = (intRange) => Math.floor(Math.random() * intRange);

let rngSelect = numberGenerator(3);

// ====================== computer-selection =========================

let computerSelection = undefined;

function computerPlay() {
  if (rngSelect === 0) {
    return computerSelection = 'rock'
  } else if (rngSelect === 1) {
    return computerSelection = 'paper'
  } else if (rngSelect === 2) {
    return computerSelection = 'scissors'
  }
}

computerPlay();

// ====================== player-selection =========================


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

let playerSelection = undefined

rock.addEventListener('click', function() {
    playerSelection = 'rock'
    console.log(playerSelection)
})
paper.addEventListener('click', function() {
    playerSelection = 'paper'
    console.log(playerSelection)
})
scissors.addEventListener('click', function() {
    playerSelection = 'scissors'
    console.log(playerSelection)
})

// ====================== plays-round =========================

function playRound(player, computer) {
    if (computerSelection === "rock" && playerSelection === "rock") {
    console.log(`it's a tie! You both chose rock.`);
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    console.log(`Player Wins! Paper beats rock.`);
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    console.log(`Computer Wins! Rock beats scissors.`);
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    console.log(`Computer Wins! Paper beats rock.`);
  } else if (computerSelection === "paper" && playerSelection === "paper") {
    console.log(`It's a tie! You both chose paper.`);
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    console.log(`Player Wins! Scissors beats paper.`);
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    console.log(`Player Wins! Rock beats scissors.`);
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    console.log(`Computer Wins! Scissors beats paper.`);
  } else if (
    computerSelection === "scissors" &&
    playerSelection === "scissors"
  ) {
    console.log(`It's a tie! You both chose scissors.`);
  } else {
    return `Invalid input. Please choose rock, paper or scissors.`;
  }
}

playRound(playerSelection, computerSelection) 

// ====================== title =========================