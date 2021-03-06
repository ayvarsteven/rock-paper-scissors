// rng (sets rng from 0-2)

let numberGenerator = (intRange) => Math.floor(Math.random() * intRange)

let rngSelect = numberGenerator(3);

// selects rock paper or scissors based off of # selected

let computerChoice = undefined

function computerPlay() {
    if (rngSelect === 0) {
        let computerChoice1 = 'rock'
        return computerChoice = computerChoice1
    } else if (rngSelect === 1) {
        let computerChoice1 = 'paper'
        return computerChoice = computerChoice1
    } else if (rngSelect === 2) {
        let computerChoice1 = 'scissors'
        return computerChoice = computerChoice1 
    }
} 

// player selection

let playerChoice = undefined

function playerPlay() {
    let playerChoice1 = prompt(`Select rock, paper or scissors`).toLowerCase();
    return playerChoice = playerChoice1
}


// function that plays a round

function playRound(computerSelection, playerSelection) {
    if (computerSelection === 'rock' && playerSelection === 'rock') {
        return winner = `it's a tie! You both chose rock.`
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        return winner = `Player Wins! Paper beats rock.`
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        return winner = `Computer Wins! Rock beats scissors.`
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        return winner = `Computer Wins! Paper beats rock.`
    } else if (computerSelection === 'paper' && playerSelection === 'paper') {
        return winner = `It's a tie! You both chose paper.`
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        return winner = `Player Wins! Scissors beats paper.`
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        return winner = `Player Wins! Rock beats scissors.`
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        return winner = `Computer Wins! Scissors beats paper.`
    } else if (computerSelection === 'scissors' && playerSelection === 'scissors') {
        return winner = `It's a tie! You both chose scissors.`
    } else {
        return `Invalid input. Please choose rock, paper or scissors.`
    }
}

let computerTally = 0;
let playerTally = 0;

function winnerDisplay () {
    if (winner === `it's a tie! You both chose rock.` || winner === `It's a tie! You both chose paper.` || winner === `It's a tie! You both chose scissors.`) {
        console.log(`*** TIE ***`)
    } else if (winner === `Player Wins! Paper beats rock.` || winner === `Player Wins! Scissors beats paper.` || winner === `Player Wins! Rock beats scissors.`) {
        console.log(`*** PLAYER WIN ***`)
        return playerTally++;
    } else if (winner === `Computer Wins! Rock beats scissors.` || winner === `Computer Wins! Paper beats rock.` || winner === `Computer Wins! Scissors beats paper.`) {
        console.log(`*** COMPUTER WIN ***`)
        return computerTally++;
    }
}

function displayScore() {
    console.log(`Player Score:${playerTally} | Computer Score:${computerTally}`)
}

function displayChoices() {
    console.log(computerPlay(), playerPlay());
}


function game() {
    for (let i = 0; i < 5; i++) {
       playRound(computerPlay(), playerPlay());
       console.log(`Player Choice: ${playerChoice}`)
       console.log(`Computer Choice: ${computerChoice}`)
       winnerDisplay();
       console.log(`-----------------------------------`)
       displayScore();
       console.log(`-----------------------------------`)
       console.log(` `)
    }
}

function displayWinner () {
    if (playerTally > computerTally) {
        console.log(`PLAYER WINS!!!`)
    } else if (computerTally > playerTally) {
        console.log(`COMPUTER WINS!!!`)
    } else if (playerTally === computerTally) {
        console.log(`IT'S A TIE!!!`)
    }
}

game();
displayWinner();