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