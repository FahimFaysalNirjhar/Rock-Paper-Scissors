let playerPoint = 0;
let computerPoint = 0;
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const choices = document.querySelectorAll(".btn");
const computerImg = document.querySelector("#computer-img");
const playerImg = document.querySelector("#player-img");
const playerImage = document.querySelector("#player-img img");
const computerImage = document.querySelector("#computer-img img");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const option = choice.getAttribute("id");
    console.log(`Player choice ${option}`);
    computerImg.classList.add("shakeComputer");
    playerImg.classList.add("shakePlayer");

    setTimeout(() => {
      computerImg.classList.remove("shakeComputer");
      playerImg.classList.remove("shakePlayer");
      playerImage.src = `./gameImages/${option}Player.png`;
      const compOption = ["paper", "stone", "scissors"];
      let randomidx = Math.floor(Math.random() * 3);
      let comChoice = compOption[randomidx];
      console.log(`Computer choice ${comChoice}`);
      if (comChoice === option) {
        computerImage.src = `./gameImages/${comChoice}Computer.png`;
      } else {
        if (option === "stone") {
          //paper scissors
          if (comChoice === "paper") {
            computerImage.src = `./gameImages/paperComputer.png`;
            computerPoint++;
            computerScore.innerText = computerPoint;
          } else {
            computerImage.src = `./gameImages/scissorsComputer.png`;
            playerPoint++;
            playerScore.innerText = playerPoint;
          }
        } else if (option === "paper") {
          //scissors rock
          if (comChoice === "scissors") {
            computerImage.src = `./gameImages/scissorsComputer.png`;
            computerPoint++;
            computerScore.innerText = computerPoint;
          } else {
            computerImage.src = `./gameImages/stoneComputer.png`;
            playerPoint++;
            playerScore.innerText = playerPoint;
          }
        } else {
          //scissors
          // stone paper
          if (comChoice === "stone") {
            computerImage.src = `./gameImages/stoneComputer.png`;
            computerPoint++;
            computerScore.innerText = computerPoint;
          } else {
            computerImage.src = `./gameImages/paperComputer.png`;
            playerPoint++;
            playerScore.innerText = playerPoint;
          }
        }
      }
    }, 900);
  });
});
