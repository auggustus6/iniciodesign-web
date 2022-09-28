import styles from "./PortDesk.module.css";
import img1 from "../../assets/img1.svg";
import img2 from "../../assets/img2.svg";
import img3 from "../../assets/img3.svg";
import img4 from "../../assets/img4.svg";
import img5 from "../../assets/img5.svg";
import img6 from "../../assets/img6.svg";
import img7 from "../../assets/img6.svg";
import img8 from "../../assets/img6.svg";
import btn from "../../assets/btn.svg";
import { useRef } from "react";

const data = [img1, img2, img3, img4, img5, img6, img7, img8];

const PortDesk = () => {
  const carousel = useRef(null);
  const handleLeftClick = (event) => {
    event.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (event) => {
    event.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <div className={styles.container}>
      <div className={styles.carousel} ref={carousel}>
        {data.map((data, index) => (
          <div className={styles.item} key={index}>
            <div className={styles.image}>
              <img src={data} />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.buttons}>
        <button onClick={handleLeftClick}>
          <img src={btn} alt="Sinal menor que" />
        </button>
        <button onClick={handleRightClick}>
          <img src={btn} alt="Sinal maior que" />
        </button>
      </div>
    </div>
  );
};

export default PortDesk;
