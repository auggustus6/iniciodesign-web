import Card from "../Card/Card";
import styles from "./ThirdSection.module.css";
import pen from "../../assets/pen.svg";
import code from "../../assets/code.svg";
import smartphone from "../../assets/smartphone.svg";
import { i18next } from "../../translate/i18n";

const ThirdSection = ({ text, paragraph }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerContent}>
        <div className={styles.content}>
          <div className={styles.containerText}>
            <h1>{text}</h1>
            <p>{paragraph}</p>
          </div>
          <div className={styles.containerCard}>
            <Card
              img={pen}
              text={i18next.t("cards.titlesCard")}
              paragraph={i18next.t("paragraphsCard.paragraphCard")}
            />
            <Card
              img={code}
              text={i18next.t("cards.secondCard")}
              paragraph={i18next.t("paragraphsCard.paragraphFirstCard")}
            />
            <Card
              img={smartphone}
              text={i18next.t("cards.thirdCard")}
              paragraph={i18next.t("paragraphsCard.paragraphSecondCard")}
            />
            <Card
              img={pen}
              text={i18next.t("cards.fourthCard")}
              paragraph={i18next.t("paragraphsCard.paragraphThirthCard")}
            />
            <Card
              img={code}
              text={i18next.t("cards.fiftyhCard")}
              paragraph={i18next.t("paragraphsCard.paragraphFourthCard")}
            />
            <Card
              img={smartphone}
              text={i18next.t("cards.sixthCard")}
              paragraph={i18next.t("paragraphsCard.paragraphFiftyhCard")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
