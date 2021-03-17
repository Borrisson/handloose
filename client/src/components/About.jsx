import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

export default function About({ show, handleClose }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Modal
        size="xl"
        show={show}
        onHide={() => handleClose("about")}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title
            className="d-flex align-self-center"
            id="example-custom-modal-styling-title"
          >
            About
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <h3>Improve your typing speed and accuracy</h3>

              <p>
                This web application will help you improve your typing speed and
                accuracy whilst playing a game. The real magic behind this
                application is it will force you to look at your screen rather
                than at your hands on your keyboard.
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
}
