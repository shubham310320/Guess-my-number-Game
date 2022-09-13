const check = document.querySelector(".check");
const replay = document.querySelector(".retry");
let input = document.getElementById("input");

// THIS IS FUNCTIONS AREA
function message(x) {
  document.querySelector(".message").textContent = x;
}

function score(x) {
  document.querySelector(".score").textContent = x;
}

function highscore(x) {
  document.querySelector(".highscore").textContent = x;
}

function secret(x) {
  document.querySelector(".secret-number").textContent = x;
}

function checker() {
  let value = Number(document.querySelector("input").value);

  // SUBDIVISION WIN
  if (value === guess) {
    message("🎊🥳You Won!🥳🎊");
    if (startScore > startHighscore) startHighscore = startScore;

    highscore(startHighscore);

    secret(guess);
  } else if (!value) {
    message("Please Guess Something");
  }
  // SUBDIVISION WRONG GUESS
  else {
    if (startScore > 1) {
      value < guess ? message("Too Low") : message("Too High");
      startScore--;
      score(`${startScore}`);
    } else {
      score(0);
      message("You Loser 😂🤣");
      secret(guess);
    }
  }
}

// SECTION TODO STARTING
const guess = Math.trunc(Math.random() * 20 + 1);
let startScore = 20;
let startHighscore = 0;

// SECTION CHECK

document.querySelector(".check").addEventListener("click", checker());

document.addEventListener("keypress", (x) => {
  if (x.code === "Enter" || x.code === "NumpadEnter") {
    checker();
  }
});

// SECTION RETRY

function playAgain() {
  const guess = Math.trunc(Math.random() * 20 + 1);
  let startScore = 20;
  score(20);
  message("Start Guessing");
  secret("?");
  input.innerText = "";
}

replay.addEventListener("click", playAgain());
document.addEventListener("keypress", (x) => {
  if (x.code === "KeyR") playAgain();
});
