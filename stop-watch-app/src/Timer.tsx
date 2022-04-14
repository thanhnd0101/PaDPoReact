import { Typography } from "@mui/material";
import moment from "moment";
import React, {
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
type TimerProps = {
  isRunning?: boolean;
  isStopped?: boolean;
  startTimeMs?: number;
  endTimeMs?: number;
};

export default forwardRef(function Timer(
  {
    isRunning,
    isStopped,
    startTimeMs = 0,
    endTimeMs = 0,
  }: PropsWithChildren<TimerProps>,
  ref
) {
  const [now, setNow] = useState(moment.now().valueOf());
  const [durationMs, setDurationMs] = useState(endTimeMs - startTimeMs);
  const [currentStartTimeMs] = useState(now - durationMs);

  useImperativeHandle(ref, () => ({
    getDuration: () => durationMs,
    getNow: () => now,
  }));

  useEffect(() => {
    if (isRunning) {
      const id = requestAnimationFrame(() => {
        const newNow = moment.now().valueOf();
        const duration = newNow - currentStartTimeMs;
        setDurationMs(duration);
        setNow(newNow);
      });
      return () => {
        cancelAnimationFrame(id);
      };
    }
  });

  return (
    <Typography>
      {isRunning || isStopped
        ? useDesiredTimeFormat(durationMs)
        : "00:00:00.000"}
    </Typography>
  );
});

export const useDesiredTimeFormat = (timeMs: number | undefined) => {
  if (!timeMs) {
    return "00:00:00.000";
  }
  const hh = String(Math.floor(timeMs / 1000 / 60 / 60) % 60).padStart(2, "0");
  const mm = String(Math.floor(timeMs / 1000 / 60) % 60).padStart(2, "0");
  const ss = String(Math.floor(timeMs / 1000) % 60).padStart(2, "0");
  const zz = String(timeMs % 1000).padStart(3, "0");

  return `${hh}:${mm}:${ss}.${zz}`;
};
