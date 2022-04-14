import React from "react";
import { Button, Typography } from "@mui/material";
import Timer from "./Timer";
import { STATUSES, updateInitialFunc } from "./App";
import moment from "moment";

export default function StopWatchInitial({
    updateInitial,
}: {
    updateInitial: updateInitialFunc;
}) {
  function hanleStartDuration() {
    updateInitial(moment.now().valueOf());
  }
  return (
    <>
      <Typography variant="h5">Initial</Typography>
      <Timer isRunning={false}></Timer>
      <Button variant="contained" color="success" onClick={hanleStartDuration}>
        Start
      </Button>
    </>
  );
}
