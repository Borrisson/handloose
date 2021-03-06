import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import useInputData from "../hooks/useInputData";
import { useState } from "react";

export default function Register({ loggedIn, handleClose, show }) {
  const { input, handleChange, handleReset, submitRegister } = useInputData({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [error, setError] = useState("");
  const [className, setClassName] = useState({
    password: "",
    email: "",
  });

  function validate(evt) {
    evt.preventDefault();
    if (input.password_confirmation === input.password && input.email) {
      setError("");
      setClassName({ ...className, password: "" });
      handleRegister(evt);
    } else if (!input.email) {
      setError("Please enter an email address");
      setClassName({ ...className, email: "alert-danger" });
    } else {
      setError("Passwords don't match");
      setClassName({ ...className, password: "alert-danger" });
    }
  }

  function handleRegister(evt) {
    submitRegister(evt)
      .then((response) => {
        handleReset();
        loggedIn(response.data.user);
        handleClose("register");
        setClassName({ ...className, email: "" });
      })
      .catch((e) => {
        console.log("registration error", e);
        if (e.message.match(/422/)) {
          setError("Email has already been registered");
          setClassName((prev) => {
            return { ...prev, email: "alert-danger" };
          });
        }
      });
  }
  return (
    <>
      <Modal
        show={show}
        onHide={() => handleClose("register")}
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={validate}>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter Username"
                value={input.name}
                onChange={handleChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className={className.email}
                name="email"
                type="email"
                placeholder="Enter email"
                value={input.email}
                onChange={handleChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className={className.password}
                name="password"
                type="password"
                placeholder="Password"
                value={input.password}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                className={className.password}
                name="password_confirmation"
                type="password"
                placeholder="Confirm Password"
                value={input.password_confirmation}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
