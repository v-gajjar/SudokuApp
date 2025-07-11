"use strict";

// ===== IMPORTS =====
// Existing dialog functionality
import { toggleDialog, toggleHelpDialogClasses } from "./dialog.js";
// Existing light/dark mode functionality
import { toggleLightDarkMode, SunIcon, MoonIcon } from "./lightDarkMode.js";

// ===== NEW MODULAR IMPORTS =====
// Refactored: Game board generation moved to separate module for better organization
import { generateGameBoard } from "./gameBoard.js";
// Refactored: Game mode switching logic moved to dedicated module
import { toggleBetweenFillAndGuessMode } from "./gameMode.js";
// Refactored: Clock/timer functionality moved to separate module
import { toggleClock, clockIsActive } from "./timer.js";

// ===== GAME STATE VARIABLES =====
// Core game mode states
let fillMode = true;
let guessMode = false;

// ===== DOM ELEMENT REFERENCES =====
// Game mode input elements
let guessModeInput = document.getElementById("guessMode");
let fillModeInput = document.getElementById("fillMode");

// Dialog and UI elements
const helpDialog = document.getElementById("helpDialog");
const lightDarkButton = document.getElementById("lightDarkButton");
const settingsIcon = document.getElementById("settings");
const fillModeLabel = document.getElementById("fillModeLabel");
const guessModeLabel = document.getElementById("guessModeLabel");
const settingsDialog = document.getElementById("settingsDialog");

// Timer/clock related elements
const clockToggle = document.getElementById("showClock");
const timerBlock = document.getElementById("timerBlock");
const clockToggleCheck = document.getElementById("clockToggleCheck");

// Puzzle difficulty elements
const puzzleDifficulty = document.getElementById("puzzleDifficulty");

// ===== GAME DATA =====
// Practice board data - currently shows numbers 1-9 in each row
// TODO: This will eventually be replaced with actual Sudoku puzzle data
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

// ===== DIFFICULTY LEVEL HANDLING =====
// Default difficulty setting
let difficulty = "easyLevel";

// Listen for difficulty level changes and update the display
document.querySelectorAll('input[name="level"]').forEach(input => {
  input.addEventListener("change", () => {
    const label = document.querySelector(`label[for="${input.id}"]`);
    puzzleDifficulty.innerText = label ? label.innerText : "";
    difficulty = input.id;
  })
});

// ===== INITIAL GAME SETUP =====
// Generate the initial game board using the refactored module
generateGameBoard(practiseBoard, guessMode, fillMode);

// ===== EVENT LISTENERS =====

// Responsive design: Regenerate board when window is resized
window.addEventListener("resize", () => {
  generateGameBoard(practiseBoard, guessMode, fillMode);
});

// ===== GAME MODE SWITCHING =====
// Refactored: These event listeners now use the modularized toggle function
// Fill mode toggle
fillModeInput.addEventListener("change", () => {
  const result = toggleBetweenFillAndGuessMode(guessModeInput, fillModeInput, guessMode, fillMode, practiseBoard);
  guessMode = result.guessMode;
  fillMode = result.fillMode;
});

// Guess mode toggle
guessModeInput.addEventListener("change", () => {
  const result = toggleBetweenFillAndGuessMode(guessModeInput, fillModeInput, guessMode, fillMode, practiseBoard);
  guessMode = result.guessMode;
  fillMode = result.fillMode;
});

// ===== TIMER/CLOCK FUNCTIONALITY =====
// Refactored: Clock toggle now uses the modularized function
clockToggle.addEventListener("click", () => {
  toggleClock(clockToggle, timerBlock, clockToggleCheck);
});

// ===== DIALOG MANAGEMENT =====
// Help dialog functionality
// Toggle help & settings dialog
document.getElementById("help").addEventListener("click", (event) => {
  toggleDialog(helpDialog, "open");

  // TODO: Make this a separate function as it's used in at least two places so far.
  // Set dialog size to match game board
  const gameBoard = document.getElementById("gameBoard");
  const gameBoardWidth = window.getComputedStyle(gameBoard).width;
  helpDialog.style.width = gameBoardWidth;
  helpDialog.style.height = gameBoardWidth;

  toggleHelpDialogClasses(settingsIcon, fillModeLabel, guessModeLabel, "open");

  event.stopPropagation();
});

// Close help dialog when clicking outside
document.body.addEventListener("click", (event) => {
  if (
    helpDialog.open &&
    !helpDialog.contains(event.target) &&
    event.target.id !== "help"
  ) {
    toggleDialog(helpDialog, "close");

    toggleHelpDialogClasses(
      settingsIcon,
      fillModeLabel,
      guessModeLabel,
      "close",
    );
  }
});

// Settings dialog functionality
settingsIcon.addEventListener("click", (event) => {
  toggleDialog(settingsDialog, "open");

  // Set dialog size to match game board (same as help dialog)
  const gameBoard = document.getElementById("gameBoard");
  const gameBoardWidth = window.getComputedStyle(gameBoard).width;
  settingsDialog.style.width = gameBoardWidth;
  settingsDialog.style.height = gameBoardWidth;

  event.stopPropagation();
});

// Close settings dialog when clicking outside
document.body.addEventListener("click", (event) => {
  if (
    settingsDialog.open &&
    !settingsDialog.contains(event.target) &&
    event.target.id !== "settings"
  ) {
    toggleDialog(settingsDialog, "close");
  }
});

// set light/dark mode based on user preference
document.addEventListener("DOMContentLoaded", () => {
  const storedPreference = localStorage.getItem("theme");
  const systemPreference = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  if (storedPreference === "dark" || (!storedPreference && systemPreference)) {
    document.documentElement.classList.add("dark");
    lightDarkButton.innerHTML = SunIcon;
  } else {
    document.documentElement.classList.remove("dark");
    lightDarkButton.innerHTML = MoonIcon;
  }
});

// toggle light/dark mode
lightDarkButton.addEventListener("click", () => {
  toggleLightDarkMode();
});
