import styles from "./Modal.module.css";

const Modal = ({ open, onClose, description, content, id, img }) => {
  if (!open) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <img src={img} />
        <div className={styles.content}>
          <h1>{description}</h1>
          <h3>{content}</h3>
        </div>
        <div className={styles.modalRigth}>
          <p onClick={onClose} className={styles.closeBtn}>
            X
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
