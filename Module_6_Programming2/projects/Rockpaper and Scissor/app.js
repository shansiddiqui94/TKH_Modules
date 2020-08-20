const game = () => {
    let pScore = 0;
    let cScore = 0;

    //Starts the Game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //Play Match this where you can push the buttons
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function() {
                this.style.animation = "";
            });
        });
        //Computer Options are Random
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function() {
                //Computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    //Here is where we call compare hands
                    compareHands(this.textContent, computerChoice);
                    //Update Images
                    playerHand.src = `./images/${this.textContent}.png`;
                    computerHand.src = `./images/${computerChoice}.png`;
                }, 2000);
                //Animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };
    //Score is being updated 
    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
        //Text gets updated here
        const winner = document.querySelector(".winner");
        //This will check if game is a tie
        if (playerChoice === computerChoice) {
            winner.textContent = "Tie";
            return;
        }
        //Checks if the choice made is a rock
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }
        //Checks for Paper
        if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
        //Check for Scissors
        if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
    };

    //this call will call the inner functions 
    startGame();
    playMatch();
};

//Will Start the game
game();