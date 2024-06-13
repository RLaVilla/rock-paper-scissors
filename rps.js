// Create a function that returns rock, paper or scissors randomly.
// Create a prompt that allows uer to enter rock, paper, or scissors to play the game.
// Create a variables that will keep score of each round.
// Create a function that takes the winners of each round, increments the winners score and logs a winner announcement.
// Create a function that starts the game.


    let humanScore = 0;
    let computerScore = 0;
    
    
    function getComputerChoice() {
        let cpChoice = (Math.floor(Math.random() * 3));

        if (cpChoice === 0)
            return "rock"; 
        else if (cpChoice === 1)
            return "paper";
        else 
            return "scissors";
    }
    
    function getHumanChoice() {
        let humanChoice = prompt("Rock, Paper, or Scissors?");
        humanChoice = humanChoice.toLowerCase();
        return humanChoice;
    }
    
        function playRound (humanChoice, computerChoice) {
    

        if (humanChoice === "rock" && computerChoice === "scissors") {   
            humanScore += 1       
            console.log("You won this round!");
        }
        else if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore += 1
            console.log("You lost this round!");
        }
        else if (humanChoice === "rock" && computerChoice === "rock")
            console.log("Tie!");
        else if (humanChoice === "paper" && computerChoice === "scissors"){
            computerScore += 1
            console.log("You lost this round!");
        }
        else if (humanChoice === "paper" && computerChoice === "paper") 
            console.log("Tie!");
        else if (humanChoice === "paper" && computerChoice === "rock") { 
            humanScore += 1
            console.log("You won this round!");
        }
        else if (humanChoice === "scissors" && computerChoice === "scissors")
            console.log("Tie.")
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore += 1
            console.log("You won this round!");
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") { 
            computerScore += 1
            console.log("You lost this round!");
        }
    }
 
    function playGame() {

        for (let i = 1; i <= 5; i++){
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            console.log("Round " + i);
            console.log("You picked " + humanSelection + ".")
            console.log("The computer picked " + computerSelection + ".")
            playRound(humanSelection, computerSelection)
        }
        if (humanScore > computerScore) {
            return "You won!"
        }
        else if (computerScore > humanScore) {
            return "The computer won! Play again."
        }
        else 
            return "The score was tied. No winner."
            
       
    }
    

    console.log(playGame())
