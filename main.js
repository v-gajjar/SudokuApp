"use strict";

const helpDialog = document.getElementById("helpDialog");

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

let fillMode = true;
let guessMode = false;

let guessModeInput = document.getElementById("guessMode");
let fillModeInput = document.getElementById("fillMode");

fillModeInput.addEventListener("change", () => { 
  toggleFillOrGuessMode(); 
});
guessModeInput.addEventListener("change", () => {
  toggleFillOrGuessMode(); 
});

function toggleFillOrGuessMode(){
  guessModeInput.parentElement.classList.toggle("active");
  fillModeInput.parentElement.classList.toggle("active");

  guessMode === true ? false : true;
  fillMode === true ? false : true;
}


document.getElementById("help").addEventListener("click", () => {
  helpDialog.classList.remove("hidden");

  helpDialog.show(); 

  helpDialog.addEventListener("click", () => {
    helpDialog.classList.add("hidden");
    helpDialog.close();
  });
});


