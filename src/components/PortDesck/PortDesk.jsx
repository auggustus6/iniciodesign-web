import styles from "./PortDesk.module.css";
import img1 from "../../assets/multi.png";
import img2 from "../../assets/keff.png";
import img3 from "../../assets/contane.png";
import img4 from "../../assets/savepik.png";

import btn from "../../assets/btn.svg";
import { useRef, useState } from "react";
import Modal from "../Modal/Modal";

const dataImgs = [
  {
    id: 1,
    img: img1,
    description: "ChatBot Multfórmulas RP",
    content:
      "Sistema Chat Bot desenvolvido para indústria farmaceutica multfórmulas. O sistema consiste em no atendimento dos cliente whatsapp via plataforma",
  },
  {
    id: 2,
    img: img2,
    description: "ChatBot Multfórmulas RP",
    content:
      "Sistema Chat Bot desenvolvido para indústria farmaceutica multfórmulas. O sistema consiste em no atendimento dos cliente whatsapp via plataforma",
  },
  {
    id: 3,
    img: img3,
    description: "ChatBot Multfórmulas RP",
    content:
      "Sistema Chat Bot desenvolvido para indústria farmaceutica multfórmulas. O sistema consiste em no atendimento dos cliente whatsapp via plataforma",
  },
  {
    id: 4,
    img: img4,
    description: "ChatBot Multfórmulas RP",
    content:
      "Sistema Chat Bot desenvolvido para indústria farmaceutica multfórmulas. O sistema consiste em no atendimento dos cliente whatsapp via plataforma",
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
