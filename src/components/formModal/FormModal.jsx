import Modal from "react-modal";
function FormModal({ modalIsOpen, setModalIsOpen }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      contentLabel="Employee Created"
    >
      <h2>Success !</h2>
      <p>Employee successfully created.</p>
      <button onClick={() => setModalIsOpen(false)}>Close</button>
    </Modal>
  );
}

export default FormModal;
