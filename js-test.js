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

}

playRound(playerSelection) 

// ====================== title =========================