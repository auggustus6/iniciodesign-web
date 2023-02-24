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
            <a
              target="_blank"
              className={styles.btnGreen}
              href="https://api.whatsapp.com/send?phone=5517992580206&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20como%20voc%C3%AAs%20me%20ajudariam%20no%20desenvolvimento%20do%20meu%20projeto!">{i18next.t("buttons.myWhats")}</a>

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
