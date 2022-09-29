import styles from "./Circle.module.css";
import t from "../../assets/t.svg";
const Circle = ({ tt, pp }) => {
  return (
    <div className={styles.container}>
      <div className={styles.boxContainer}>
        <img src={t} alt="" />
      </div>
      <div className={styles.content}>
        <h3>{tt}</h3>
        <p>{pp}</p>
      </div>
    </div>
  );
};

export default Circle;
