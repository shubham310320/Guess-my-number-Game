"use strict";

const check = document.querySelector(".check");
const retry = document.querySelector(".again");
const box1 = document.getElementById("main");
const secretBox = document.getElementById("secretbox");
const winNumberShown = document.getElementById("showNumber");
const retrieve = document.getElementById("retrieve");

const score = function (x) {
  document.querySelector(".score").textContent = x;
};
const highscore = function (x) {
  document.querySelector(".highscore").textContent = x;
};
const message = function (x) {
  document.querySelector(".message").textContent = x;
};
const secretNumber = function (x) {
  document.querySelector(".secret-number").textContent = x;
};

// SECTION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~THESE ARE THE STARTING CONDITIONS
console.log();

const answer = Math.trunc(Math.random() * 21);
let startScore = 20;
let startHighscore = 0;

console.log(answer);

// SECTION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~THIS IS THE CHECK BUTTON LOGIC

check.addEventListener("click", function () {
  let value = Number(retrieve.value);

  // SUBPART This is the Winning situation

  if (value === answer) {
    message("You Guessed Right!🎊🎉🥳");
    secretNumber(answer);
    box1.style.backgroundColor = "#63dd6a";
    secretBox.style.backgroundColor = "#63dd6a";
    winNumberShown.style.color = "#268be4";

    //SUBDIVISION this is the HIGHSCORE LOGIC
    if (startScore > startHighscore) {
      highscore(startScore);
    }
  } else if (!value) {
    message("i have Brain, its Empty!😂");
  } else {
    value < answer ? message("guess High") : message("gassed High");

    if (startScore > 1) {
      startScore--;
    }

    // SUBPART This is the Losing situation situation
    else {
      startScore = 0;
      message("Try again YOU LOSER");
      box1.style.backgroundColor = "#e42626de";
      secretNumber("REALLY");
      secretBox.style.backgroundColor = "#e42626de";
      secretBox.style.border = "none";
      secretBox.style.width = "100%";
      secretBox.style.borderRadius = "0";
      secretBox.style.gridColumn = "1/-1";
      secretBox.style.boxShadow = "none";

      winNumberShown.style.fontSize = "10rem";
      winNumberShown.style.color = "#63dd6a";
    }
    score(startScore);
  }
});

// SECTION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~THIS IS THE AGAIN BUTTON LOGIC

retry.addEventListener("click", function () {
  const answer = Math.trunc(Math.random() * 21);

  let startScore = 20;
  score(startScore);
  secretNumber("?");
  box1.style.backgroundColor = "#268be49f";
  secretBox.style.backgroundColor = "#268be4";
  winNumberShown.style.color = "#63dd6a";

  secretBox.style.width = "20rem";
  secretBox.style.borderRadius = "50%";
  secretBox.style.gridColumn = "2 / span2";
  secretBox.style.boxShadow = "inset 0 0 2rem #63dd69";
  secretBox.style.boxShadow = "0 0 4rem rgba(0, 0, 0, 0.308)";

  winNumberShown.style.fontSize = "12rem";

  retrieve.value = retrieve.defaultValue;
});
