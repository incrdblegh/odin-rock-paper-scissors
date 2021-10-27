function computerPlay() {
    switch (Math.floor(Math.random() * 3)) {
        case 0: return "Rock";
        break;
        case 1: return "Paper";
        break;
        case 2: return "Scissors";
        break;
        default: "Something went wrong";
    }
}

function playRound(playerSelection, computerSelection) {
    const opt1 = "rock";
    const opt2 = "paper";
    const opt3 = "scissors"

    pS = playerSelection.toLowerCase();
    cS = computerSelection.toLowerCase();

    if (pS == cS) {
        return 3;
    } else if (pS == opt1 && cS == opt3 ||
    pS == opt2 && cS == opt1 ||
    pS == opt3 && cS == opt2) {
        return 1;
    } else if (pS == opt1 && cS == opt2 ||
    pS == opt2 && cS == opt3 ||
    pS == opt3 && cS == opt1) {
        return 2;
    } else {
        return 4;
    }
}

function game() {
    alert("Welcome to 'Rock-Paper-Scissors' game!");
    let playerPoints = 0;
    let computerPoints = 0

    for (let i = 1; i < 6; i++) {
        const playerSelection = prompt(`Round ${i} starts! Rock, paper or scissors?`);
        const computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection);

        switch (roundResult) {
            case 1: {
                alert(`You win the round! ${pS.charAt(0).toUpperCase() + pS.slice(1)} beat ${cS}!`);
                playerPoints++;
            }
            break;
            case 2: {
                alert(`You lose the round! ${cS.charAt(0).toUpperCase() + cS.slice(1)} beat ${pS}!`);
                computerPoints++;
            }
            break;
            case 3: alert("Draw!");
            break;
            case 4: {
                alert("Wrong input! Replay the round!");
                i--;
            }
            break;
        }
    }
    if (playerPoints > computerPoints) {
        alert(`You win the game (${playerPoints}:${computerPoints})! Congratulations!`);
    } else if (playerPoints < computerPoints) {
        alert(`You lose the game (${playerPoints}:${computerPoints})! Better luck next time!`);
    } else if (playerPoints == computerPoints) {
        alert(`Draw (${playerPoints}:${computerPoints})! Thank you for the fun game!`);
    } else {
        alert("Something went wrong :(")
    }
}

game();