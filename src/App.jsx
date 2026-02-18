import { useState, useEffect } from "react";
import { useTheme } from "./hooks/useTheme";
import { useGameState } from "./hooks/useGameState";
import { useTimer } from "./hooks/useTimer";
import { DIFFICULTY_LEVELS } from "./constants/practiceBoard";
import { TopNav } from "./components/TopNav";
import { GameBoard } from "./components/GameBoard";
import { Keyboard } from "./components/Keyboard";
import { PlayMode } from "./components/PlayMode";
import { HelpDialog } from "./components/HelpDialog";
import { SettingsDialog } from "./components/SettingsDialog";
import { WinDialog } from "./components/WinDialog";

function getDifficultyLabel(id) {
  return DIFFICULTY_LEVELS.find((l) => l.id === id)?.label ?? "Easy";
}

export function App() {
  const { isDark, toggle } = useTheme();
  const game = useGameState();
  const timer = useTimer(game.clockVisible);
  const [helpOpen, setHelpOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [winDismissed, setWinDismissed] = useState(false);

  useEffect(() => {
    if (game.hasWon) timer.pause();
  }, [game.hasWon, timer]);

  useEffect(() => {
    setWinDismissed(false);
  }, [game.difficulty]);

  return (
    <div className="min-h-screen bg-white font-sans dark:bg-brand-900">
      <div className="mx-auto flex min-h-screen max-w-[420px] flex-col px-4 pb-6 pt-4">
        <TopNav
          isDark={isDark}
          onThemeToggle={toggle}
          onHelp={() => setHelpOpen(true)}
          onSettings={() => setSettingsOpen(true)}
          difficultyLabel={getDifficultyLabel(game.difficulty)}
          timerDisplay={timer.display}
          clockVisible={game.clockVisible}
          onPause={timer.pause}
        />

        <div className="mt-4 flex flex-col gap-2">
          <div className="relative">
            <GameBoard
              board={game.board}
              candidates={game.candidates}
              givenCells={game.givenCells}
              fillMode={game.fillMode}
              selectedCell={game.selectedCell}
              conflictingCells={game.conflictingCells}
              autoCheck={game.autoCheck}
              onCellSelect={game.setSelectedCell}
            />
            <HelpDialog open={helpOpen} onClose={() => setHelpOpen(false)} />
            <SettingsDialog
              open={settingsOpen}
              onClose={() => setSettingsOpen(false)}
              difficulty={game.difficulty}
              setDifficulty={game.setDifficulty}
              autoCheck={game.autoCheck}
              setAutoCheck={game.setAutoCheck}
              clockVisible={game.clockVisible}
              setClockVisible={game.setClockVisible}
            />
            <WinDialog
              open={game.hasWon && !winDismissed}
              onClose={() => setWinDismissed(true)}
              time={timer.display}
            />
          </div>

          <div className="space-y-3 pt-2 text-brand-950 dark:text-brand-100">
            <Keyboard
              selectedNumber={game.selectedNumber}
              onNumber={game.onNumber}
              onDelete={game.onDelete}
            />
            <PlayMode fillMode={game.fillMode} onModeChange={game.setMode} />
          </div>
        </div>
      </div>
    </div>
  );
}
