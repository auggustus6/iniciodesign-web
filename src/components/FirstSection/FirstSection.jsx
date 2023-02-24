import styles from "./FirstSection.module.css";
import developer from "../../assets/developer.svg";
import { i18next } from "../../translate/i18n";

const FirstSection = ({ text, paragraph }) => {
  return (
    <div className={styles.bgContainer}>
      <div className={styles.container}>
        <div className={styles.containerContent}>
          <div className={styles.content}>
            <div className={styles.containerText}>
              <h1>{text}</h1>
              <p>{paragraph}</p>
              <div className={styles.containerButtons}>
                <ul>
                  <li className={styles.btnBlack}>
                    <a
                      target="_blank"
                      href="https://api.whatsapp.com/send?phone=5517992580206&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20como%20voc%C3%AAs%20me%20ajudariam%20no%20desenvolvimento%20do%20meu%20projeto!">{i18next.t("buttons.myWhats")}</a>
                  </li>
                  <li className={styles.btnGreen}>
                    <a href="#portfolio">{i18next.t("buttons.myPort")}</a>
                  </li>
                </ul>
              </div>
            </div>
            <img src={developer} alt="Imagem de uma pessoa no computador" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
