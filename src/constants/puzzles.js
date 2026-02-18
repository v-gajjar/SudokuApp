// 0 = empty cell. Each puzzle is a valid Sudoku with a unique solution.
export const PUZZLES = {
  easyLevel: [
    [9, 0, 7, 5, 0, 0, 4, 0, 0],
    [7, 4, 5, 6, 9, 0, 0, 0, 8],
    [0, 0, 6, 0, 0, 7, 0, 0, 0],
    [0, 0, 0, 2, 7, 0, 0, 0, 0],
    [2, 0, 7, 1, 0, 0, 0, 8, 0],
    [0, 0, 3, 9, 0, 5, 8, 2, 7],
    [4, 0, 0, 0, 6, 7, 1, 8, 0],
    [5, 0, 0, 0, 2, 0, 7, 4, 0],
    [3, 7, 0, 5, 1, 0, 0, 0, 2],
  ],
  mediumLevel: [
    [0, 2, 0, 6, 0, 8, 0, 0, 0],
    [5, 8, 0, 0, 0, 9, 7, 0, 0],
    [0, 0, 0, 0, 4, 0, 0, 0, 0],
    [3, 7, 0, 0, 0, 0, 5, 0, 0],
    [6, 0, 0, 0, 0, 0, 0, 0, 4],
    [0, 0, 8, 0, 0, 0, 0, 1, 3],
    [0, 0, 0, 0, 2, 0, 0, 0, 0],
    [0, 0, 9, 8, 0, 0, 0, 3, 6],
    [0, 0, 0, 3, 0, 6, 0, 9, 0],
  ],
  hardLevel: [
    [0, 0, 0, 6, 0, 0, 4, 0, 0],
    [7, 0, 0, 0, 0, 3, 6, 0, 0],
    [0, 0, 0, 0, 9, 1, 0, 8, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 5, 0, 1, 8, 0, 0, 0, 3],
    [0, 0, 0, 3, 0, 6, 0, 4, 5],
    [0, 4, 0, 2, 0, 0, 0, 6, 0],
    [9, 0, 3, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 1, 0, 0],
  ],
};

function pickRandom() {
  const ids = Object.keys(PUZZLES);
  const key = ids[Math.floor(Math.random() * ids.length)];
  return PUZZLES[key].map((row) => [...row]);
}

export function getPuzzleForDifficulty(difficulty) {
  if (difficulty === "randomLevel") return pickRandom();
  const puzzle = PUZZLES[difficulty] ?? PUZZLES.easyLevel;
  return puzzle.map((row) => [...row]);
}
