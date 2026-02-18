import { useState, useEffect, useRef } from "react";

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function useTimer(active = true) {
  const [seconds, setSeconds] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!active || paused) return;
    intervalRef.current = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(intervalRef.current);
  }, [active, paused]);

  return {
    display: formatTime(seconds),
    pause: () => setPaused(true),
    resume: () => setPaused(false),
  };
}
