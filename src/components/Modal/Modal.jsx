import styles from "./Modal.module.css";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <h1>Modal</h1>
        <div className={styles.modalRigth}>
          <p onClick={onClose} className={styles.closeBtn}>X</p>
          <div className={styles.content}>
            <h1>Descrição</h1>
            <h2>Texto</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
