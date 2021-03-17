import Phaser from "phaser";

export default class Menu extends Phaser.Scene {
  
  constructor() {
    super('Menu')
  }
  preload() {
    this.load.spritesheet('logo', 'assets/logo.png', {frameWidth: 291, frameHeight: 35})
  }
  create() {
    const play = this.add.text(700, 600, 'Press Space').setInteractive();
    
    this.anims.create({
      key: 'logo',
      frames: this.anims.generateFrameNumbers('logo'),
      frameRate: 10,
      repeat: -1
    });
    play.setScale(1.5);
    

    const logo = this.add.sprite(800, 350);
    logo.setScale(2);
    logo.play('logo');

    this.input.keyboard.on('keyup-SPACE', function () {
      this.scene.start('Levels')
    }, this)

  }
    

}