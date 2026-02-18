import { HelpIcon, MoonIcon, SunIcon, SettingsIcon, PauseIcon } from "./icons";

export function TopNav({
  isDark,
  onThemeToggle,
  onHelp,
  onSettings,
  difficultyLabel,
  timerDisplay,
  clockVisible,
  onPause,
}) {
  const ThemeIcon = isDark ? SunIcon : MoonIcon;

  return (
    <header className="flex items-center justify-between gap-2 py-2">
      <button
        aria-label="Help"
        onClick={onHelp}
        className="-m-1 rounded p-1 text-brand-500 hover:bg-brand-100 dark:text-brand-400 dark:hover:bg-brand-800"
      >
        <HelpIcon />
      </button>

      <div className="flex min-w-0 flex-1 items-center justify-center gap-3">
        <span className="truncate text-base font-bold text-black dark:text-brand-100">
          {difficultyLabel}
        </span>
        <span className="text-base font-bold tabular-nums text-black dark:text-brand-100">
          {clockVisible ? timerDisplay : "0:00"}
        </span>
        <button
          aria-label="Pause timer"
          onClick={onPause}
          className="-m-1 rounded p-1 text-brand-500 hover:bg-brand-100 dark:text-brand-400 dark:hover:bg-brand-800"
        >
          <PauseIcon />
        </button>
      </div>

      <div className="flex items-center gap-1">
        <button
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          onClick={onThemeToggle}
          className="-m-1 rounded p-1 text-brand-500 hover:bg-brand-100 dark:text-brand-400 dark:hover:bg-brand-800"
        >
          <ThemeIcon />
        </button>
        <button
          aria-label="Open settings"
          onClick={onSettings}
          className="-m-1 rounded p-1 text-brand-500 hover:bg-brand-100 dark:text-brand-400 dark:hover:bg-brand-800"
        >
          <SettingsIcon />
        </button>
      </div>
    </header>
  );
}
