import "./styles/App.scss";
import { useState } from "react";
import useApplicationData from "../hooks/useApplicationData";
import SideBar from "./Sidebar";
import Login from "./Login";
import Register from "./Register";
import { SET_USER } from "../reducer/data_reducer";
import axios from "axios";

const App = () => {
  const { state, dispatch, loggedIn, logout } = useApplicationData();
  const [show, setShow] = useState({
    login: false,
    register: false,
  });

  const handleClose = (key) => setShow({ [key]: false });
  const handleShow = (key) => setShow({ [key]: true });

  function handleLogout(id) {
    return axios.destroy(`api/sessions/${id}`);
  }
  return (
    <>
      <SideBar handleShow={handleShow} currentUser={state.user} />
      <Login handleClose={handleClose} show={show.login} loggedIn={loggedIn} />
      <Register
        handleClose={handleClose}
        show={show.register}
        loggedIn={loggedIn}
      />
    </>
  );
};

export default App;
