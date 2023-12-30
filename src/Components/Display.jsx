import styles from "./Display.module.css";

function Display({ displayValue , themeflag}) {
  return (
    <input
      className={`${themeflag === 0 ? styles.display : styles.displaydark}`}
      type="text"
      readOnly
      value={displayValue}></input>
  );
}
export default Display;
