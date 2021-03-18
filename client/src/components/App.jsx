import "./styles/App.scss";
import { useState } from "react";
import useApplicationData from "../hooks/useApplicationData";
import SideBar from "./Sidebar";
import Login from "./Login";
import Register from "./Register";
import About from "./About";

const App = () => {
  const {
    state,
    dispatch,
    handleAppData,
    loggedIn,
    handleLogout,
  } = useApplicationData();
  const [show, setShow] = useState({
    login: false,
    register: false,
    about: false,
  });
  const handleClose = (key) => setShow({ [key]: false });
  const handleShow = (key) => setShow({ [key]: true });

  return (
    <>
      <SideBar
        handleShow={handleShow}
        handleLogout={handleLogout}
        currentUser={state.user}
      />
      <Login
        handleClose={handleClose}
        show={show.login}
        handleAppData={handleAppData}
      />
      <About handleClose={handleClose} show={show.about} />
      <Register
        handleClose={handleClose}
        show={show.register}
        loggedIn={loggedIn}
      />
    </>
  );
};

export default App;
