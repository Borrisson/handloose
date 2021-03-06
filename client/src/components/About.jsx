import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

export default function About({ show, handleClose }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Modal size="xl" show={show} onHide={() => handleClose("about")}>
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
              <br />
              <h3>Improve your typing speed and accuracy</h3>

              <p>
                This web application will help you improve your typing speed and
                accuracy whilst playing a game. The real magic behind this
                application is it will force you to look at your screen rather
                than at your hands on your keyboard.
              </p>
              <br />
            </Carousel.Item>
            <Carousel.Item>
              <br />
              <h3>How to play</h3>
              <p>
                The goal of the game is simple. Press the corresponding key once
                the respective character reaches its key on the keyboard. eg.
                When the "A" character reaches the "A" key make sure to press
                this key.
              </p>
              <br />
            </Carousel.Item>
            <Carousel.Item>
              <br />
              <h3>Game options</h3>

              <h5>Slider</h5>
              <p>
                There is a speed slider that will allow you to change the
                freqency of key presses, if you would like the characters to
                appear slower or faster.
              </p>
              <h5>Levels</h5>
              <p>
                You can pick and choose which characters you would like to play
                with by clicking on the levels, these are presets that will auto
                select the keys for you.
              </p>
              <br />
            </Carousel.Item>
            <Carousel.Item>
              <br />
              <h3>Scoring</h3>

              <h5>Speed</h5>
              <p>
                The faster you set the frequency of the key presses, set with
                the slider, the more points you'll earn!
              </p>
              <h5>Streak</h5>
              <p>
                Think you can handle a streak? Well you're in luck! The higher
                the sreak, the greater the multiplier!
              </p>
              <h5>Levels</h5>
              <p>
                By choosing to play with more characters, the difficuly
                increases naturally, but don't worry we got you covered with a
                greater multiplier.
              </p>
              <br />
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
}
