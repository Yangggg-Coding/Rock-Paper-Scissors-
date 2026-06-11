let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  loesses: 0,
  ties: 0,
};

function playerMove(playermove) {
  const computermove = computerMove();
  let result = "";
  if (playermove === "rock") {
    if (computermove === "rock") {
      result = "Ties";
    } else if (computermove === "paper") {
      result = "You lose";
    } else if (computermove === "scissors") {
      result = "You win";
    }
  } else if (playermove === "paper") {
    if (computermove === "rock") {
      result = "You win";
    } else if (computermove === "paper") {
      result = "Ties";
    } else if (computermove === "scissors") {
      result = "You lose";
    }
  } else if (playermove === "scissors") {
    if (computermove === "rock") {
      result = "You lose";
    } else if (computermove === "paper") {
      result = "You win";
    } else if (computermove === "scissors") {
      result = "Ties";
    }
  }
  if (result === "You win") {
    score.wins += 1;
  } else if (result === "You lose") {
    score.loesses += 1;
  } else {
    score.ties += 1;
  }
  localStorage.setItem("score", JSON.stringify(score));
  document.querySelector(".js-result").innerHTML =
    `You selected ${playermove} | Computer selected ${computermove} => Result: ${result}`;
  updateScore();
}
function computerMove() {
  let randomNumber = Math.random();
  let computermove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computermove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computermove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computermove = "scissors";
  }
  return computermove;
}
function resetScore() {
  score.wins = 0;
  score.loesses = 0;
  score.ties = 0;
  updateScore();
  localStorage.removeItem("score");
}
function updateScore() {
  document.querySelector(".js-score").innerHTML =
    `Wins: ${score.wins} | Lose: ${score.loesses} | Ties: ${score.ties}`;
}
function askAgain() {
  const answer = prompt("Are you sure? (Y for yes || N for No)");
  if (answer === "y" || answer === "Y") {
    resetScore();
  } else if (answer === "n" || answer === "N") {
    updateScore();
  }
}
document.querySelector(".js-rock").addEventListener("click", () => {
  playerMove("rock");
});
document.querySelector(".js-paper").addEventListener("click", () => {
  playerMove("paper");
});
document.querySelector(".js-scissors").addEventListener("click", () => {
  playerMove("scissors");
});
document.querySelector(".js-rock-btn").addEventListener("click", () => {
  playerMove("rock");
});
document.querySelector(".js-paper-btn").addEventListener("click", () => {
  playerMove("paper");
});
document.querySelector(".js-scissors-btn").addEventListener("click", () => {
  playerMove("scissors");
});
document.querySelector(".js-reset").addEventListener("click", () => {
  askAgain();
});

//shortcut keys
document.body.addEventListener("keydown", (event) => {
  if (event.key === "r" || event.key === "R") {
    playerMove("rock");
  } else if (event.key === "p" || event.key === "P") {
    playerMove("paper");
  } else if (event.key === "s" || event.key === "S") {
    playerMove("scissors");
  } else if (event.key === "q" || event.key === "Q") {
    askAgain();
  }
});
