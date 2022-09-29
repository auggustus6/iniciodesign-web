import styles from "./FourSection.module.css";
import design from "../../assets/design.svg";
import developerApp from "../../assets/developerApp.svg";
import Circle from "../Circle/Circle";

const FourSection = ({ text, paragraph }) => {
  return (
    <div className={styles.bgContainer}>
      <div className={styles.container}>
        <div className={styles.containerContent}>
          <div className={styles.content}>
            <div className={styles.containerText}>
              <h1>{text}</h1>
              <p>{paragraph}</p>
            </div>
            <div className={styles.containerCard}>
              <div className={styles.containerCircle}>
                <div>
                  <Circle
                    tt="Amet minim"
                    pp="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
                  />
                </div>
                <div>
                  <Circle
                    tt="Amet minim"
                    pp="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
                  />
                </div>
                <div>
                  <Circle
                    tt="Amet minim"
                    pp="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
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
    </div>
  );
};

export default FourSection;
