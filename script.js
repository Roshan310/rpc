const choices = ['rock', 'paper', 'scissor'];


function getComputerChoice() {
    const index = Math.floor(Math.random()*choices.length);
    return choices[index];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection === computerSelection) {
        console.log(`You chose ${playerSelection} \nComputer chose: ${computerSelection}`)
        return 'tie';
    }

    else if(playerSelection === 'rock') {
        if(computerSelection === 'paper') {
            console.log(`You chose ${playerSelection} \nComputer chose: ${computerSelection}`)
            return 'computer'
        }
        else{
            console.log(`You chose ${playerSelection} \nComputer chose: ${computerSelection}`)
            return 'player';
        }
    }

    else if(playerSelection === 'paper') {
        if(computerSelection === 'rock') {
            console.log(`You chose ${playerSelection} \nComputer chose: ${computerSelection}`)
            return 'player';
        }

        else {
            console.log(`You chose ${playerSelection} \nComputer chose: ${computerSelection}`)
            return 'computer'
        }
    }

    else if(playerSelection === 'scissor') {
        if(computerSelection === 'rock') {
            console.log(`You chose ${playerSelection} \nComputer chose: ${computerSelection}`)
            return 'computer'
        }

        else {
            console.log(`You chose ${playerSelection} \nComputer chose: ${computerSelection}`)
            return 'player';
        }
    }

    else {
        return 'wrong choice';
    }
}

function game() {
    let totalGame = 0,
        playerWins = 0;
        computerWins = 0;
        ties = 0;

    while(totalGame < 5) { 
        console.log(`Game ${totalGame+1} of 5:`)
        console.log("\n");
        const playerChoice = prompt("Choose: rock, paper or scissor?");
        const computerChoice = getComputerChoice();

        winner = playRound(playerChoice, computerChoice);

        if(winner === 'player') {
            console.log('You won')
            console.log("\n");
            playerWins += 1;
        }

        else if(winner === 'computer') {
            console.log('Computer wins')
            console.log("\n");
            computerWins += 1;
        }

        else if(winner === 'tie') {
            console.log('TIE')
            console.log("\n");
            ties += 1;
        }

        else{
            console.log("WRONG CHOICE!!!")
            console.log("\n");
        }

        totalGame += 1;
    }

    console.log("\nFINAL RESULT\n");

    if(playerWins > computerWins) {
        console.log("YOU WON !!!")
        console.log(`You won: ${playerWins} Computer Won: ${computerWins}`)
    }

    else if(playerWins < computerWins) {
        console.log("YOU LOSE !!!")
        console.log(`You won: ${playerWins} Computer Won: ${computerWins}`)
        console.log(`Tie: ${ties}`)
    }

    else {
        console.log("Tie")
        console.log(`You won: ${playerWins} Computer Won: ${computerWins}`)
        console.log(`Tie: ${ties}`)
    }

}


game();
