import Phaser from "phaser";

export default class Menu extends Phaser.Scene {
  
  constructor() {
    super('Menu')
  }
  preload() {
    this.load.spritesheet('logo', 'assets/logo.png', {frameWidth: 291, frameHeight: 35})
    this.load.spritesheet('floor', 'assets/dancefloor.png', {frameWidth: 100, frameHeight: 30})
    this.load.image('curtains', 'assets/curtains.png')
  }
  create() {
    const play = this.add.text(700, 500, 'Press Space').setInteractive();
    play.setScale(1.5);

    const floor = this.add.sprite(750, 850).setScale(10);
    floor.scaleX = 16;
    const logo = this.add.sprite(800, 350).setScale(2);
    const curtainLeft = this.add.image(130, 450, 'curtains').setScale(9);
    const curtainRight = this.add.image(1400, 450, 'curtains').setScale(9);
    curtainRight.flipX = true;

    this.anims.create({
      key: 'logo',
      frames: this.anims.generateFrameNumbers('logo'),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'floor',
      frames: this.anims.generateFrameNumbers('floor'),
      frameRate: 2,
      repeat: -1
    })
    
    
    floor.play('floor');
    logo.play('logo');

    this.input.keyboard.on('keyup-SPACE', function () {
      this.scene.start('Levels')
    }, this)

  }
    

}