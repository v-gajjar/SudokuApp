"use strict";

const helpDialog = document.getElementById("helpDialog");
const settingsIcon = document.getElementById("settings");
const fillModeLabel = document.getElementById("fillModeLabel");
const guessModeLabel = document.getElementById("guessModeLabel");

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
      innerCell.innerText = practiseBoard[i][j];

      outerCell.appendChild(innerCell);
    }
  }
}

generateGameBoard();

window.addEventListener("resize", () => {
  generateGameBoard();
});

document.getElementById("help").addEventListener("click", (event) => {
  helpDialog.classList.remove("hidden");
  helpDialog.show();


  // TODO: Make this a separate function as it's used in at least two places so far.
  const gameBoard = document.getElementById("gameBoard");
  const gameBoardWidth = window.getComputedStyle(gameBoard).width;
  helpDialog.style.width = gameBoardWidth;
  helpDialog.style.height = gameBoardWidth;

  if (helpDialog.open) {
    settingsIcon.classList.remove("fill-current");
    settingsIcon.classList.add("text-error", "dark:text-error");


  if (helpDialog.open) {
    settingsIcon.classList.remove("fill-current");
    settingsIcon.classList.add("text-error");
    settingsIcon.classList.add("dark:text-error");


    if (fillModeLabel.classList.contains("active")) {
      fillModeLabel.classList.add("activeHelpDialog");
    } else {
      fillModeLabel.classList.add("text-error");
    }

    if (guessModeLabel.classList.contains("active")) {
      guessModeLabel.classList.add("activeHelpDialog");
    } else {
      guessModeLabel.classList.add("text-error");
    }
    event.stopPropagation();
  }
});

// Event listener to close the dialog when clicking outside
document.body.addEventListener("click", (event) => {
  if (
    helpDialog.open &&
    !helpDialog.contains(event.target) &&
    event.target.id !== "help"
  ) {
    helpDialog.classList.add("hidden");

    settingsIcon.classList.add("fill-current");
    settingsIcon.classList.remove("text-error", "dark:text-error");

    if (fillModeLabel.classList.contains("active")) {
      fillModeLabel.classList.remove("activeHelpDialog");
    } else {
      fillModeLabel.classList.remove("text-error");
    }

    if (guessModeLabel.classList.contains("active")) {
      guessModeLabel.classList.remove("activeHelpDialog");
    } else {
      guessModeLabel.classList.remove("text-error");
      guessModeLabel.classList.add("text-brand-950", "dark:text-brand-600");
    }

    helpDialog.close();
  }
<<<<<<< HEAD
=======

  helpDialog.addEventListener("click", () => {
    helpDialog.classList.add("hidden");

    settingsIcon.classList.add("fill-current");
    settingsIcon.classList.remove("text-error");
    settingsIcon.classList.remove("dark:text-error");

    if (fillModeLabel.classList.contains("active")) {
      fillModeLabel.classList.remove("activeHelpDialog");
    } else {
      fillModeLabel.classList.remove("text-error");
    }

    if (guessModeLabel.classList.contains("active")) {
      guessModeLabel.classList.remove("activeHelpDialog");
    } else {
      guessModeLabel.classList.remove("text-error");
      guessModeLabel.classList.add("text-brand-950");
      guessModeLabel.classList.add("dark:text-brand-600");
    }

    helpDialog.close();
  });
>>>>>>> 3705c1f (chore: add highlight to settings when helpDialog open)
});
