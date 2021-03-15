import Phaser from "phaser";

export default class Menu extends Phaser.Scene {
  
  constructor() {
    super('Menu')
  }
  preload() {
    this.load.spritesheet('logo', 'assets/logo.png', {frameWidth: 291, frameHeight: 35})
  }
  create() {
    const play = this.add.text(600, 600, 'Play').setInteractive();
    const options = this.add.text(700, 600, 'Options').setInteractive();
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

    play.on('pointerout', function () {
      play.setTint(0xffffff);
    }, this)
    play.on('pointerover', function () {
      play.setTint(0x6AA84F);
    }, this)
    play.on('pointerdown', function () {

      this.scene.start('Levels')

  }, this);
    options.on('pointerout', function () {
      options.setTint(0xffffff);
    }, this)
    options.on('pointerover', function () {
      options.setTint(0x6AA84F);
    }, this)

  }

}