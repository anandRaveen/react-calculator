import "./styles.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./Components/Display";
import Keypad from "./Components/Keypad";

export default function App() {
  const [result, setResult] = useState("0");
  const [expression, setExpression] = useState("");
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const operators = ["-", "+", "*", "/"];
  /*const symbols = [
    { label: "+", value: "+" },
    { label: "-", value: "-" },
    { label: "×", value: "*" },
    { label: "÷", value: "/" }
  ];*/
  //console.log(expression);
  const handlekeyPress = (key, value) => {
    if (numbers.includes(key)) {
      setExpression((prevValue) => prevValue + key);
    }
    if (operators.includes(value)) {
      if (expression === "") {
        return;
      }
      setExpression((prevValue) => prevValue + value);
    }
    if (key === "C") {
      setExpression("");
      setResult("");
    }
    if (key === ".") {
      if (expression === "") {
        return;
      }
      let lastChar = expression.slice(-1);
      if (operators.includes(lastChar)) {
        return;
      }
      if (numbers.includes(lastChar)) {
        setExpression((prevValue) => prevValue + value);
      }
    }

    //calculateResult();
  };
  useEffect(() => {
    calculateResult(expression);
  }, [expression]);
  const calculateResult = (exp) => {
    console.log("in here" + exp);
    let lastChar = exp.slice(-1);
    console.log("last Char" + lastChar);
    if (operators.includes(lastChar) || lastChar === ".") {
      console.log("exp not valid");
    } else {
      let ans = eval(exp);
      console.log(ans);
      setResult(ans);
    }
    //console.log("result " + exp);
    //setResult(eval(expression));
  };
  return (
    <div className="main_container h-100 d-flex align-items-center justify-content-center">
      <div class=" calc_container d-flex flex-column m-auto mt-5">
        <Display result={result} expression={expression} />
        <Keypad handlekeyPress={handlekeyPress} />
      </div>
    </div>
  );
}
