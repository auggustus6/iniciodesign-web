import styles from "./FiveSection.module.css";
import stylesButton from "../Button/Button.module.css";
import Button from "../Button/Button";
import personAndPhone from "../../assets/personAndPhone.svg";

const FiveSection = ({ text, paragraph }) => {
  return (
    <div className={styles.bgContainer}>
      <div className={styles.container}>
        <div className={styles.containerContent}>
          <div className={styles.contentText}>
            <h1>{text}</h1>
            <p>{paragraph}</p>
            <Button classname={stylesButton.btnPrimaryLarge}>
              Entrar em contato
            </Button>
          </div>
          <div className={styles.containerImg}>
            <img src={personAndPhone} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiveSection;
