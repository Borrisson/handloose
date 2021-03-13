import React, { Fragment } from "react";
import Button from "./Button";

export default function SideBar(props) {
  if (props.currentUser) {
    return <Button label="Logout" onClick={props.onLogout} />;
  } else {
    return (
      <>
        <Button label="Register" onClick={props.onCreateAccount} />
        <br />
        <Button label="Login" onClick={props.onLogin} />
      </>
    );
  }
}
