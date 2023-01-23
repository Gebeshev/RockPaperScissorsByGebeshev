function rockPaperScissors(playerTurn) {
    const rock = 'Rock';
    const paper = 'Paper';
    const scissors = 'Scissors';
    let isValid = true;

    if (playerTurn === 'r' || playerTurn === 'rock') {
        playerTurn = rock;
    } else if (playerTurn === 'p' || playerTurn === 'paper') {
        playerTurn = paper;
    } else if (playerTurn === 's' || playerTurn === 'scissors') {
        playerTurn = scissors;
    } else {
        isValid = false
        console.log('Invalid input! Try again ...');
    }
    if (isValid === true) {
        console.log(`You choose ${playerTurn}`);
    }

    let computerRandomNum = Math.floor(Math.random() * 3) + 1;
    let computerMove = '';

    switch (computerRandomNum) {
        case 1: computerMove = rock; break;
        case 2: computerMove = paper; break;
        case 3: computerMove = scissors; break;
    }
    if (isValid === true) {
        console.log(`The computer chose ${computerMove}.`);
    }

    if ((playerTurn === rock && computerMove === scissors) ||
        (playerTurn === paper && computerMove === rock) ||
        (playerTurn === scissors && computerMove === paper)) {
        console.log('You win!!');
    } else if ((playerTurn === rock && computerMove === paper) ||
        (playerTurn === paper && computerMove === scissors) ||
        (playerTurn === scissors && computerMove === rock)) {
        console.log('You lost!!');
        lostCount++;
    } else if ((playerTurn === rock && computerMove === rock) ||
        (playerTurn === paper && computerMove === paper) ||
        (playerTurn === scissors && computerMove === scissors)) {
        console.log('Draw game!!')
    }

}

rockPaperScissors('s')