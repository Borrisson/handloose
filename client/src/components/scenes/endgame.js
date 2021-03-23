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
    this.hits = data.hits;
  }
  create() {
    this.add
      .image(this.scale.width / 2, this.scale.height / 2, "overlay")
      .setScale(6);
    this.add.text(
      this.scale.width / 2,
      this.scale.height / 2.3,
      `${this.score}`,
      {
        fontSize: "48px",
      }
    );

    this.add.text(this.scale.width / 2, this.scale.height / 2, `${this.hits}`, {
      fontSize: "48px",
    });

    this.replay = this.add
      .text(this.scale.width / 3, this.scale.height / 1.8, "Replay", {
        fontSize: "48px",
      })
      .setInteractive();
    this.menu = this.add
      .text(this.scale.width / 1.7, this.scale.height / 1.8, "Menu", {
        fontSize: "48px",
      })
      .setInteractive();

    this.menu.on(
      "pointerdown",
      function () {
        this.sound.removeByKey("main_theme");
        this.scene.stop();
        this.scene.start("Levels");
      },
      this
    );
    this.replay.on(
      "pointerdown",
      function () {
        this.sound.removeByKey("main_theme");
        this.scene.stop();
        this.scene.start("play");
      },
      this
    );
  }
}
