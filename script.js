function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    let randomOption = Math.floor(Math.random() * options.length);
    return options[randomOption];
}

function promptPlayer() {
    let input;
    input = prompt('Rock, Paper or Scissors?');

    if (input) {
        input.toLowerCase();
        return input;
    }

    else {
        return 'error';
    }
}

// decides who is the winner

function playRound(playerSelection, computerSelection) {

    // if player wins
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return 'player';
    }

    // if player loses
    else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')) {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return 'computer';
    }

    // if it's a tie
    else if (playerSelection == computerSelection) {
        console.log('It\'s a tie!');
        return 'tie';
    }

    else {
        return ('Error, please use only: rock / paper / scissors');
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    // score keeper

    for (let i = 0; i < 5; i++) {
        let result = playRound(promptPlayer(), computerPlay());

        switch (result) {
            case 'player':
                playerScore++;
                break;
            case 'computer':
                computerScore++;
                break;
            case 'tie':
                playerScore++;
                computerScore++;
                break;
            default: console.log(result);
        }
    }

    console.log(`Final score:
                    Player: ${playerScore}
                    Computer: ${computerScore}
                    Refresh page to play again.`);
}

game();