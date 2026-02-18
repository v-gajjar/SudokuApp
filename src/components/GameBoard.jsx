import { useRef, useEffect } from "react";
import { Cell } from "./Cell";

export function GameBoard({
  board,
  candidates,
  givenCells,
  fillMode,
  selectedCell,
  conflictingCells,
  autoCheck,
  onCellSelect,
}) {
  const containerRef = useRef(null);
  const boardRef = useRef(null);

  useEffect(() => {
    const sync = () => {
      if (boardRef.current?.parentElement) {
        const w = containerRef.current?.getBoundingClientRect().width ?? 320;
        boardRef.current.style.height = `${w}px`;
      }
    };
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [board]);

  const blocks = [];
  for (let br = 0; br < 3; br++) {
    for (let bc = 0; bc < 3; bc++) {
      const cells = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          const row = br * 3 + i;
          const col = bc * 3 + j;
          const cellKey = `${row}-${col}`;
          cells.push(
            <Cell
              key={cellKey}
              value={board[row][col]}
              candidates={candidates?.[row]?.[col]}
              isGiven={givenCells?.[row]?.[col]}
              fillMode={fillMode}
              cellId={`cell-${row}-${col}`}
              isSelected={
                selectedCell?.row === row && selectedCell?.col === col
              }
              hasConflict={autoCheck && conflictingCells?.has(cellKey)}
              onClick={() => onCellSelect?.({ row, col })}
            />,
          );
        }
      }
      blocks.push(
        <div
          key={`block-${br}-${bc}`}
          className="grid grid-cols-3 border-2 border-black dark:border-brand-500"
        >
          {cells}
        </div>,
      );
    }
  }

  return (
    <div className="relative w-full" ref={containerRef}>
      <div
        ref={boardRef}
        className="grid w-full grid-cols-3 overflow-hidden rounded-sm border-2 border-black bg-white dark:border-brand-500 dark:bg-brand-800"
        id="gameBoard"
      >
        {blocks}
      </div>
    </div>
  );
}
