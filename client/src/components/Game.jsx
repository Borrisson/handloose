import Phaser from "phaser";
import { IonPhaser } from "@ion-phaser/react";


export default function Game() {
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
      
    }
  }
  return (
    <IonPhaser game={game} />
  )

}
