const options = document.querySelector(".options")
const humanScoreDisplay = document.querySelector(".human-score");
const computerScoreDisplay = document.querySelector(".computer-score")
const resultsDisplay = document.querySelector(".results")

function getComputerChoice() {
    const generateRandomNumber = Math.floor(Math.random() * 9);
    let generatedOption = "";
    switch (generateRandomNumber) {
        case 0:
        case 1:
        case 2:
            generatedOption = "rock";
            break;
        case 3:
        case 4:
        case 5:
            generatedOption = "paper";
            break;
        default:
            generatedOption = "scissor";
            break;
    }

    return generatedOption;
}


function playGame() {

    let humanScore = 0
    let computerScore = 0


    function playRound(humanChoice, computerChoice) {
        switch (true) {
            case humanChoice === "rock" && computerChoice === "paper":
            case humanChoice === "paper" && computerChoice === "scissor":
            case humanChoice === "scissor" && computerChoice === "rock":
            case humanChoice === "Invalid":
                computerScore += 1;
                computerScoreDisplay.textContent = computerScore;
                resultsDisplay.textContent = `You lost! ${computerChoice} beats ${humanChoice}`;
                break;

            case humanChoice === "rock" && computerChoice === "scissor":
            case humanChoice === "paper" && computerChoice === "rock":
            case humanChoice === "scissor" && computerChoice === "paper":
                humanScore += 1;
                humanScoreDisplay.textContent = humanScore;
                resultsDisplay.textContent = `You won! ${humanChoice} beats ${computerChoice}`;
                break;

            default:
                resultsDisplay.textContent = `Draw! You choose ${humanChoice} and computer choose ${computerChoice}`;
                break;
        }
        if (humanScore === 5 || computerScore === 5) {
            const gameResult = humanScore === 5 ? "You won!" : "You lost!" ;
            resultsDisplay.textContent = gameResult;
        }
    }    

    options.addEventListener("click", (e) => {
        let humanSelection = e.target.id;
        let computerSelection = getComputerChoice();
        if (humanScore === 5 || computerScore === 5) {
            [humanScore, computerScore] = [0, 0];
            [humanScoreDisplay.textContent, computerScoreDisplay.textContent] = [humanScore, computerScore];
        }
        playRound(humanSelection, computerSelection);
    })
}
    
playGame()
