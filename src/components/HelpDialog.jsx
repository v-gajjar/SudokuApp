export function HelpDialog({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col justify-center bg-white px-8 dark:bg-brand-900"
      role="dialog"
      aria-modal="true"
      aria-labelledby="help-title"
    >
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute right-4 top-4 p-2 text-2xl leading-none text-brand-500 dark:text-brand-400"
      >
        ×
      </button>
      <div className="space-y-3 text-base font-normal text-black dark:text-brand-100">
        <p>
          <strong>How to play:</strong>
        </p>
        <p>
          1. Tap a cell, then tap a number to place it (or tap number first,
          then cell).
        </p>
        <p>2. Tap the eraser to clear the selected cell.</p>
        <p>
          <strong>Fill mode:</strong> Place one number per cell.
        </p>
        <p>
          <strong>Guess mode:</strong> Add pencil marks—tap numbers to toggle
          candidates in the selected cell.
        </p>
        <p>
          Enable &quot;Auto check guesses&quot; in Settings to highlight
          conflicts.
        </p>
        <p className="pt-2">
          Fill each 3×3 box so 1–9 appear once per row, column, and subgrid.
        </p>
      </div>
    </div>
  );
}
