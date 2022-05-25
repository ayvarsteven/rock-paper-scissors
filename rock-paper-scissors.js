
// generate random number
let randomNumber = (max) => Math.floor(Math.random() * max);

// sets scale of rng
let productOfRandomNumber = randomNumber(3);

// computer select rock paper or scissor
function computerPlay() {
        if (productOfRandomNumber === 0) {
        return answer = 'rock'
    } else if (productOfRandomNumber === 1) {
        return answer = 'paper'
    } else if (productOfRandomNumber === 2) {
        return answer = 'scissors'
    }
}

let computerSelection = computerPlay();
// play game of rock paper scissors

// player input (make sure its case insensitive)

let playerSelection = prompt(`rock, paper, or scissors?`).toLowerCase();

// console display answers

console.log(`Player Selection: ${playerSelection}`);
console.log(`Computer Selection: ${computerSelection}`);

// compare player input with computer answer 
function decideWinner () {
    if (computerSelection === 'rock' && playerSelection === 'rock') {
    console.log(`it's a tie!!!`);
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        console.log(`Computer Wins!!!`);
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        console.log(`Player Wins!!!`);
    } else if (computerSelection === 'paper' && playerSelection === 'paper') {
        console.log(`It's a tie!!!`);
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        console.log(`Computer Wins!!!`);
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        console.log(`Player Wins!!!`)
    } else if (computerSelection === 'scissors' && playerSelection === 'scissors') {
        console.log(`It's a tie!!!`)
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        console.log('Computer Wins!!!') 
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        console.log(`Player Wins!!!`)
    } else {
        console.log(`Invalid player input.`)
    } 
    
}

decideWinner();

// switch (playerSelection == true) {
//     case computerSelection === 'rock' && playerSelection === 'rock':
//         console.log(`It's a tie!`)
//         break;
//     case computerSelection === 'rock' && playerSelection === 'scissors':
//         console.log(`Computer Wins!`)
//         break;
//     case computerSelection === 'rock' && playerSelection === 'paper':
//         console.log(`Player Wins!`)
// }


// print (you win or lose)




