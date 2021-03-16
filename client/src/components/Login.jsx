import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useInputData from "../hooks/useInputData";

export default function Login({ logged_in, handleClose, show }) {
  const { input, handleChange, handleReset, submitLogin } = useInputData({
    email: "",
    password: "",
  });

  function handleLogin(evt) {
    evt.preventDefault();
    submitLogin(evt)
      .then((response) => {
        handleReset();
        logged_in(response.data.user);
        handleClose("login");
      })
      .catch((error) => {
        console.log("submitLogin error", error);
      });
  }

  return (
    <>
      <Modal show={show} onHide={() => handleClose("login")} keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
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
