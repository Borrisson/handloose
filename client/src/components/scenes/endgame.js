import Phaser from "phaser";

export default class Endgame extends Phaser.Scene {
  constructor() {
    super({ key: "endgame", active: false });
  }
  preload() {
    this.load.image("overlay", "assets/GameoverOverlay.png");
  }
  init(data) {
    this.score = data.score;
    this.top = data.top;
    this.mid = data.mid;
    this.bot = data.bot;
  }
  create() {
    this.add
      .image(this.scale.width / 2, this.scale.height / 2, "overlay")
      .setScale(6);
    this.add.text(
      this.scale.width / 2.1,
      this.scale.height / 2.5,
      "Well done!"
    );
    this.add.text(
      this.scale.width / 1.9,
      this.scale.height / 1.9,
      `Score: ${this.score}`
    );
    this.replay = this.add
      .text(this.scale.width / 1.8, this.scale.height / 1.8, "Replay")
      .setInteractive();
    this.menu = this.add
      .text(this.scale.width / 2.1, this.scale.height / 1.8, "Menu")
      .setInteractive();

    this.menu.on(
      "pointerdown",
      function () {
        this.sound.removeByKey("main_theme");
        this.bot = [];
        this.top = [];
        this.mid = [];
        this.scene.stop();
        this.scene.start("Levels");
      },
      this
    );
    this.replay.on(
      "pointerdown",
      function () {
        this.sound.removeByKey("main_theme");
        this.bot = [];
        this.top = [];
        this.mid = [];
        this.scene.stop();
        this.scene.start("play");
      },
      this
    );
  }
}
