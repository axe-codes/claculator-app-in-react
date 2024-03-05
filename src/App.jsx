import { useState } from "react";
import "./App.css";
import CalButtons from "./componants/CalButtons";
import Display from "./componants/Display";

function App() {
  const buttonlist = [
    "C",
    "\u2190",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "00",
    "0",
    ".",
    "=",
  ];

  const [calVal, setCalVal] = useState("");

  const [pResult, setpResult] = useState("");

  const onBtnClick = (btn, event) => {
    if (btn === "C") {
      setCalVal("");
      setpResult("");
    } else if (event.target.id === "button_1") {
      const displayValue = calVal.slice(0, -1);
      setCalVal(displayValue);
    } else if (btn === "=") {
      if (calVal.includes("%")) {
        const cal = calVal;
        // Extract values from the string
        const [whole, percentage] = cal.split("%").map(Number);
        // Perform the calculation
        const result = (percentage / 100) * whole;
        setCalVal(result);
        //setpResult(`Result is :${result}`);
      } else {
        const result = eval(calVal);
        //setpResult(`Result is :${result}`);
        setCalVal(result);
      }
    } else {
      const displayValue = calVal + btn;
      setCalVal(displayValue);
    }
  };

  return (
    <>
      <div className="calculator">
        <h3 className="h3-heading">Calculator App</h3>
        <Display displayValue={calVal} />
        <p className="h3-heading">{pResult}</p>
        <CalButtons btns={buttonlist} onBtnClick={onBtnClick} />
        <br />
      </div>
    </>
  );
}

export default App;
