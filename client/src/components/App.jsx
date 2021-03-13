import "./styles/App.scss";
import useApplicationData from "../hooks/useApplicationData";
import SideBar from "./sidebar/Sidebar";
import Login from "./Login";

const App = () => {
  const { state, dispatch } = useApplicationData();
  const userList = state.users.map((user) => (
    <li key={user.id}>{user.name}</li>
  ));
  return <Login />;
};

export default App;
