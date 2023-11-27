import React from "react";
import { useState } from "react";
import "./index.css";
function Counter() {
  const [count, setCount] = useState(0);
  const Increament = () => setCount(count + 1);
  const Decreament = () => setCount(count - 1);

  return (
    <div className="container">
      <h>{count}</h>
      <div className="btns-container">
        <button className="increament" onClick={Increament}>
          +
        </button>
        <button className="increament" onClick={Decreament}>
          -
        </button>
      </div>
    </div>
  );
}
export default Counter;
