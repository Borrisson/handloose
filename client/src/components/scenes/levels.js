import Phaser from "phaser";

export default class Levels extends Phaser.Scene {
  constructor() {
    super("Levels")
  }
  preload() {
    this.load.spritesheet('keyboard', 'assets/keyboards.png', {frameWidth: 123, frameHeight: 33})
  }
  create() {
    const lvl1 = this.add.text(500, 400, "Level 1").setInteractive();
    const lvl2 = this.add.text(500, 450, "Level 2").setInteractive();
    const lvl3 = this.add.text(500, 500, "Level 3").setInteractive();
    const lvl4 = this.add.text(500, 550, "Level 5").setInteractive();
    const lvl5 = this.add.text(500, 600, "Level 5").setInteractive();
    const back = this.add.text(1400, 950, "Back").setInteractive();
    const kb = this.add.sprite(500, 200, 'keyboard').setScale(5);
    kb.setFrame(0);

    lvl1.on('pointerover', function () {
      lvl1.setTint(0xff00ff)
    }, this)
    lvl1.on('pointerdown', function () {
      lvl1.setTint(0xff00ff)
      kb.setFrame(1);
    }, this)
    lvl2.on('pointerout', function () {
      lvl1.setTint(0xffffff)
    }, this)

    back.on('pointerout', function () {
      back.setTint(0xffffff);
    }, this)
    back.on('pointerover', function () {
      back.setTint(0xff00ff);
    }, this)
    back.on('pointerdown', function () {
      this.scene.start('Title');
    }, this)
  }
}