import styles from "./SecondSection.module.css";
import group from "../../assets/group.svg";
import { i18next } from "../../translate/i18n";

const SecondSection = ({ text, paragraph }) => {
  return (
    <div className={styles.bgContainer}>
      <div className={styles.container}>
        <div className={styles.containerContent}>
          <div className={styles.content}>
            <img
              src={group}
              alt="Imagem Duas pessoas conversando em uma mesa de escritório"
            />
            <div className={styles.containerText}>
              <h1>{text}</h1>
              <p>{paragraph}</p>
              <div className={styles.containerButtons}>
                <a
                  target="_blank"
                  className={styles.btnGreen}
                  href="https://api.whatsapp.com/send?phone=5517992580206&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20como%20voc%C3%AAs%20me%20ajudariam%20no%20desenvolvimento%20do%20meu%20projeto!">{i18next.t("buttons.myWhats")}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
