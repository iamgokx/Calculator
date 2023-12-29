import styles from "./Symbol.module.css";

function Symbols() {

  const symbollist = ["Cos", "Sin", "Tan", "÷", "π", "α", "β"];

  return (
    <>
      <div className={styles.symbolcont}>
        {symbollist.map((sybl) => (
          <div key={sybl} className={`${styles.symbol}`}>
            {sybl}
          </div>
        ))}
      </div>
    </>
  );
}
export default Symbols;
