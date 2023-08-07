import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Count />
    </div>
  );
}

function Count() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  function resetHandler() {
    setStep((s) => 0);
    setCount((c) => 0);
  }

  return (
    <>
      <div className="counterContainer">
        <input
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          type="range"
          min="0"
          max="100"
        />
        <h2>{step}</h2>
      </div>
      <div className="counterContainer">
        <button
          onClick={() => setCount((c) => (step ? c + step : c + 1))}
          className="btn"
        >
          +
        </button>
        {/* <h2>Count: {count}</h2> */}
        <input
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          type="text"
          placeholder="Number..."
        />
        <button
          onClick={() => setCount((c) => (step ? c - step : c - 1))}
          className="btn"
        >
          -
        </button>
      </div>
      <PrintDate count={count} />
      {count ? (
        <button onClick={resetHandler} className="resetBTN">
          Reset
        </button>
      ) : null}
    </>
  );
}
function PrintDate(props) {
  const count = props.count;
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <p className="printDate">
      {count === 0
        ? "Today is "
        : count > 0
        ? `${count} Days Left from `
        : `${Math.abs(count)} Days Ago from `}
      {date.toDateString()}
    </p>
  );
}
