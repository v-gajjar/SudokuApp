export function WinDialog({ open, onClose, time }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/50 px-8"
      onClick={(e) => e.target === e.currentTarget && onClose?.()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="win-title"
    >
      <div
        className="w-full max-w-sm rounded-xl bg-white p-8 text-center shadow-xl dark:bg-brand-800"
        onClick={(e) => e.stopPropagation()}
      >
        <h2
          id="win-title"
          className="mb-2 text-2xl font-bold text-brand-600 dark:text-brand-400"
        >
          You won!
        </h2>
        <p className="mb-4 text-black dark:text-brand-100">
          Congratulations! You solved the puzzle.
        </p>
        {time && (
          <p className="mb-4 text-lg font-semibold text-brand-500 dark:text-brand-400">
            Time: {time}
          </p>
        )}
        <button
          onClick={onClose}
          className="rounded-lg bg-brand-500 px-6 py-3 font-bold text-white transition-colors hover:bg-brand-600"
        >
          Awesome!
        </button>
      </div>
    </div>
  );
}
