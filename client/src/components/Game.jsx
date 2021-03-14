import Phaser from "phaser";
import { IonPhaser } from "@ion-phaser/react";
import Title from "./scenes/title"


export default function Game() {
  const game = {
    width: "90%",
    height: "100%",
    type: Phaser.AUTO,
    pixelArt: true,
    scene: [Title]
  }
  return (
    <IonPhaser game={game} />
  )

}
