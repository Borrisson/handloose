import "./styles/App.scss";
import { useState } from "react";
import useApplicationData from "../hooks/useApplicationData";
import SideBar from "./Sidebar";
import Login from "./Login";
import Register from "./Register";
import { SET_USER } from "../reducer/data_reducer";

const App = () => {
  const { state, dispatch } = useApplicationData();
  const [show, setShow] = useState({
    login: false,
    register: false,
  });

  const handleClose = (key) => setShow({ [key]: false });
  const handleShow = (key) => setShow({ [key]: true });

  function logged_in(user) {
    dispatch({
      type: SET_USER,
      user,
    });
  }
  console.log(state);

  return (
    <>
      <SideBar handleShow={handleShow} currentUser={state.user} />
      <Login
        handleClose={handleClose}
        show={show.login}
        logged_in={logged_in}
      />
      <Register
        handleClose={handleClose}
        show={show.register}
        logged_in={logged_in}
      />
    </>
  );
};

export default App;
