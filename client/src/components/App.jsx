import "./styles/App.scss";
import useApplicationData from "../hooks/useApplicationData";
import SideBar from "./Sidebar";
import Login from "./Login";
import Register from "./Register";
import About from "./About";
import useShowData from "../hooks/useShowData";
import Leaderboard from "./Leaderboard";
import Game from "./Game";

const App = () => {
  const {
    state,
    dispatch,
    handleAppData,
    loggedIn,
    handleLogout,
    handleGamePost,
    handleGameData,
  } = useApplicationData();

  const { show, handleClose, handleShow } = useShowData();

  return (
    <>
      <Game
        user={state.user}
        handleGameData={handleGameData}
        handleGamePost={handleGamePost}
      />
      <SideBar
        handleShow={handleShow}
        handleLogout={handleLogout}
        state={state}
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
      <Leaderboard
        handleClose={handleClose}
        show={show.leaderboard}
        leaderboard={state.leaderboard}
      />
    </>
  );
};

export default App;
