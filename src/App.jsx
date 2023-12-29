import { useState } from "react";
import styles from "./App.module.css";
import BtnContainer from "./Components/BtnContainer";
import Display from "./Components/Display";
import Blob from "./Components/Blob";
import Symbols from "./Components/Symbols";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      try {
        const res = eval(calVal);
        setCalVal(res.toString());
      } catch (error) {
        setCalVal("Error");
      }
    } else if (buttonText === "") {
      const newDisplayvalue = calVal.slice(0, -1);
      setCalVal(newDisplayvalue);
    } else {
      const lastChar = calVal.charAt(calVal.length - 1);

      if (isOperation(lastChar) && isOperation(buttonText)) {
        const newDisplayvalue = calVal.slice(0, -1) + buttonText;
        setCalVal(newDisplayvalue);
      } else {
        const newDisplayvalue = calVal + buttonText;
        setCalVal(newDisplayvalue || "");
      }
    }
  };

  const isOperation = (char) => {
    return ["+", "-", "*", "/"].includes(char);
  };
  return (
    <>
    <div className={styles.hero}>
      <p>React Calculator</p>
      <a href="https://www.instagram.com/go.kullllll" target="_blank">©Gokul</a>
    </div>
      <div className={styles.calculator}>
        <div className={styles.calCont}>
          <Display displayValue={calVal}></Display>
          <BtnContainer onButtonClick={onButtonClick}></BtnContainer>
        </div>
      </div>

      <Blob />
      <Symbols></Symbols>
    
    </>
  );
}

export default App;
