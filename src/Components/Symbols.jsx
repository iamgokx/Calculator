import styles from "./Symbol.module.css";

function Symbols({themeflag}) {

  const symbollist = ["Cos", "Sin", "Tan", "÷", "π", "α", "β"];

  return (
    <>
      <div className={styles.symbolcont}>
        {symbollist.map((sybl) => (
          <div key={sybl} className={`${themeflag === 0 ? styles.symbol : styles.symboldark}`}>
            {sybl}
          </div>
        ))}
      </div>
    </>
  );
}
export default Symbols;
