import React, { useState, useEffect } from "react";

function ClearNon() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
  }, [isRunning]);

  return (
    <div>
      <h1>{seconds}초</h1>
      <button onClick={() => setIsRunning(true)}>시작</button>
      <button onClick={() => setIsRunning(false)}>정지</button>
    </div>
  );
}

export default ClearNon;
