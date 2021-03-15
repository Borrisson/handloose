import Phaser from "phaser";

export default class Menu extends Phaser.Scene {
  
  constructor() {
    super('Menu')
  }
  preload() {
    this.load.spritesheet('logo', 'assets/logo.png', {frameWidth: 291, frameHeight: 35})
  }
  create() {
    const play = this.add.text(600, 600, 'Play');
    const options = this.add.text(700, 600, 'Options');
    this.anims.create({
      key: 'logo',
      frames: this.anims.generateFrameNumbers('logo'),
      frameRate: 10,
      repeat: -1
    });
    play.setScale(1.5);
    options.setScale(1.5);

    const logo = this.add.sprite(800, 350);
    logo.setScale(2);
    logo.play('logo');

  }

}