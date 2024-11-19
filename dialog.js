export function toggleDialog(dialog, action) {
  if (action === "open") {
    dialog.classList.remove("hidden");
    dialog.show();
  } else if (action === "close") {
    dialog.classList.add("hidden");
    dialog.close();
  }
}

export function toggleHelpDialogClasses(
  settingsIcon,
  fillModeLabel,
  guessModeLabel,
  action,
) {
  if (action === "open") {
    settingsIcon.classList.remove("fill-current");
    settingsIcon.classList.remove("text-brand-300", "dark:text-brand-700");
    settingsIcon.classList.add("text-error", "dark:text-error");

    fillModeLabel.classList.add("activeHelpDialog");
    guessModeLabel.classList.add("activeHelpDialog");
  } else if (action === "close") {
    settingsIcon.classList.add("fill-current");
    settingsIcon.classList.remove("text-error", "dark:text-error");
    fillModeLabel.classList.remove("activeHelpDialog");
    guessModeLabel.classList.remove("activeHelpDialog");
  }
}
