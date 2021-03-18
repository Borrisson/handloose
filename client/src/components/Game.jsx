// import Phaser from "phaser";
// import { IonPhaser } from "@ion-phaser/react";
// import Title from "./scenes/title"
// import Menu from "./scenes/menu"

// export default function Game() {
//   const game = {
//     width: "90%",
//     height: "100%",
//     type: Phaser.AUTO,
//     pixelArt: true,
//     scene: [Menu, Title]
//   }
//   return (
//     <IonPhaser game={ game } />
//   )

// }

import Phaser from "phaser";
import React from "react";
import Menu from "./scenes/menu";
import Levels from "./scenes/levels";
import Play from "./scenes/play";

export default class Game extends React.Component {
  componentDidMount() {
    //initial state
    //const [ state, setState ] = useState({ width: "80%",
    // height: "100%",
    // type: Phaser.AUTO,
    // pixelArt: true,
    // scene: [Title, Menu, Levels]})

    const config = {
      scale: {
        parent: document.getElementById("phaser-game"),
        mode: Phaser.Scale.RESIZE,
      },
      type: Phaser.AUTO,

      pixelArt: true,
      physics: {
        default: "arcade",
        arcade: {
          debug: true,
        },
      },
      scene: [Menu, Levels, Play],
    };
    new Phaser.Game(config);
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return <div id="phaser-game" />;
  }
}
