import Card from "../Card/Card";
import styles from "./ThirdSection.module.css";
import pen from "../../assets/pen.svg";
import code from "../../assets/code.svg";
import smartphone from "../../assets/smartphone.svg";

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
              text="Amet minim"
              paragraph="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
            />
            <Card
              img={code}
              text="Amet minim"
              paragraph="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
            />
            <Card
              img={smartphone}
              text="Amet minim"
              paragraph="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
            />
            <Card
              img={pen}
              text="Amet minim"
              paragraph="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
            />
            <Card
              img={pen}
              text="Amet minim"
              paragraph="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
            />
            <Card
              img={pen}
              text="Amet minim"
              paragraph="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
