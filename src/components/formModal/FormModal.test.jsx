import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import Modal from "react-modal";
import styles from "./FormModal.module.scss";

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

describe("Composant Modal", () => {
  it("ne doit pas s'afficher lorsque modalIsOpen est false", () => {
    render(<FormModal modalIsOpen={false} />);

    expect(screen.queryByText("Employee Created!")).not.toBeInTheDocument();
  });

  it("doit s'afficher correctement lorsque modalIsOpen est true", () => {
    render(<FormModal modalIsOpen={true} />);

    expect(screen.getByText("Employee Created!")).toBeInTheDocument();
  });

  it("doit appeler la fonction setModalIsOpen lors du clic sur le bouton de fermeture", () => {
    const handleClose = vi.fn();

    render(<FormModal modalIsOpen={true} setModalIsOpen={handleClose} />);

    const closeButton = screen.getByText("✕");
    fireEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
    expect(handleClose).toHaveBeenCalledWith(false);
  });
});
