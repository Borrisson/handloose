import Button from "react-bootstrap/Button";

export default function SideBar(props) {
  if (props.currentUser) {
    return (
      <Button variant="primary" onClick={props.onLogout}>
        Logout
      </Button>
    );
  } else {
    return (
      <>
        <Button variant="primary" onClick={props.onRegister}>
          Register
        </Button>
        <br />
        <Button variant="primary" onClick={props.onLogin}>
          Login
        </Button>
      </>
    );
  }
}
