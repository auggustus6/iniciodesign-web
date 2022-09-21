import styles from "./Card.module.css";

const Card = ({ img, text, paragraph }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt="" />
      <h3>{text}</h3>
      <p>{paragraph}</p>
    </div>
  );
};

export default Card;
