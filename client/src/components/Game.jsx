import Phaser from "phaser";
import React from "react";
import Menu from "./scenes/menu";
import Levels from "./scenes/levels";
import Play from "./scenes/play";
import Endgame from "./scenes/endgame";

export default class Game extends React.Component {
  componentDidMount() {
    const config = {
      scale: {
        parent: document.getElementById("phaser-game"),
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      type: Phaser.AUTO,
      pixelArt: true,
      physics: {
        default: "arcade",
      },
      scene: [Menu, Levels, new Play(this.props), Endgame],
    };
    this.game = new Phaser.Game(config);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user.id !== this.props.user.id) {
      const config = {
        scale: {
          parent: document.getElementById("phaser-game"),
          mode: Phaser.Scale.FIT,
          autoCenter: Phaser.Scale.CENTER_BOTH,
        },
        type: Phaser.AUTO,
        pixelArt: true,
        physics: {
          default: "arcade",
          arcade: {
            debug: false,
          },
        },
        scene: [Menu, Levels, new Play(this.props), Endgame],
      };

      this.game.destroy(true, false);
      this.game = new Phaser.Game(config);
    }
  }

  render() {
    return <div id="phaser-game" />;
  }
}
