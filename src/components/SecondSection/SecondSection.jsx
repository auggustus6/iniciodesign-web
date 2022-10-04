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
                <a className={styles.btnGreen} href="#portfolio">
                  {i18next.t("buttons.viewPort")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
