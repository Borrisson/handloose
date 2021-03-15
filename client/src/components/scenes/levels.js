import Phaser from "phaser";

export default class Levels extends Phaser.Scene {
  constructor() {
    super("Levels")
  }
  preload() {}
  create() {
    const lvl1 = this.add.text(500, 300, "Level 1").setInteractive();
    const lvl2 = this.add.text(500, 350, "Level 2").setInteractive();
    const lvl3 = this.add.text(500, 400, "Level 3").setInteractive();
    const lvl4 = this.add.text(500, 450, "Level 5").setInteractive();
    const lvl5 = this.add.text(500, 500, "Level 5").setInteractive();
    const back = this.add.text(1000,900, "Back").setInteractive();

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