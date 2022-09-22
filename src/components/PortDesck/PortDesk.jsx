import styles from "./PortDesk.module.css";
import img1 from "../../assets/img1.svg";
import img2 from "../../assets/img2.svg";
import img3 from "../../assets/img3.svg";

const PortDesk = () => {
  return (
    <div className={styles.containerImgs}>
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
    </div>
  );
};

export default PortDesk;
