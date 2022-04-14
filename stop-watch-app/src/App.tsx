import React, { useState } from "react";
import "./App.css";
import StopWatchInitial from "./StopWatchInitial";
import StopWatchRunning from "./StopWatchRunning";
import StopWatchStopped from "./StopWatchStopped";

export const STATUSES = ["initial", "running", "stopped"];
export type updateInitialFunc = (startTimeMs: number) => void;
export type updateStopFunc = (endTimeMs: number, startTimeMs: number) => void;
export type updateResumeFunc = () => void;
export type updateReset = () => void;
export type bookmarkLap = (timeMs: string) => void;

function App() {
  const [status, setStatus] = useState(STATUSES[0]);
  const [startTimeMs, setStartTimeMs] = useState(0);
  const [endTimeMs, setEndTimeMs] = useState(0);
  const [lapQueue, setLapQueue] = useState<string[]>([]);

  function updateInitial(startTimeMs: number) {
    setStatus(STATUSES[1]);
    setStartTimeMs(startTimeMs);
    setEndTimeMs(startTimeMs);
  }
  function updateStop(endTimeMs: number, startTimeMs: number) {
    setStatus(STATUSES[2]);
    setEndTimeMs(endTimeMs);
    setStartTimeMs(startTimeMs);
  }
  function updateResume() {
    setStatus(STATUSES[1]);
  }
  function updateReset() {
    setStatus(STATUSES[0]);
    setStartTimeMs(0);
    setEndTimeMs(0);
    setLapQueue([]);
  }
  function bookmarkLap(durationMs: string) {
    if (lapQueue.length >= 10) {
      setLapQueue((oldState) => {
        oldState.shift();
        return oldState;
      });
    }
    setLapQueue((oldState) => {
      return [...oldState, durationMs];
    });
  }

  return (
    <>
      {status === STATUSES[0] && (
        <StopWatchInitial updateInitial={updateInitial} />
      )}
      {status === STATUSES[1] && (
        <StopWatchRunning
          startTimeMs={startTimeMs}
          endTimeMs={endTimeMs}
          updateStop={updateStop}
          laps={lapQueue}
          bookmarkLap={bookmarkLap}
        />
      )}
      {status === STATUSES[2] && (
        <StopWatchStopped
          startTimeMs={startTimeMs}
          endTimeMs={endTimeMs}
          updateReset={updateReset}
          updateResume={updateResume}
          laps={lapQueue}
        />
      )}
    </>
  );
}

export default App;
