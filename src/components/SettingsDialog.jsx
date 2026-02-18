import { DIFFICULTY_LEVELS } from "../constants/practiceBoard";

export function SettingsDialog({
  open,
  onClose,
  difficulty,
  setDifficulty,
  autoCheck,
  setAutoCheck,
  clockVisible,
  setClockVisible,
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col justify-center bg-white px-8 dark:bg-brand-900"
      role="dialog"
      aria-modal="true"
    >
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute right-4 top-4 p-2 text-2xl leading-none text-brand-500 dark:text-brand-400"
      >
        ×
      </button>
      <div className="space-y-6 text-base text-black dark:text-brand-100">
        <div className="bg-gray-100 flex gap-1 rounded-lg p-1 dark:bg-brand-800">
          {DIFFICULTY_LEVELS.map(({ id, label }) => (
            <label
              key={id}
              className={`flex-1 cursor-pointer rounded-md py-2 text-center text-sm font-semibold transition-colors ${
                difficulty === id
                  ? "bg-brand-500 text-white"
                  : "text-brand-500 hover:bg-brand-100 dark:text-brand-400 dark:hover:bg-brand-700"
              }`}
            >
              <input
                type="radio"
                id={id}
                name="level"
                className="sr-only"
                checked={difficulty === id}
                onChange={() => setDifficulty(id)}
              />
              {label}
            </label>
          ))}
        </div>

        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            checked={autoCheck}
            onChange={(e) => setAutoCheck(e.target.checked)}
            className="h-5 w-5 rounded border-2 border-brand-500 text-brand-500 focus:ring-brand-400"
          />
          <span>Auto check guesses</span>
        </label>

        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            checked={clockVisible}
            onChange={(e) => setClockVisible(e.target.checked)}
            className="h-5 w-5 rounded border-2 border-brand-500 text-brand-500 focus:ring-brand-400"
          />
          <span>Show clock</span>
        </label>
      </div>
    </div>
  );
}
