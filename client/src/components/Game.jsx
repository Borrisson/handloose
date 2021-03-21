import Phaser from "phaser";
import React, { useEffect } from "react";
import Menu from "./scenes/menu";
import Levels from "./scenes/levels";
import Play from "./scenes/play";
import Endgame from "./scenes/endgame";

export default class Game extends React.Component {
  
  componentDidMount() {
    const config = {
      scale: {
        parent: document.getElementById("phaser-game"),
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      type: Phaser.AUTO,

      pixelArt: true,
      physics: {
        default: "arcade",
        arcade: {
          debug: true,
        },
      },
      scene: [Menu, Levels, new Play(this.props), Endgame],
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
