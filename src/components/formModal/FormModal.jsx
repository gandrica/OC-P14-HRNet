import Modal from "react-modal";
import styles from "./FormModal.module.scss";

Modal.setAppElement("#root");
function FormModal({ modalIsOpen, setModalIsOpen }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      contentLabel="Employee Created"
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
    >
      <span className={styles.modalText}>Employee Created!</span>
      <button
        className={styles.closeButton}
        onClick={() => setModalIsOpen(false)}
      >
        ✕
      </button>
    </Modal>
  );
}

export default FormModal;
