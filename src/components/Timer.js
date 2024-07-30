import React, { useState, useEffect } from "react";

const Timer = ({ onTimeUp }) => {
  const [seconds, setSeconds] = useState(300); // 5 minutes

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timerId);
    } else {
      onTimeUp();
    }
  }, [seconds, onTimeUp]);

  return (
    <div>
      <h2> Time Remaining: {seconds}s </h2>{" "}
    </div>
  );
};

export default Timer;
