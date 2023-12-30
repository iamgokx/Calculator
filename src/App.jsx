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
        setCalVal("");
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

  const [flag, setflag] = useState(0);
  const handleThemeBtnClick = () => {
    if (flag == 0) {
      setflag(1)
      } else{
        setflag(0)
      }
  };

  return (
    <>
    <div className={`${
              flag === 1 ? styles.darkblob : styles.lightblob
            }`}></div>
      <div className={styles.hero}>
        <p>React Calculator</p>
        <a href="https://www.instagram.com/go.kullllll" target="_blank">
          ©Gokul
        </a>
      </div>
      <div className={`${
              flag === 0 ? styles.calculatorlight : styles.calculatordark
            }`}>
        <div className={`${flag=== 0 ? styles.calCont : styles.calContdark}`}>
          <div
            className={`${
              flag === 0 ? styles.thmebtnlight : styles.themebtndark
            }`}
            onClick={handleThemeBtnClick}></div>
          <Display displayValue={calVal} themeflag={flag}></Display>
          <BtnContainer onButtonClick={onButtonClick} themeflag={flag}></BtnContainer>
        </div>
      </div>

      <Blob themeflag={flag}/>
      <Symbols themeflag={flag}></Symbols>
    </>
  );
}

export default App;
