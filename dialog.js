export function toggleDialog(dialog, action) {
  if (action === "open") {
    dialog.classList.remove("hidden");
    dialog.show();
  } else if (action === "close") {
    dialog.classList.add("hidden");
    dialog.close();
  }
}

export function toggleHelpDialogClasses(settingsIcon, fillModeLabel, guessModeLabel, action) {
  if (action === "open") {
    settingsIcon.classList.remove("fill-current");
    settingsIcon.classList.add("text-error", "dark:text-error");

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
  } else if (action === "close") {
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
  }
}
