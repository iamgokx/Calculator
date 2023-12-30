import styles from "./Blob.module.css";
function Blob({themeflag}) {
  return (
    <div className={`${themeflag === 0 ? styles.bloblight : styles.blobldark}`}></div>
  );
}
export default Blob;
