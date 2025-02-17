import { clockIsActive, clockToggleCheck, gameRunning } from "./main";

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

export function pauseTimer() {
  clearInterval(timerInterval);
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    pauseTimer();
  } else {
    startTimer();
  }
});

export function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  clockDisplay.innerText = "0:00";
}

pauseTimerBtn.addEventListener("click", () => {
  if (clockIsActive && pauseTimerBtn.ariaPressed === "false") {
    pauseTimerBtn.ariaPressed = "true";
    console.log("paused");
    clockDisplay.style.fontWeight = "600";
    pauseTimer();
  } else if (clockIsActive && pauseTimerBtn.ariaPressed === "true") {
    pauseTimerBtn.ariaPressed = "false";
    clockDisplay.style.fontWeight = "800";
    startTimer();
  }
});

// TODO: Add event listener to reset timer when game is reset or over.
