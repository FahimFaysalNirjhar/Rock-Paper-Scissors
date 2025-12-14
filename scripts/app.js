let playerPoint = 0;
let computerPoint = 0;
const choices = document.querySelectorAll(".btn");
const computerImg = document.querySelector("#computer-img");
const playerImg = document.querySelector("#player-img");
const playerImage = document.querySelector("#player-img img");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const option = choice.getAttribute("id");
    console.log(option);
    computerImg.classList.add("shakeComputer");
    playerImg.classList.add("shakePlayer");

    setTimeout(() => {
      computerImg.classList.remove("shakeComputer");
      playerImg.classList.remove("shakePlayer");
      playerImage.src = `./gameImages/${option}Player.png`;
    }, 900);
  });
});
