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

function getHumanChoice() {
    getHumanOption = prompt("Enter your option: ");
    return getHumanOption;
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    switch (true) {
        case humanChoice === "rock" && computerChoice === "paper":
        case humanChoice === "paper" && computerChoice === "scissor":
        case humanChoice === "scissor" && computerChoice === "rock":
            computerScore += 1;
            console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
            break;

        case humanChoice === "rock" && computerChoice === "scissor":
        case humanChoice === "paper" && computerChoice === "rock":
        case humanChoice === "scissor" && computerChoice === "paper":
            humanScore += 1;
            console.log(`You won! ${humanChoice} beats ${computerChoice}`);
            break;
        
        default:
            console.log(`Draw! You choose ${humanChoice} and computer choose ${computerChoice}`);
            break;
    }
}


function playGame(numberOfRounds) {
    let rounds = 0;
    while (rounds < numberOfRounds) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    rounds++;
    }
    
    const gameResult = humanScore > computerScore ? "You won!" :
    humanScore < computerScore ? "You lost!" : 
    "Draw!";

    console.log("Game result: " + "\n" + gameResult);
    
}

playGame(5)