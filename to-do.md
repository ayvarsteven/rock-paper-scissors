# Changes to be Made

- [x] **Add Winner Display** - to html when you click the button (below display-selection)
  - add winner variable and return it from playRound() function so that when you click a button the correct winner string will be shown
    ```
    rock beats paper, PLAYER WINS!!!
    ```
- [x] **Add tally** - keep track of who wins 
- [x] **Add tally to Dom** - append the score to the DOM
- [x] **fix repeating computer choice** - when i click the same button, the computer choice variable does not change. For ex:

    Player Choice -> rock
    Computer Choice -> paper

    if i click the rock button again i will always lose. 
- [ ] **add best of 5** - append the score to the DOM. You use the for loop to change refresh the computers choice. So everytime you click a button a new game is played but it adds to the winners score. 
- [ ] **display winner** - *** TIE *** or *** PLAYER WIN *** or *** COMPUTER WIN ***

- [ ] **Refactor Code** - Reduce amount of code within playRound() function and use helper functions instead



```

function tally() {
  if (
    winner === `it's a tie! You both chose rock.` ||
    winner === `It's a tie! You both chose paper.` ||
    winner === `It's a tie! You both chose scissors.`
  ) {
    console.log(`*** TIE ***`);
  } else if (
    winner === `Player Wins! Paper beats rock.` ||
    winner === `Player Wins! Scissors beats paper.` ||
    winner === `Player Wins! Rock beats scissors.`
  ) {
    console.log(`*** PLAYER WIN ***`);
    return playerTally++;
  } else if (
    winner === `Computer Wins! Rock beats scissors.` ||
    winner === `Computer Wins! Paper beats rock.` ||
    winner === `Computer Wins! Scissors beats paper.`
  ) {
    console.log(`*** COMPUTER WIN ***`);
    return computerTally++;
  }
}

```

Fixes repeating computer choice