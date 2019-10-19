function playGame() {
    let playerScore = 0;
    let computerScore = 0;
  
    function computerPlay() {
      const cptchoice = ["Rock", "Paper", "Scissors"];
      const randomNumber = Math.floor(Math.random() * cptchoice.length);
      return cptchoice[randomNumber];
    }
  
    function playerPlay() {
      const playerPrompt = prompt("Paper, Scissors, or Rock");
      return playerPrompt[0].toUpperCase() + playerPrompt.slice(1).toLowerCase();
    }
  
    var playRound = function() {
      const playerSelection = playerPlay();
      const computerSelection = computerPlay();
      switch (playerSelection + computerSelection) {
        case "PaperRock":
        case "RockScissors":
        case "ScissorsPaper":
          console.log(
            "You win! " + playerSelection + " beats " + computerSelection
          );
          playerScore += 1;
          break;
        case "PaperScissors":
        case "RockPaper":
        case "ScissorsRock":
          console.log(
            "Computer wins! " + computerSelection + " beats " + playerSelection
          );
          computerScore += 1;
          break;
        case "PaperPaper":
        case "RockRock":
        case "ScissorsScissors":
          console.log("Tie. Play Again");
      }
      console.log(
        "Player Score - " + playerScore,
        "Computer Score - " + computerScore
      );
    };
  
    do {
      playRound();
      if (playerScore === 5) {
        console.log("You win the game!");
    }
      else if (computerScore === 5) {
        console.log("You lose the game!");
      }
      else {
      playRound();
    }      
    } while (playerScore < 5 && computerScore < 5);
  }
  