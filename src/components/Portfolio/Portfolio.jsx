import PortDesk from "../PortDesck/PortDesk";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <div className={styles.bgContainer}>
      <div className={styles.container}>
        <div className={styles.containerContent}>
          <h1>Meu portfólio</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
          <PortDesk />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
