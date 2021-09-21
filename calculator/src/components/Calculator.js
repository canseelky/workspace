import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import Model from "./Model";
import { useState } from "react";
import Result from "./Result";
import Operation from "./Operation";
import styles from "./Button.module.css";

const Calculator = () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arr2 = ["+", "-", "/", "*", "="];

  const ADDITION = "+";
  const SUBTRACTION = "-";
  const DIVISION = "/";
  const MULTIPLICATION = "*";
  const EQUAL = "=";

  const [result, setResult] = useState(0);
  const [prevNum, setPrevNum] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(0);

  const getOperation = (operation) => {
    if (operation === ADDITION) {
      console.log("additionButton");
      setResult(result + currentNumber);
    }
    if (operation === SUBTRACTION) {
      console.log("substraction");
      setResult(result - currentNumber);
    }

    if (operation === DIVISION && currentNumber !== 0) {
      setResult(result / currentNumber);
      console.log("result", result);
    }
    if (operation === MULTIPLICATION) {
      if (result === 0) {
        setResult(1);
      }
      setResult(result * currentNumber);
    }
    if (operation === EQUAL) {
      setResult(result);
    }
    setPrevNum(result);
    setCurrentNumber();

    if (isNaN(result)) {
      setResult(0);
    }
  };

  const getNumber = (number) => {
    if (typeof number === "number") {
      console.log("inside getNNumber in Calculator");
      setCurrentNumber(parseInt(number));
      console.log("currentNumber", currentNumber);
      console.log("result", result);
    }
  };
  return (
    <div>
      <Result data-testid="result">{result}</Result>
      <div className={styles.main}>
        <div className={styles.flx}>
          {arr.map((element) => (
            <Button
              key={Math.random().toString()}
              name={element}
              getNumber={getNumber}
            >
              {element}
            </Button>
          ))}
        </div>
        <div className={styles.row}>
          {arr2.map((element) => (
            <Operation getOperation={getOperation}>{element}</Operation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
