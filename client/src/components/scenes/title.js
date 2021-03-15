import Phaser from "phaser";



export default class Title extends Phaser.Scene {
  constructor() {
    super('Title')
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
    
    const start = this.add.text(825, 490, 'Start').setInteractive();
    
    const logo = this.add.sprite(800, 350);
    logo.setScale(2);
    logo.play('logo');

    
    start.on('pointerout', function () {
      start.setTint(0xffffff);
    }, this)
    start.on('pointerover', function () {
      start.setTint(0x6AA84F);
    }, this)
    start.on('pointerdown', function () {

        this.scene.start('Menu')

    }, this);
    
  }
}