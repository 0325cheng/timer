function TimeRecord({ records }) {
  const time = (total) => {
    const hrs = String(Math.floor(total / 3600)).padStart(2, "0");
    const mins = String(Math.floor(total % 3600 / 60)).padStart(2, "0");
    const secs = String(Math.floor(total % 60)).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };
  
    const parseSeconds = (time) => {
    const [h, m, s] = time.split(":").map(Number);
    return h * 3600 + m * 60 + s;
  };
  //累計秒數
  const accumulated = [];
  let sum = 0;
  for (let r of records) {
    sum += parseSeconds(r);
    accumulated.push(sum);
  }
  return (
    <div className="record">
      <div className="time-record">
        <h3>秒數紀錄</h3>
        <ul>
          {records.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>

      <div className="acc-time-record">
        <h3>累積秒數</h3>
        <ul>
          {accumulated.map((sec, i) => (
            <li key={i}>{time(sec)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TimeRecord;
