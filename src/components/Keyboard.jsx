import { DeleteIcon } from "./icons";

const NUMS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function Keyboard({ selectedNumber, onNumber, onDelete }) {
  return (
    <div className="grid grid-cols-5 gap-2">
      {NUMS.map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onNumber?.(n)}
          className={`flex aspect-square items-center justify-center rounded-full text-base font-bold transition-colors ${
            selectedNumber === n
              ? "bg-brand-500 text-white"
              : "bg-brand-200 text-black dark:bg-brand-700 dark:text-brand-100"
          }`}
        >
          {n}
        </button>
      ))}
      <button
        type="button"
        onClick={onDelete}
        className="flex aspect-square items-center justify-center rounded-full bg-brand-200 text-black dark:bg-brand-700 dark:text-brand-100"
      >
        <DeleteIcon />
      </button>
    </div>
  );
}
