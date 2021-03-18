import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useInputData from "../hooks/useInputData";

export default function Register({ loggedIn, handleClose, show }) {
  const { input, handleChange, handleReset, submitRegister } = useInputData({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  function handleRegister(evt) {
    evt.preventDefault();
    submitRegister(evt)
      .then((response) => {
        handleReset();
        loggedIn(response.data.user);
        handleClose("register");
      })
      .catch((error) => {
        console.log("registration error", error);
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
          <Form onSubmit={handleRegister}>
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
                name="password_confirmation"
                type="password"
                placeholder="Confirm Password"
                value={input.password_confirmation}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
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
