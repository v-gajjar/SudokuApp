"use strict";

/**
 * GAME BOARD MODULE
 * 
 * This module was extracted from main.js during code refactoring to improve organization.
 * Contains all functionality related to:
 * - Generating the visual game board
 * - Creating individual cells (both fill and guess modes)
 * - Managing the board's responsive design
 * 
 * Author: Refactored by Shoaib Mohammed for better code structure
 */

// Game board generation and cell creation functions

/**
 * Generate the complete Sudoku game board
 * 
 * This function creates the entire 9x9 grid structure with proper styling.
 * It handles both fill mode (showing numbers) and guess mode (showing mini grids).
 * 
 * @param {Array<Array<number>>} practiseBoard - The 9x9 array containing the puzzle data
 * @param {boolean} guessMode - Whether to show guess cells (mini 3x3 grids)
 * @param {boolean} fillMode - Whether to show the actual numbers
 */
export function generateGameBoard(practiseBoard, guessMode, fillMode) {
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

      if (guessMode) {
        innerCell.classList.add(["grid"]);
        innerCell.classList.add(["grid-cols-3"]);

        for (let k = 0; k < 9; k++) {
          let guessCell = createGuessNumberCell(i, j, k);
          innerCell.appendChild(guessCell);
        }
      }

      if (fillMode) {
        innerCell.innerText = practiseBoard[i][j];
      }

      outerCell.appendChild(innerCell);
    }
  }
}

/**
 * Create a single guess number cell (used in guess mode)
 * 
 * In guess mode, each cell is divided into a 3x3 mini-grid where users can
 * mark possible numbers (1-9) for that cell.
 * 
 * @param {number} outerGridCellIndex - Row index in the main 9x9 grid
 * @param {number} innerGridCellIndex - Column index in the main 9x9 grid  
 * @param {number} guessCellIndex - Index within the 3x3 guess grid (0-8)
 * @returns {HTMLElement} The created guess cell element
 */
export function createGuessNumberCell(
  outerGridCellIndex,
  innerGridCellIndex,
  guessCellIndex,
) {
  let guessCell = document.createElement("div");
  guessCell.classList.add(["guessCell"]);
  guessCell.setAttribute(`id`, `guess-cell-${guessCellIndex}`);
  guessCell.classList.add(["text-center"]);
  guessCell.classList.add(["flex"]);
  guessCell.classList.add(["justify-center"]);
  guessCell.classList.add(["items-center"]);
  guessCell.classList.add(["text-xs"]);
  guessCell.setAttribute(
    `id`,
    `cell-${outerGridCellIndex}-${innerGridCellIndex}-${guessCellIndex}`,
  );
  guessCell.innerText = guessCellIndex + 1;

  return guessCell;
}
