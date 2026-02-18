const VALID_SET = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);

function isValidSet(values) {
  return values.length === 9 && values.every((n) => VALID_SET.has(n));
}

function getRow(board, row) {
  return board[row];
}

function getCol(board, col) {
  return board.map((row) => row[col]);
}

function getBlock(board, blockRow, blockCol) {
  const result = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      result.push(board[blockRow * 3 + i][blockCol * 3 + j]);
    }
  }
  return result;
}

export function isBoardSolved(board) {
  if (!board || board.length !== 9) return false;

  for (let i = 0; i < 9; i++) {
    if (board[i].length !== 9) return false;
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) return false;
    }
  }

  for (let i = 0; i < 9; i++) {
    if (!isValidSet(getRow(board, i))) return false;
    if (!isValidSet(getCol(board, i))) return false;
  }

  for (let br = 0; br < 3; br++) {
    for (let bc = 0; bc < 3; bc++) {
      if (!isValidSet(getBlock(board, br, bc))) return false;
    }
  }

  return true;
}

export function getConflictingCells(board) {
  const conflicts = new Set();

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const val = board[r][c];
      if (val === 0) continue;

      const row = getRow(board, r);
      const col = getCol(board, c);
      const blockRow = Math.floor(r / 3);
      const blockCol = Math.floor(c / 3);
      const block = getBlock(board, blockRow, blockCol);

      const inRow = row.filter((n) => n === val).length;
      const inCol = col.filter((n) => n === val).length;
      const inBlock = block.filter((n) => n === val).length;

      if (inRow > 1 || inCol > 1 || inBlock > 1) {
        conflicts.add(`${r}-${c}`);
      }
    }
  }
  return conflicts;
}
