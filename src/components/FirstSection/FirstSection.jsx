import Button from "../Button/Button";
import styles from "./FirstSection.module.css";
import stylesButton from "../Button/Button.module.css";
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
                <Button classname={stylesButton.btnPrimaryOutline}>
                  Meus Serviços
                </Button>
                <Button classname={stylesButton.btnPrimaryLarge}>
                  Meu Portfólio
                </Button>
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
