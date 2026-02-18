export function PlayMode({ fillMode, onModeChange }) {
  return (
    <div className="flex gap-2" id="playMode">
      <label
        htmlFor="fillMode"
        className={`flex flex-1 cursor-pointer justify-center rounded-lg py-3 text-base font-bold transition-colors ${
          fillMode
            ? "bg-brand-500 text-white"
            : "border-2 border-brand-500 bg-white text-brand-500 dark:border-brand-400 dark:bg-brand-800 dark:text-brand-400"
        }`}
      >
        Fill
        <input
          type="radio"
          name="mode"
          id="fillMode"
          className="sr-only"
          value="fill"
          checked={fillMode}
          onChange={() => onModeChange?.(true)}
        />
      </label>
      <label
        htmlFor="guessMode"
        className={`flex flex-1 cursor-pointer justify-center rounded-lg py-3 text-base font-bold transition-colors ${
          !fillMode
            ? "bg-brand-500 text-white"
            : "border-2 border-brand-500 bg-white text-brand-500 dark:border-brand-400 dark:bg-brand-800 dark:text-brand-400"
        }`}
      >
        Guess
        <input
          type="radio"
          name="mode"
          id="guessMode"
          className="sr-only"
          value="guess"
          checked={!fillMode}
          onChange={() => onModeChange?.(false)}
        />
      </label>
    </div>
  );
}
