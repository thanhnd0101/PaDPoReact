import { Button, Typography } from "@mui/material";
import moment from "moment";
import React, { useRef } from "react";
import { bookmarkLap, updateStopFunc } from "./App";
import Laps from "./Laps";
import Timer, { useDesiredTimeFormat } from "./Timer";

export default function StopWatchRunning({
  startTimeMs,
  endTimeMs,
  updateStop,
  laps,
  bookmarkLap,
}: {
  startTimeMs: number;
  endTimeMs: number;
  updateStop: updateStopFunc;
  laps: string[];
  bookmarkLap: bookmarkLap;
}) {
  const ref = useRef<{ getDuration: () => number; getNow: () => number }>();

  function handleStop() {
    if (ref.current) {
      updateStop(
        ref.current.getNow(),
        ref.current.getNow() - ref.current.getDuration()
      );
    }
  }

  function hanldeBookmark() {
    if (ref.current) {
      bookmarkLap(useDesiredTimeFormat(ref.current.getDuration()));
    }
  }

  return (
    <>
      <Typography variant="h5">Running</Typography>
      <Timer
        isRunning={true}
        startTimeMs={startTimeMs}
        endTimeMs={endTimeMs}
        ref={ref}
      ></Timer>
      <Button variant="contained" color="success" onClick={handleStop}>
        Stop
      </Button>

      <Button variant="contained" color="success" onClick={hanldeBookmark}>
        Lap
      </Button>

      <Typography variant="h5">Laps</Typography>
      <Laps laps={laps} />
    </>
  );
}
