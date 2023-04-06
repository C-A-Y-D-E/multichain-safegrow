import React from "react";
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Rocket launch in... </h1>

      <div style={{ fontSize: "50px" }}>
        <span>{days}D</span>:<span>{hours}H</span>:<span>{minutes}M</span>:
        <span>{seconds}S</span>
      </div>
    </div>
  );
}

export default MyTimer;
