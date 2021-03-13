import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function SideBar(props) {
  if (props.currentUser) {
    return (
      <Button variant="danger" onClick={props.onLogout}>
        Logout
      </Button>
    );
  } else {
    return (
      <ButtonGroup vertical>
        <Button variant="primary" onClick={props.onRegister}>
          Register
        </Button>
        <Button variant="primary" onClick={props.onLogin}>
          Login
        </Button>
      </ButtonGroup>
    );
  }
}
