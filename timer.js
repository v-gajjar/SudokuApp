"use strict";

/**
 * TIMER MODULE
 * 
 * This module was extracted from main.js during code refactoring.
 * Handles all clock/timer related functionality including:
 * - Toggling clock visibility
 * - Managing timer state
 * - Clock display controls
 * 
 * Author: Refactored by Shoaib Mohammed for better code structure
 */

// Timer/clock functionality

// Global clock state - tracks whether the timer is currently active
export let clockIsActive = true;

/**
 * Toggle the clock/timer visibility and state
 * 
 * This function controls whether the game timer is shown or hidden.
 * It manages the checkbox state and updates the UI accordingly.
 * 
 * @param {HTMLElement} clockToggle - The clock toggle checkbox element
 * @param {HTMLElement} timerBlock - The timer display container
 * @param {HTMLElement} clockToggleCheck - The visual checkmark element
 */
export function toggleClock(clockToggle, timerBlock, clockToggleCheck) {
  clockToggle.checked = !clockToggle.checked;
  if (clockToggle.checked) {
    timerBlock.classList.toggle("hidden");
    clockToggleCheck.classList.toggle("hidden");
    clockToggle.ariaPressed = "false";
    clockIsActive = false;
  } else {
    timerBlock.classList.toggle("hidden");
    clockToggleCheck.classList.toggle("hidden");
    clockToggle.areaPressed = "true";
    clockIsActive = true;
  }
}
