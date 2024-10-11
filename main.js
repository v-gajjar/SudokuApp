"use strict";

const helpDialog = document.getElementById("helpDialog");
const settingsIcon = document.getElementById("settings");
const playMode = document.getElementById("playMode");
const fillMode = document.getElementById("fillModeLabel");
const guessMode = document.getElementById("guessModeLabel");

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
      innerCell.classList.add(["align-middle"]);
      innerCell.setAttribute(`id`, `cell-${i}-${j}`);
      innerCell.innerText = practiseBoard[i][j];

      outerCell.appendChild(innerCell);
    }
  }
}

generateGameBoard();

window.addEventListener("resize", () => {
  generateGameBoard();
});

document.getElementById("help").addEventListener("click", () => {
  helpDialog.classList.remove("hidden");

  helpDialog.show();
  playMode.classList.add("text-error");
  playMode.classList.add("dark:text-error");

  if (helpDialog.open) {
    // settingsIcon.classList.add("drop-shadow-['0_25px_25px_rgba(255,_135,_73,_0.5)']");
    playMode.classList.add("text-error");
    playMode.classList.add("dark:text-error");

    if (fillMode.classList.contains("active")) {
      fillMode.classList.add("activeHelpDialog");
    }
    if (guessMode.classList.contains("active")) {
      guessMode.classList.add("activeHelpDialog");
    }
  }

  helpDialog.addEventListener("click", () => {
    helpDialog.classList.add("hidden");
    playMode.classList.remove("text-error");
    playMode.classList.remove("dark:text-error");

    if (fillMode.classList.contains("active")) {
      fillMode.classList.remove("activeHelpDialog");
    }
    if (guessMode.classList.contains("active")) {
      guessMode.classList.remove("activeHelpDialog");
    }
    helpDialog.close();
  });
});
