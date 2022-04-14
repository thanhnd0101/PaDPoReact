import React from "react";
import { Button, Typography } from "@mui/material";
import Timer from "./Timer";
import { updateReset, updateResumeFunc } from "./App";
import Laps from "./Laps";

export default function StopWatchStopped({
  startTimeMs,
  endTimeMs,
  updateReset,
  updateResume,
  laps,
}: {
  startTimeMs: number;
  endTimeMs: number;
  updateReset: updateReset;
  updateResume: updateResumeFunc;
  laps: string[],
}) {
  return (
    <>
      <Typography variant="h5">Stopped</Typography>
      <Timer isStopped={true} startTimeMs={startTimeMs} endTimeMs={endTimeMs}></Timer>
      <Button variant="contained" color="success" onClick={updateReset}>
        Reset
      </Button>

      <Button variant="contained" color="success" onClick={updateResume}>
        Resume
      </Button>

      
      <Typography variant='h5'>Laps</Typography>
      <Laps laps={laps}/>

    </>
  );
}
