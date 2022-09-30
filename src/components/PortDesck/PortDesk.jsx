import styles from "./PortDesk.module.css";
import img1 from "../../assets/img1.svg";
import img2 from "../../assets/img2.svg";
import img3 from "../../assets/img3.svg";
import img4 from "../../assets/img4.svg";
import img5 from "../../assets/img5.svg";
import img6 from "../../assets/img6.svg";
import btn from "../../assets/btn.svg";
import { useRef, useState } from "react";
import Modal from "../Modal/Modal";

const dataImgs = [
  {
    id: 1,
    img: img1,
    description: "Descrição 1",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    img: img2,
    description: "Descrição 2",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    img: img3,
    description: "Descrição 3",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    img: img4,
    description: "Descrição 4",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 5,
    img: img5,
    description: "Descrição 5",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 6,
    img: img6,
    description: "Descrição 6",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const PortDesk = () => {
  const [selectedCard, setSelectedCard] = useState({});
  const [openModal, setOpenModal] = useState(false);

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
        {dataImgs.map((data) => (
          <div className={styles.item} key={data.id}>
            <div className={styles.image}>
              <img
                onClick={() => {
                  setOpenModal(true);
                  setSelectedCard(data);
                }}
                src={data.img}
              />
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
      <Modal
        {...selectedCard}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default PortDesk;
