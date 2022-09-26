import PortDesk from "../PortDesck/PortDesk";
import Slider from "../Slider/Slider";
import styles from "./Portfolio.module.css";
import { useState, useEffect } from "react";
import img1 from "../../assets/img1.svg";
import img2 from "../../assets/img2.svg";
import img3 from "../../assets/img3.svg";

const Portfolio = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 650);
  const updateMedia = () => {
    setDesktop(window.innerWidth > 650);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <div className={styles.bgContainer}>
      <div className={styles.container}>
        <div className={styles.containerContent}>
          <h1>Meu portfólio</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
          {isDesktop ? <PortDesk /> : <Slider imgs={[img1, img2, img3]} />}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
