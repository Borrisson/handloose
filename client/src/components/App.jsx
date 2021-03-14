import "./styles/App.scss";
import useApplicationData from "../hooks/useApplicationData";
import SideBar from "./sidebar/Sidebar";
import Login from "./Login";
import Phaser from "phaser";
import { IonPhaser } from "@ion-phaser/react";

const App = () => {
  const { state, dispatch } = useApplicationData();
  const userList = state.users.map((user) => (
    <li key={user.id}>{user.name}</li>
  ));

  const game = {
    width: "50px",
    height: "50px",
    type: Phaser.AUTO,
    scene: {},
  };

  return (
    <>
      <IonPhaser game={game} />
      <SideBar />
    </>
  );
};

export default App;
