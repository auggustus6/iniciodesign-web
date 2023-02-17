import styles from "./PortDesk.module.css";
import img1 from "../../assets/multi.png";
import img2 from "../../assets/keff.png";
import img3 from "../../assets/contane.png";
import img4 from "../../assets/savepik.png";
import img5 from "../../assets/laura.png";
import btn from "../../assets/btn.svg";
import { useRef, useState } from "react";
import Modal from "../Modal/Modal";
import { i18next } from "../../translate/i18n";

const dataImgs = [
  {
    id: 1,
    img: img1,
    description: `${i18next.t("modalTitles.firstTitleModal")}`,
    content: `${i18next.t("modalParagraphs.firstParagraph")}`,
  },
  {
    id: 2,
    img: img2,
    description: `${i18next.t("modalTitles.secondTitleModal")}`,
    content: `${i18next.t("modalParagraphs.secondParagraph")}`,
  },
  {
    id: 3,
    img: img3,
    description: `${i18next.t("modalTitles.thirdTitleModal")}`,
    content: `${i18next.t("modalParagraphs.thirdParagraph")}`,
  },
  {
    id: 4,
    img: img4,
    description: `${i18next.t("modalTitles.fourthTitleModal")}`,
    content: `${i18next.t("modalParagraphs.fourthParagraph")}`,
  },
  {
    id: 5,
    img: img5,
    description: `${i18next.t("modalTitles.fiveTitleModal")}`,
    content: `${i18next.t("modalParagraphs.fiveParagrah")}`,
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
