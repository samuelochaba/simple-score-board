let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("away-score");

const addToHomeBoard = (numToAdd) => {
  homeScore.textContent = Number(homeScore.textContent) + +numToAdd;
};

const addToGuestBoard = (numToAdd) => {
  guestScore.textContent = Number(guestScore.textContent) + +numToAdd;
};
