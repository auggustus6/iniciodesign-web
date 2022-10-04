import styles from "./FiveSection.module.css";
import personAndPhone from "../../assets/personAndPhone.svg";
import { i18next } from "../../translate/i18n";

const FiveSection = ({ text, paragraph }) => {
  return (
    <div className={styles.bgContainer}>
      <div className={styles.container}>
        <div className={styles.containerContent}>
          <div className={styles.contentText}>
            <h1>{text}</h1>
            <p>{paragraph}</p>
            <a className={styles.btnGreen} href="#portfolio">
              {i18next.t("buttons.contact")}
            </a>
          </div>

          <div className={styles.containerImg}>
            <img
              src={personAndPhone}
              alt="Imagem de uma pessoa ao lado de um smartphone"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiveSection;
