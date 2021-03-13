import "./styles/App.scss";
import useApplicationData from "../hooks/useApplicationData";
import SideBar from "./sidebar/Sidebar";
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'


const game = {
  width: "50px",
  height: "50px",
  type: Phaser.AUTO,
  scene: {}
}
const App = () => {
  const { state, dispatch } = useApplicationData();
  const userList = state.users.map((user) => (
    <li key={user.id}>{user.name}</li>
  ));
  return (<><SideBar /> <IonPhaser game={game} /></>);
};

export default App;
