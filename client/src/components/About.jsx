import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function About({ show, handleClose }) {
  return (
    <>
      <Modal
        show={show}
        onHide={() => handleClose("about")}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Improve your typing speed and accuracy
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            This web application will help you improve your typing speed and
            accuracy whilst playing a game. The real magic behind this
            application is it will force you to look at your screen rather than
            at your hands on your keyboard.
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}
