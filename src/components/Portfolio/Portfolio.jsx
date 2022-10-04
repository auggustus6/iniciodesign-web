import PortDesk from "../PortDesck/PortDesk";
import styles from "./Portfolio.module.css";
import { i18next } from "../../translate/i18n";

const Portfolio = () => {
  return (
    <div className={styles.bgContainer}>
      <div className={styles.container}>
        <div className={styles.containerContent}>
          <h1>{i18next.t("titles.portfolioTitle")}</h1>
          <p>{i18next.t("paragraphs.portfolioParagraph")}</p>
          <PortDesk />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
