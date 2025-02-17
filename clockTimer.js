import { clockIsActive, gameRunning } from "./main";

const clockDisplay = document.getElementById("puzzleTimer");
const pauseTimerBtn = document.getElementById("pause");

let startTime;
let timerInterval;
let elapsedTime = 0;

export function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTimer, 1000);
}

export function updateTimer() {
  elapsedTime = Date.now() - startTime;
  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
  const hours = Math.floor(elapsedTime / 1000 / 60 / 60);
  clockDisplay.innerText = hours
    ? `${hours}:${minutes}:${seconds.toString().padStart(2, "0")}`
    : `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    clearInterval(timerInterval);
  } else {
    startTimer();
  }
});

export function pauseTimer() {
  clearInterval(timerInterval);
}

export function stopTimer() {
  clearInterval(timerInterval);
}

export function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  clockDisplay.innerText = "0:00";
}

pauseTimerBtn.addEventListener("click", () => {
  if (clockIsActive && pauseTimerBtn.ariaPressed === "false") {
    pauseTimerBtn.ariaPressed = "true";
    pauseTimer();
  } else if (clockIsActive && pauseTimerBtn.ariaPressed === "true") {
    pauseTimerBtn.ariaPressed = "false";
    startTimer();
  }
});

// TODO: Add event listener to reset timer when game is reset or over.
