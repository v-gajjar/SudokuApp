"use strict";

import { toggleDialog, toggleHelpDialogClasses } from "./dialog.js";

let fillMode = true;
let guessMode = false;

let guessModeInput = document.getElementById("guessMode");
let fillModeInput = document.getElementById("fillMode");

const helpDialog = document.getElementById("helpDialog");
const settingsIcon = document.getElementById("settings");
const fillModeLabel = document.getElementById("fillModeLabel");
const guessModeLabel = document.getElementById("guessModeLabel");
const settingsDialog = document.getElementById("settingsDialog");

const practiseBoard = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
];

function generateGameBoard() {
  // Set height of gameBoard
  const gameBoard = document.getElementById("gameBoard");
  const gameBoardWidth = window.getComputedStyle(gameBoard).width;
  gameBoard.style.height = gameBoardWidth;

  gameBoard.innerHTML = "";

  for (let i = 0; i < practiseBoard.length; i++) {
    let outerCell = document.createElement("div");
    outerCell.classList.add(["outerCell"]);
    outerCell.setAttribute(`id`, `cell-${i}`);
    outerCell.classList.add(["border-2"]);
    outerCell.classList.add(["grid"]);
    outerCell.classList.add(["grid-cols-3"]);

    gameBoard.appendChild(outerCell);

    for (let j = 0; j < practiseBoard[i].length; j++) {
      let innerCell = document.createElement("div");

      innerCell.classList.add(["innerCell"]);
      innerCell.classList.add(["border"]);
      innerCell.classList.add(["text-center"]);
      innerCell.classList.add(["flex"]);
      innerCell.classList.add(["justify-center"]);
      innerCell.classList.add(["items-center"]);
      innerCell.setAttribute(`id`, `cell-${i}-${j}`);

      if ( guessMode ){
        innerCell.classList.add(["grid"]);
        innerCell.classList.add(["grid-cols-3"]);

        for (let k = 0; k < 9; k++) {
          let guessCell = createGuessNumberCell(i, j, k);
          innerCell.appendChild(guessCell);
        }
      }

      if ( fillMode ){
        innerCell.innerText = practiseBoard[i][j];
      }
      
      outerCell.appendChild(innerCell);
    }
  }
}

function createGuessNumberCell(outerGridCellIndex, innerGridCellIndex, guessCellIndex){
  let guessCell = document.createElement("div");
  guessCell.classList.add(["guessCell"]);
  guessCell.setAttribute(`id`, `guess-cell-${guessCellIndex}`);
  guessCell.classList.add(["text-center"]);
  guessCell.classList.add(["flex"]);
  guessCell.classList.add(["justify-center"]);
  guessCell.classList.add(["items-center"]);
  guessCell.setAttribute(`id`, `cell-${outerGridCellIndex}-${innerGridCellIndex}-${guessCellIndex}`);
  guessCell.innerText = guessCellIndex+1;

  return guessCell;
}

generateGameBoard();

window.addEventListener("resize", () => {
  generateGameBoard();
});

fillModeInput.addEventListener("change", () => {
  toggleBetweenFillAndGuessMode();
});
guessModeInput.addEventListener("change", () => {
  toggleBetweenFillAndGuessMode();
});

function toggleBetweenFillAndGuessMode() {
  guessModeInput.parentElement.classList.toggle("active");
  fillModeInput.parentElement.classList.toggle("active");

  guessMode = !guessMode;
  fillMode = !fillMode;

  generateGameBoard();
}

document.getElementById("help").addEventListener("click", (event) => {
  toggleDialog(helpDialog, "open");

  // TODO: Make this a separate function as it's used in at least two places so far.
  const gameBoard = document.getElementById("gameBoard");
  const gameBoardWidth = window.getComputedStyle(gameBoard).width;
  helpDialog.style.width = gameBoardWidth;
  helpDialog.style.height = gameBoardWidth;

  toggleHelpDialogClasses(settingsIcon, fillModeLabel, guessModeLabel, "open");
  // settingsIcon.classList.remove("fill-current");
  // settingsIcon.classList.remove("text-brand-300", "dark:text-brand-700");
  // settingsIcon.classList.add("text-error", "dark:text-error");

  // fillModeLabel.classList.add("activeHelpDialog");
  // guessModeLabel.classList.add("activeHelpDialog");

  event.stopPropagation();
});

// Event listener to close the dialog when clicking outside
document.body.addEventListener("click", (event) => {
  if (
    helpDialog.open &&
    !helpDialog.contains(event.target) &&
    event.target.id !== "help"
  ) {
    toggleDialog(helpDialog, "close");

    toggleHelpDialogClasses(settingsIcon, fillModeLabel, guessModeLabel, "close")
  }
});

settingsIcon.addEventListener("click", (event) => {
  toggleDialog(settingsDialog, "open");

  const gameBoard = document.getElementById("gameBoard");
  const gameBoardWidth = window.getComputedStyle(gameBoard).width;
  settingsDialog.style.width = gameBoardWidth;
  settingsDialog.style.height = gameBoardWidth;

  event.stopPropagation();
});

document.body.addEventListener("click", (event) => {
  if (
    settingsDialog.open &&
    !settingsDialog.contains(event.target) &&
    event.target.id !== "settings"
  ) {
    toggleDialog(settingsDialog, "close");
  }
});
