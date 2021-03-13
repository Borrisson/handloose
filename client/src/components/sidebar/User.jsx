import { MenuItem } from "react-pro-sidebar";

export default function User(props) {
  return (
    <>
      {props.currentUser && <MenuItem>Logout</MenuItem>}
      {!props.currentUser && (
        <>
          <MenuItem onClick={props.onCreateAccount}>Register</MenuItem>
          <MenuItem onClick={props.onLogin}>Login</MenuItem>
        </>
      )}
    </>
  );
}
