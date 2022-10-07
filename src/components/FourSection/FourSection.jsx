import styles from "./FourSection.module.css";
import developerApp from "../../assets/developerApp.svg";
import Circle from "../Circle/Circle";
import { i18next } from "../../translate/i18n";

const FourSection = ({ text, paragraph }) => {
  return (
    <div className={styles.bgContainer}>
      <div className={styles.container}>
        <div className={styles.containerContent}>
          <div className={styles.content}>
            <h1>{text}</h1>
            <p>{paragraph}</p>
          </div>
          <div className={styles.containerCard}>
            <div className={styles.containerCircle}>
              <div>
                <Circle
                  text={i18next.t("titles.fourTitleCircle")}
                  paragraph={i18next.t("paragraphs.fourParagraphCircle")}
                />
              </div>
              <div className={styles.rigth}>
                <Circle
                  text={i18next.t("titles.fiveTitleCircle")}
                  paragraph={i18next.t("paragraphs.fiveParagraphCircle")}
                />
              </div>
              <div>
                <Circle
                  text={i18next.t("titles.sixTitleCard")}
                  paragraph={i18next.t("paragraphs.fourParagraphCircle")}
                />
              </div>
            </div>
            <img
              className={styles.image}
              src={developerApp}
              alt="Imagem de duas pessoas ao lado de um smartphone"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourSection;
