import { useState } from "react";
import "./App.css";
import Timer from "./Timer";
import TimeRecord from "./TimeRecord";

function App() {
  const [showTimer, setShowTimer] = useState(false);
  const [records, setRecords] = useState([]);
  const handleSave = (timeStr) => {
    setRecords((prev) => [...prev, timeStr]);
  };
  const handleClear = () => {
    setRecords([]);
  };

  return (
    <div className="app">
      {!showTimer && (
        <>
          <div className="btn-group">
            <button className="btn-start" onClick={() => setShowTimer(true)}>開始計時</button>
            <button className="btn-end" onClick={handleClear}>清除紀錄</button>
          </div>
          <div>{records.length > 0 && <TimeRecord records={records} />}</div>
        </>
      )}
      {showTimer && (
        <Timer onClose={() => setShowTimer(false)} onSave={handleSave} />
      )}
    </div>
  );
}

export default App;
