import React from "react";
import LapItem from "./LapItem";

export default function Laps({ laps }: { laps: string[] }) {
  return (
    <>
      {laps.map((lap) => (
        <LapItem value={lap} key={lap}/>
      ))}
    </>
  );
}
