export function Cell({
  value,
  candidates,
  isGiven,
  fillMode,
  cellId,
  isSelected,
  hasConflict,
  onClick,
}) {
  const isEmpty = value === 0 || value === null || value === undefined;
  const cellCandidates = candidates ?? [];

  const numberClass = isGiven
    ? "text-black dark:text-brand-200"
    : "text-brand-500 dark:text-brand-400";

  const conflictClass = hasConflict ? "text-red-600 dark:text-red-400" : "";
  const selectedClass = isSelected ? "bg-error text-white" : "";
  const borderClass = "border border-gray-300 dark:border-brand-600";

  if (fillMode) {
    return (
      <div
        className={`flex aspect-square min-h-0 cursor-pointer items-center justify-center text-base font-bold ${borderClass} ${selectedClass || numberClass} ${!isSelected && conflictClass}`}
        id={cellId}
        onClick={onClick}
      >
        {isEmpty ? "" : value}
      </div>
    );
  }

  return (
    <div
      className={`grid aspect-square min-h-0 cursor-pointer grid-cols-3 grid-rows-3 place-items-center text-[10px] ${borderClass} ${selectedClass}`}
      id={cellId}
      onClick={onClick}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => {
        const isPenciled = cellCandidates.includes(n);
        return (
          <span
            key={n}
            className={
              isPenciled && !isSelected
                ? "font-semibold text-brand-500 dark:text-brand-400"
                : isPenciled && isSelected
                  ? "font-semibold text-white"
                  : "text-gray-300 dark:text-brand-700"
            }
          >
            {n}
          </span>
        );
      })}
    </div>
  );
}
