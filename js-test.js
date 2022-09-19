let numberGenerator = (intRange) => Math.floor(Math.random() * intRange);

let rngSelect = numberGenerator(3);

let computerChoice = undefined;

function computerPlay() {
  if (rngSelect === 0) {
    return computerChoice = 'rock'
  } else if (rngSelect === 1) {
    return computerChoice = 'paper'
  } else if (rngSelect === 2) {
    return computerChoice = 'scissors'
  }
}

const rock = document.querySelector('#rock')

let playerSelection

rock.addEventListener('click', function() {
    return playerSelection = 'rock'
})

paper.addEventListener('click', function() {
    return playerSelection = 'paper'
})

scissors.addEventListener('click', function() {
    return playerSelection = 'scissors'
})

console.log(playerSelection)
console.log(computerChoice)
