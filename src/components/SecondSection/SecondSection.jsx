import styles from "./SecondSection.module.css";
import stylesButton from "../Button/Button.module.css";
import group from "../../assets/group.svg";
import Button from "../Button/Button";

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
                <Button classname={stylesButton.btnPrimaryLarge}>
                  Ver Portfólio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
