"use strict";

/**
 * GAME MODE MODULE
 * 
 * This module was extracted from main.js during code refactoring.
 * Handles switching between fill mode and guess mode.
 * 
 * Fill Mode: Shows the actual numbers in each cell
 * Guess Mode: Shows 3x3 mini-grids for marking possible numbers
 * 
 * Author: Refactored by Shoaib Mohammed for better code structure
 */

import { generateGameBoard } from "./gameBoard.js";

/**
 * Toggle between fill mode and guess mode
 * 
 * This function switches the game between two modes:
 * - Fill Mode: Display actual numbers in cells
 * - Guess Mode: Display mini 3x3 grids for marking possibilities
 * 
 * @param {HTMLElement} guessModeInput - The guess mode radio button
 * @param {HTMLElement} fillModeInput - The fill mode radio button  
 * @param {boolean} guessMode - Current guess mode state
 * @param {boolean} fillMode - Current fill mode state
 * @param {Array<Array<number>>} practiseBoard - The game board data
 * @returns {Object} Updated mode states {guessMode, fillMode}
 */
export function toggleBetweenFillAndGuessMode(guessModeInput, fillModeInput, guessMode, fillMode, practiseBoard) {
  guessModeInput.parentElement.classList.toggle("active");
  fillModeInput.parentElement.classList.toggle("active");

  guessMode = !guessMode;
  fillMode = !fillMode;

  generateGameBoard(practiseBoard, guessMode, fillMode);

  return { guessMode, fillMode };
}
