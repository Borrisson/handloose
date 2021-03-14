import "./styles/App.scss";
import useApplicationData from "../hooks/useApplicationData";
import SideBar from "./sidebar/Sidebar";
import Login from "./Login";
import Phaser from "phaser";
import { IonPhaser } from "@ion-phaser/react";




const game = {
  width: "100%",
  height: "100%",
  type: Phaser.AUTO,
  pixelArt: true,
  scene: {
    preload: function() {
      this.load.spritesheet('logo', 'assets/logo.png', {frameWidth: 291, frameHeight: 35})
    },
    create: function() {
      /* this.helloWorld = this.add.text(
        this.cameras.main.centerX, 
        this.cameras.main.centerY, 
        "Hello World", { 
          font: "40px Arial", 
          fill: "#ffffff" 
        }
      ); */
      // this.helloWorld.setOrigin(0.5);
      
      this.anims.create({
        key: 'logo',
        frames: this.anims.generateFrameNumbers('logo'),
        frameRate: 10,
        repeat: -1
      });
      
      const logo = this.add.sprite(720, 350);
      logo.setScale(2);
      logo.play('logo');
    },
    // update: function() {
    //   this.helloWorld.angle += 1;
    // }
  }
}
const App = () => {
  const { state, dispatch } = useApplicationData();
  const userList = state.users.map((user) => (
    <li key={user.id}>{user.name}</li>
  ));


  return (
    <>
      <SideBar />
      <IonPhaser game={game} />
    </>
  );
};

export default App;
