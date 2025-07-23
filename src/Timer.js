import { useState, useEffect, useRef } from "react";

function Timer({ onClose, onSave }) {
  const [seconds, setSeconds] = useState(0); //計秒數
  const [isRunning, setIsRunning] = useState(true); //是否在計時
  const timerRef = useRef(null); //setInterval的ID

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const time = (total) => {
    const hrs = String(Math.floor(total / 3600)).padStart(2, "0");
    const mins = String(Math.floor(total % 3600 / 60)).padStart(2, "0");
    const secs = String(Math.floor(total % 60)).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div className="modal-overlay">
      <div className="showTime">
        <div className="btn">
          <button onClick={() => setIsRunning(!isRunning)}>
            {isRunning ? "暫停" : "繼續"}
          </button>
          <button onClick={() => onSave(time(seconds))}>儲存</button>
          <button onClick={() => setSeconds(0)}>歸零</button>
          <button
            onClick={() => {
              clearInterval(timerRef.current);
              onClose();
            }}
          >關閉</button>
        </div>
        <h1>{time(seconds)}</h1>
      </div>
    </div>
  );
}
export default Timer;
