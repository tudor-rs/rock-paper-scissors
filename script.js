const display = document.querySelector('#display');
const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const messageBox = document.querySelector('#message-box');
const computerDisplay = document.querySelector('#computer-display');

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

btnRock.addEventListener('click', () => {
    playRound('rock', computerPlay());
});

btnPaper.addEventListener('click', () => {
    playRound('paper', computerPlay());
});

btnScissors.addEventListener('click', () => {
    playRound('scissors', computerPlay());
});

function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    let randomOption = Math.floor(Math.random() * options.length);
    return options[randomOption];
}

function playRound(playerSelection, computerSelection) {

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
        computerDisplay.textContent = computerSelection;
        messageBox.textContent = 'You win the round!';
        setScore('player');
    }

    else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')) {
        computerDisplay.textContent = computerSelection;
        messageBox.textContent = 'Computer wins the round!';
        setScore('computer');
    }

    else if (playerSelection == computerSelection) {
        computerDisplay.textContent = computerSelection;
        messageBox.textContent = 'It\'s a tie!';
        setScore('tie');
    }

    else {
        setScore('error at playRound()');
    }
}

function setScore(input) {

    roundsPlayed++;

    if (input == 'player') {
        playerScore++;
    }

    else if (input == 'computer') {
        computerScore++;
    }

    else if (input == 'tie') {
        console.log('It\'s a tie!');
    }

    else {
        display.textContent = `${input}`; // displays error type
    }

    if (roundsPlayed >= 5) {

        if (playerScore > computerScore) {
            display.innerHTML = 'You Win!';
            messageBox.textContent = '';
        }

        else if (playerScore < computerScore) {
            display.textContent = 'You Lose!';
            messageBox.textContent = '';
        }

        else if (playerScore == computerScore) {
            display.textContent = 'Tie game!';
            messageBox.textContent = '';
        }

        roundsPlayed = 0;
        playerScore = 0;
        computerScore = 0;
    }

    else if (roundsPlayed < 5) {

        display.textContent = `(Player) ${playerScore} - ${computerScore} (Computer)`;
    }

    else {
        display.textContent = `error at setScore()`;
    }
}