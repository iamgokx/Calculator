import styles from "./BtnContainer.module.css";

function BtnContainer({ onButtonClick , themeflag}) {
  const buttonNames = [
    "%",
    "*",
    "/",
    "",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "=",
    "C",
    "0",
    ".",
  ];
  return (
    <div className={styles.btnContainer}>
      {buttonNames.map((btn) => (
        <button
          key={btn}
          className={`${themeflag === 0 ? styles.calBtn :styles.calBtndark } ${btn === "=" ? styles.equalBtn : ""} ${
            btn === "C" ? styles.btnc : ""
          } ${btn == "" ? styles.backspace : ""}
          ${btn == "+" || btn === "-" || btn === "" ? styles.org : ""}
          ${btn == "%" || btn === "*" || btn === "/" ? styles.blu : ""}
          ${btn == "*" ? styles.magnify : ""}
          `}
          onClick={() => onButtonClick(btn)}>
          {btn}
        </button>
      ))}
    </div>
  );
}
export default BtnContainer;
