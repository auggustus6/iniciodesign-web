import styles from "./FourSection.module.css";
import design from "../../assets/design.svg";
import developerApp from "../../assets/developerApp.svg";

const FourSection = ({ text, paragraph }) => {
  return (
    <div className={styles.bgContainer}>
      <div className={styles.container}>
        <div className={styles.containerContent}>
          <div className={styles.content}>
            <div className={styles.containerText}>
              <h1>{text}</h1>
              <p>{paragraph}</p>
            </div>
            <div className={styles.containerCard}>
              <img src={design} alt="Imagem com circulos e textos" />
              <img
                className={styles.image}
                src={developerApp}
                alt="Imagem de duas pessoas ao lado de um smartphone"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourSection;
