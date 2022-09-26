import { useState, useEffect } from "react";
import styles from "./Slider.module.css";

const Slider = ({ imgs }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, []);

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className={styles.slideShow}>
      <button onClick={prev}>⭠</button>
      <img className={styles.mainImg} src={imgs[index]} alt="" />

      <button onClick={next}>⭢</button>
    </div>
  );
};

export default Slider;
