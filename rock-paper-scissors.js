// Rock, paper, scissors!
// Results and messages are found in the Dev Tools Console.
// User is asked to choose rock, paper, or scissors via prompt. Computer choice randomly chosen.
// Rock beats scissors. Scissors beats paper. Paper beats rock.
// Five rounds are played.


// Computer choice randomly selected via Math.random()
function getComputerChoice() {
    let computerChoice = Math.random() * 100;

    if (computerChoice >= 0 && computerChoice < 34) {
        return "rock";
    } else if (computerChoice >= 34 && computerChoice < 67) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Human choice entered via prompt, converted to lowercase
function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?");

    return humanChoice.toLowerCase();
}

// Initialize scores. playRound() is declared here and contains the game logic, updates scores.
// For loop handles computer and player selections, prints results of each round to the console.
function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    function playRound(humanSelection, computerSelection) {
        if (humanSelection == "rock" && computerSelection == "paper") {
            console.log("You lose! Paper beats rock.");
            computerScore++;
        } else if (humanSelection == "rock" && computerSelection == "scissors") {
            console.log("You win! Rock beats scissors!");
            humanScore++;
        } else if (humanSelection == "rock" && computerSelection == "rock") {
            console.log("It's a tie!");
        } else if (humanSelection == "paper" && computerSelection == "rock") {
            console.log("You win! Paper beats rock!");
            humanScore++;
        } else if (humanSelection == "paper" && computerSelection == "scissors") {
            console.log("You lose! Scissors beats paper.");
            computerScore++;
        } else if (humanSelection == "paper" && computerSelection == "paper") {
            console.log("It's a tie!");
        } else if (humanSelection == "scissors" && computerSelection == "rock") {
            console.log("You lose! Rock beats scissors.");
            computerScore++;
        } else if (humanSelection == "scissors" && computerSelection == "paper") {
            console.log("You win! Scissors beats paper!");
            humanScore++;
        } else if (humanSelection == "scissors" && computerSelection == "scissors") {
            console.log("It's a tie!")
        }
    }

    // Five round game
    //for (let n = 1; n <= 5; n++) {
    //    let humanSelection = getHumanChoice();
    //    let computerSelection = getComputerChoice();

    //    console.log(`Round ${n}:`)
    //    console.log(`Computer chose ${computerSelection}.`)
    //    console.log(`You chose ${humanSelection}.`)

    //    playRound(humanSelection, computerSelection);
    //}

    // Created a buttons div with the three buttons inside. Event listener on the div instead of
    // on each button. Figure out which button was clicked, use switch statement to make the call
    // to PlayRound.
    const buttons = document.querySelector("#buttons");

    buttons.addEventListener("click", (e) => {
        let target = e.target;

        switch(target.id) {
            case "rock":
                playRound("rock", getComputerChoice());
                break;
            
            case "paper":
                playRound("paper", getComputerChoice());
                break;

            case "scissors":
                playRound("scissors", getComputerChoice());
                break;
        }
    });

    // Report the results to the console
    if (humanScore > computerScore) {
        console.log(`You win by a score of ${humanScore} to ${computerScore}!`);
    } else if (humanScore < computerScore) {
        console.log(`You lose by a score of ${computerScore} to ${humanScore}.`);
    } else {
        console.log(`It's a tie! The final score is ${humanScore} to ${computerScore}.`)
    }
}

playGame();