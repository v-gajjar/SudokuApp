"use strict";

// Set height of gameBoard
const gameBoard = document.getElementById("gameBoard");
const gameBoardWidth = window.getComputedStyle(gameBoard).width;
gameBoard.style.height = gameBoardWidth;

const practiseBoard = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
];
    
function generateGameBoard() {
  gameBoard.innerHTML = "";

  for (let i = 0; i < practiseBoard.length; i++) {

    let outerCell = document.createElement("div");
    outerCell.classList.add(["outerCell"]);
    outerCell.setAttribute(`id`,`cell-${i}` ); 
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
        innerCell.setAttribute(`id`,`cell-${i}-${j}` ); 
        innerCell.innerText = practiseBoard[i][j];

        outerCell.appendChild(innerCell);
    }
  }
}

generateGameBoard();

