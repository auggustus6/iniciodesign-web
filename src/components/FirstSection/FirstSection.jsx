import styles from "./FirstSection.module.css";
import developer from "../../assets/developer.svg";

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
                    <a href="#services">Meus Serviços</a>
                  </li>
                  <li className={styles.btnGreen}>
                    <a href="#portfolio">Meu Portfólio</a>
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
