// Create a function that returns rock, paper or scissors randomly.
// Create a prompt that allows uer to enter rock, paper, or scissors to play the game.
// Create a variables that will keep score of each round.
// Create a function that takes the winners of each round, increments the winners score and logs a winner announcement.
// Create a function that starts the game.


    let humanScore = 0;
    let computerScore = 0;
    let roundCount = 0;
    const maxRounds = 5;
    
    
    function getComputerChoice() {
        let cpChoice = (Math.floor(Math.random() * 3));

        if (cpChoice === 0)
            return "rock"; 
        else if (cpChoice === 1)
            return "paper";
        else 
            return "scissors";
    }
    
    function startGame () {
        humanScore = 0;
        computerScore = 0;
        roundCount = 0;
        enableButtons();
        const logDiv = document.getElementById("log");
        logDiv.textContent = "";
    }


    const playbutton = document.getElementById("playbutton");
            playbutton.addEventListener("click", () => {
                logMessage("New game has begun. Select Rock, Paper, or Scissors to begin.")
                startGame();
            });
            
    const rbutton = document.getElementById("rbutton");
    const pbutton = document.getElementById("pbutton");
    const sbutton = document.getElementById("sbutton");
    const btncontainer = document.getElementsByClassName("btncontainer");
        
    //     for (let i = 0; i < btncontainer.length; i++) {
    //     btncontainer[i].addEventListener("click", () => {
    //         logMessage("Round " + roundCount)
    //     });
    // }

        rbutton.addEventListener("click", () => {
            playRound("rock", getComputerChoice())
        });
        pbutton.addEventListener("click", () => {
            playRound("paper", getComputerChoice()) 
        });
        sbutton.addEventListener("click", () => {
            playRound("scissors", getComputerChoice()) 
        });


    function logMessage(message) {
        const logDiv = document.getElementById("log");
        const newMessage = document.createElement("p");
        newMessage.textContent = message;
        logDiv.appendChild(newMessage);
        }
    
    
        function playRound (humanChoice, computerChoice) {
            roundCount++;
            logMessage("Round " + roundCount + ":");

        if (humanChoice === "rock" && computerChoice === "scissors") {   
            humanScore += 1  
            logMessage("You chose Rock. Computer chose Scissors. You won this round!");  
        }

        else if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore += 1
            logMessage("You chose Rock. Computer chose Paper. You lost this round!");
        }

        else if (humanChoice === "rock" && computerChoice === "rock") {
            logMessage("Both players chose Rock. Tie!");
        }

        else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore += 1
            logMessage("You chose Paper. Computer chose Scissors. You lost this round!");
        }

        else if (humanChoice === "paper" && computerChoice === "paper") {
            logMessage("Both players chose Paper. Tie!");
        }

        else if (humanChoice === "paper" && computerChoice === "rock") { 
            humanScore += 1
            logMessage("You chose Paper. Computer chose Rock. You won this round!");
        }

        else if (humanChoice === "scissors" && computerChoice === "scissors") {
            logMessage("Both players chose Scissors. Tie!")
        }

        else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore += 1
            logMessage("You chose Scissors. Computer chose Paper. You won this round!");
        }

        else if (humanChoice === "scissors" && computerChoice === "rock") { 
            computerScore += 1
            logMessage("You chose Scissors. Computer chose Rock. You lost this round!");
        }

        if (roundCount >= maxRounds) {
            logMessage ("Game Over. Final Score - Human: " + humanScore + " Computer: " + computerScore);
            if (humanScore > computerScore) {
                logMessage("You won this game!")
            }
            else if (computerScore > humanScore) {
                logMessage("The computer won this game!")
            }
            else {
                logMessage("The score was tied. No winner.")  
            }  
                disableButtons();
                return;
        }
    }

    function disableButtons () {
        rbutton.disabled = true;
        pbutton.disabled = true;
        sbutton.disabled = true;
    }
 
    function enableButtons () {
        rbutton.disabled = false;
        pbutton.disabled = false;
        sbutton.disabled = false;
    }
    
        