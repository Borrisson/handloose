import Phaser from "phaser";
import { IonPhaser } from "@ion-phaser/react";
import Title from "./scenes/title"
import Menu from "./scenes/menu"


export default function Game() {
  const game = {
    width: "90%",
    height: "100%",
    type: Phaser.AUTO,
    pixelArt: true,
    scene: [Menu, Title]
  }
  return (
    <IonPhaser game={ game } />
  )

}

// import Phaser from "phaser";
// import React from 'react';
// import Title from "./scenes/title"
// import Menu from "./scenes/menu"

// export default class Game extends React.Component {
//   componentDidMount() {
//     const config = {
//       width: "70%",
//       height: "100%",
//       type: Phaser.AUTO,
//       pixelArt: true,
//       scene: [Title, Menu]
//     }
//     new Phaser.Game(config);
//   }
//   shouldComponentUpdate () {
//     return false;
//   }
//   render () {
//     return <div id="phaser-game" />;
//   }
// }
