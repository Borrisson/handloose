import "./styles/App.scss";
import useApplicationData from "../hooks/useApplicationData";
import SideBar from "./Sidebar";
import Login from "./Login";
import Game from "./Game"






const App = () => {
  const { state, dispatch } = useApplicationData();
  const userList = state.users.map((user) => (
    <li key={user.id}>{user.name}</li>
  ));


  return (
    <>
      <SideBar />
      <Game />
    </>
  );
};

export default App;
