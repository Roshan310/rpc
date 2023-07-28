const choices = ['rock', 'paper', 'scissor'];

let playerPoints = 0,
    computerPoints = 0;

const rock_button = document.getElementById('rock')
const paper_button = document.getElementById('paper');
const scissor_button = document.getElementById('scissor');
const result = document.getElementById('result');
const choice = document.getElementById('choose');
const score = document.getElementById('score');

function getComputerChoice() {
    const index = Math.floor(Math.random()*choices.length);
    return choices[index];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection === computerSelection) {
        choice.innerText = `You chose ${playerSelection}, Computer chose ${computerSelection}`
        return 'tie';
    }

    else if(playerSelection === 'rock') {
        if(computerSelection === 'paper') {
            choice.innerText = `You chose ${playerSelection}, Computer chose ${computerSelection}`;
            computerPoints++;
            return 'computer';
        }
        else{
            choice.innerText = `You chose ${playerSelection}, Computer chose ${computerSelection}`
            playerPoints++;
            return 'player';
        }
    }

    else if(playerSelection === 'paper') {
        if(computerSelection === 'rock') {
            choice.innerText = `You chose ${playerSelection}, Computer chose ${computerSelection}`
            playerPoints++;
            return 'player';
        }

        else {
            choice.innerText = `You chose ${playerSelection}, Computer chose ${computerSelection}`
            computerPoints++;
            return 'computer';
        }
    }

    else if(playerSelection === 'scissor') {
        if(computerSelection === 'rock') {
            choice.innerText = `You chose ${playerSelection}, Computer chose ${computerSelection}`
            computerPoints++;
            return 'computer';
        }

        else {
            choice.innerText = `You chose ${playerSelection}, Computer chose ${computerSelection}`
            playerPoints++;
            return 'player';
        }
    }

    else {
        return 'wrong choice';
    }
}

function checkWinner(winner) {
    if(winner === 'player') {
        result.innerText = "You won";
    }

    else if(winner === 'computer') {
        result.innerText = "Computer Wins"
    }

    else if(winner === 'tie') {
        result.innerText = "TIE"

    }

    else{
        result.innerText = "Wrong choice!"
    }
}

function checkPoints() {
    if (playerPoints >= 5 || computerPoints >= 5) {
        if(playerPoints > computerPoints) {
            result.innerText = `It's over! You won! Your score: ${playerPoints} Computer score: ${computerPoints}`;
        }
        else if(computerPoints > playerPoints) {
            result.innerText = `It's over! You lose! Your score: ${playerPoints} Computer score: ${computerPoints}`;
        }
        else {
            result.innerText = `It's over! And It's a tie! Your score: ${playerPoints} Computer score: ${computerPoints}`;
        }
    playerPoints = 0;
    computerPoints = 0;
    }
}

function updateScore() {
    score.innerText = `Your score: ${playerPoints} Computer score: ${computerPoints}`;
}

function game() {

        rock_button.addEventListener("click", () => {
            const computerChoice = getComputerChoice();
            winner = playRound("rock", computerChoice);
            checkWinner(winner);
            checkPoints();
            updateScore();

        })
        paper_button.addEventListener("click", () => {
            const computerChoice = getComputerChoice();
            winner = playRound("paper", computerChoice);
            checkWinner(winner);
            checkPoints();
            updateScore();

        })
        scissor_button.addEventListener("click", () => {
            const computerChoice = getComputerChoice();
            winner = playRound("scissor", computerChoice);
            checkWinner(winner);
            checkPoints();
            updateScore();
        })
        
}

game();
