import "./styles/App.scss";
import { useState } from "react";
import useApplicationData from "../hooks/useApplicationData";
import SideBar from "./Sidebar";
import Login from "./Login";
import Register from "./Register";

const App = () => {
  const { state, dispatch } = useApplicationData();
  const [show, setShow] = useState({
    login: false,
    register: false,
  });

  const handleClose = (key) => setShow({ [key]: false });
  const handleShow = (key) => setShow({ [key]: true });

  return (
    <>
      <SideBar handleShow={handleShow} currentUser={state.user} />
      <Login handleClose={handleClose} show={show.login} />
      <Register handleClose={handleClose} show={show.register} />
    </>
  );
};

export default App;
