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
    };
};

// Human choice entered via prompt, converted to lowercase
function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?");

    return humanChoice.toLowerCase();
};

function reportScore(roundsPlayed, humanScore, computerScore) {
    let score = document.querySelector("#score");

    score.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore == 5) {
        score.textContent = `You win by a score of ${humanScore} to ${computerScore}!`;
    } else if (computerScore == 5) {
        score.textContent = `You lose by a score of ${computerScore} to ${humanScore}.`;
    };
};

// Initialize scores. playRound() is declared here and contains the game logic, updates scores.
function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    let roundsPlayed = 0;
    let roundResult = document.querySelector("#result");

    reportScore(roundsPlayed, humanScore, computerScore);

    function playRound(humanSelection, computerSelection) {
        roundsPlayed++;

        if (humanSelection == "rock" && computerSelection == "paper") {
            let round = document.createElement("li");

            round.textContent = `Round ${roundsPlayed}: You chose rock. Computer chose paper. You lose this round! Paper beats rock.`;
            roundResult.appendChild(round);
            computerScore++;
        } else if (humanSelection == "rock" && computerSelection == "scissors") {
            let round = document.createElement("li");

            round.textContent = `Round ${roundsPlayed}: You chose rock. Computer chose scissors. You win this round! Rock beats scissors.`;
            roundResult.appendChild(round);
            humanScore++;
        } else if (humanSelection == "rock" && computerSelection == "rock") {
            let round = document.createElement("li");

            round.textContent = `Round ${roundsPlayed}: You chose rock. Computer chose rock. It's a tie!`;
            roundResult.appendChild(round);
        } else if (humanSelection == "paper" && computerSelection == "rock") {
            let round = document.createElement("li");

            round.textContent = `Round ${roundsPlayed}: You chose paper. Computer chose rock. You win this round! Paper beats rock.`;
            roundResult.appendChild(round);
            humanScore++;
        } else if (humanSelection == "paper" && computerSelection == "scissors") {
            let round = document.createElement("li");

            round.textContent = `Round ${roundsPlayed}: You chose paper. Computer chose scissors. You lose this round! Scissors beats paper.`;
            roundResult.appendChild(round);
            computerScore++;
        } else if (humanSelection == "paper" && computerSelection == "paper") {
            let round = document.createElement("li");

            round.textContent = `Round ${roundsPlayed}: You chose paper. Computer chose paper. It's a tie!`;
            roundResult.appendChild(round);
        } else if (humanSelection == "scissors" && computerSelection == "rock") {
            let round = document.createElement("li");

            round.textContent = `Round ${roundsPlayed}: You chose scissors. Computer chose rock. You lose this round! Rock beats scissors.`;
            roundResult.appendChild(round);
            computerScore++;
        } else if (humanSelection == "scissors" && computerSelection == "paper") {
            let round = document.createElement("li");

            round.textContent = `Round ${roundsPlayed}: You chose scissors. Computer chose paper. You win this round! Scissors beats paper.`;
            roundResult.appendChild(round);
            humanScore++;
        } else if (humanSelection == "scissors" && computerSelection == "scissors") {
            let round = document.createElement("li");

            round.textContent = `Round ${roundsPlayed}: You chose scissors. Computer chose scissors. It's a tie!`;
            roundResult.appendChild(round);
        };

        reportScore(roundsPlayed, humanScore, computerScore);
    };

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
    
};

playGame();