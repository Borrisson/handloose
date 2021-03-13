import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";

export default function SideBar(props) {
  if (props.currentUser) {
    return <Button onClick={props.onLogout}>Logout</Button>;
  } else {
    return (
      <>
        <Button onClick={props.onRegister}>Register</Button>
        <br />
        <Button onClick={props.onLogin}>Login</Button>
      </>
    );
  }
}
