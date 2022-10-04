import styles from "./Circle.module.css";
import t from "../../assets/t.svg";
const Circle = ({ text, paragraph }) => {
  return (
    <div className={styles.container}>
      <div className={styles.boxContainer}>
        <img src={t} alt="" />
      </div>
      <div className={styles.content}>
        <h3>{text}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default Circle;
