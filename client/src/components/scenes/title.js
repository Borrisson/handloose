import Phaser from "phaser";

export default class Title extends Phaser.Scene {
  constructor() {
    super("title")
  }
  preload() {
    this.load.spritesheet('logo', 'assets/logo.png', {frameWidth: 291, frameHeight: 35})
  }
  create() {
    
    this.anims.create({
      key: 'logo',
      frames: this.anims.generateFrameNumbers('logo'),
      frameRate: 10,
      repeat: -1
    });
    
    const logo = this.add.sprite(800, 350);
    logo.setScale(2);
    logo.play('logo');
  }
}