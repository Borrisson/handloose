import "./styles/App.scss";
import { useState } from "react";
import useApplicationData from "../hooks/useApplicationData";
import SideBar from "./Sidebar";
import Login from "./Login";
import Register from "./Register";
import About from "./About";
import useShowData from "../hooks/useShowData";

const App = () => {
  const {
    state,
    dispatch,
    handleAppData,
    loggedIn,
    handleLogout,
  } = useApplicationData();
  console.log(state);

  const { show, handleClose, handleShow } = useShowData();

  const [score, setScore] = useState(0);

  return (
    <>
      <SideBar
        handleShow={handleShow}
        handleLogout={handleLogout}
        state={state}
        score={score}
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
