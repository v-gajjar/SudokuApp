import { useState, useCallback, useMemo } from "react";
import { getPuzzleForDifficulty } from "../constants/puzzles";
import { isBoardSolved, getConflictingCells } from "../utils/sudoku";

function getGivenCells(board) {
  return board.map((row) => row.map((v) => v !== 0));
}

function deepCopyBoard(board) {
  return board.map((row) => [...row]);
}

function createEmptyCandidates() {
  return Array(9)
    .fill(null)
    .map(() =>
      Array(9)
        .fill(null)
        .map(() => []),
    );
}

export function useGameState() {
  const [difficulty, setDifficultyState] = useState("easyLevel");
  const [board, setBoard] = useState(() =>
    deepCopyBoard(getPuzzleForDifficulty("easyLevel")),
  );
  const [candidates, setCandidates] = useState(createEmptyCandidates);
  const [fillMode, setFillMode] = useState(true);
  const [clockVisible, setClockVisible] = useState(true);
  const [autoCheck, setAutoCheck] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [selectedCell, setSelectedCellState] = useState(null);

  const initialPuzzle = useMemo(
    () => getPuzzleForDifficulty(difficulty),
    [difficulty],
  );
  const givenCells = useMemo(
    () => getGivenCells(initialPuzzle),
    [initialPuzzle],
  );

  const setDifficulty = useCallback((d) => {
    setDifficultyState(d);
    setBoard(deepCopyBoard(getPuzzleForDifficulty(d)));
    setCandidates(createEmptyCandidates());
    setSelectedCellState(null);
    setSelectedNumber(null);
  }, []);

  const hasWon = useMemo(() => isBoardSolved(board), [board]);
  const conflictingCells = useMemo(
    () => (autoCheck ? getConflictingCells(board) : new Set()),
    [board, autoCheck],
  );

  const setMode = useCallback((fill) => setFillMode(fill), []);

  const setCellValue = useCallback(
    (row, col, value) => {
      if (givenCells[row][col]) return;
      setBoard((prev) => {
        const next = deepCopyBoard(prev);
        next[row][col] = value;
        return next;
      });
      setCandidates((prev) => {
        const next = prev.map((r) => r.map((c) => [...c]));
        next[row][col] = [];
        return next;
      });
    },
    [givenCells],
  );

  const toggleCandidate = useCallback(
    (row, col, num) => {
      if (givenCells[row][col]) return;
      setCandidates((prev) => {
        const next = prev.map((r) => r.map((c) => [...c]));
        const cell = next[row][col];
        const idx = cell.indexOf(num);
        if (idx >= 0) cell.splice(idx, 1);
        else cell.push(num);
        cell.sort((a, b) => a - b);
        return next;
      });
    },
    [givenCells],
  );

  const handleNumberSelect = useCallback(
    (n) => {
      setSelectedNumber(n);
      if (!selectedCell || givenCells[selectedCell.row][selectedCell.col])
        return;
      const { row, col } = selectedCell;
      if (fillMode) {
        setCellValue(row, col, n);
      } else {
        toggleCandidate(row, col, n);
      }
    },
    [selectedCell, givenCells, setCellValue, toggleCandidate, fillMode],
  );

  const handleDelete = useCallback(() => {
    setSelectedNumber(null);
    if (!selectedCell || givenCells[selectedCell.row][selectedCell.col]) return;
    const { row, col } = selectedCell;
    if (fillMode) {
      setCellValue(row, col, 0);
    } else {
      setCandidates((prev) => {
        const next = prev.map((r) => r.map((c) => [...c]));
        next[row][col] = [];
        return next;
      });
    }
  }, [selectedCell, givenCells, setCellValue, fillMode]);

  const handleCellSelect = useCallback(
    (cell) => {
      setSelectedCellState(cell);
      if (!cell || givenCells[cell.row][cell.col] || selectedNumber == null)
        return;
      if (fillMode) {
        setCellValue(cell.row, cell.col, selectedNumber);
      } else {
        toggleCandidate(cell.row, cell.col, selectedNumber);
      }
    },
    [givenCells, selectedNumber, setCellValue, toggleCandidate, fillMode],
  );

  return {
    board,
    candidates,
    givenCells,
    hasWon,
    conflictingCells,
    fillMode,
    guessMode: !fillMode,
    difficulty,
    setDifficulty,
    clockVisible,
    setClockVisible,
    autoCheck,
    setAutoCheck,
    setMode,
    selectedNumber,
    selectedCell,
    setSelectedCell: handleCellSelect,
    onNumber: handleNumberSelect,
    onDelete: handleDelete,
  };
}
