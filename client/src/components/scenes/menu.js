import Phaser from "phaser";

export default class Menu extends Phaser.Scene {
  constructor() {
    super("Menu");
  }
  preload() {
    this.load.audio("menu_space", "assets/audio/press_space_menu.wav");

    this.load.spritesheet("logo", "assets/logo.png", {
      frameWidth: 291,
      frameHeight: 35,
    });
    this.load.spritesheet("floor", "assets/dancefloor.png", {
      frameWidth: 100,
      frameHeight: 30,
    });
    this.load.image("curtains", "assets/curtains.png");
  }
  create() {
    this.play = this.add
      .text(this.scale.width / 2.2, this.scale.height / 2, "Press Space")
      .setInteractive();

    this.floor = this.add
      .sprite(this.scale.width / 2, this.scale.height / 1.1)
      .setScale(5);
    this.floor.scaleX = 10.5;

    this.logo = this.add
      .sprite(this.scale.width / 2, this.scale.height / 3, "logo")
      .setScale(2);
    this.curtainLeft = this.add
      .image(this.scale.width / 10, this.scale.height / 3, "curtains")
      .setScale(5);
    this.curtainRight = this.add
      .image(this.scale.width / 1.1, this.scale.height / 3, "curtains")
      .setScale(5);
    this.curtainRight.flipX = true;

    this.anims.create({
      key: "logo",
      frames: this.anims.generateFrameNumbers("logo"),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "floor",
      frames: this.anims.generateFrameNumbers("floor"),
      frameRate: 2,
      repeat: -1,
    });

    this.floor.play("floor");
    this.logo.play("logo");

    this.input.keyboard.on(
      "keyup-SPACE",
      function () {
        this.scene.start("Levels");
        this.scene.stop("Menu");
      },
      this
    );

    let start = this.sound.add("menu_space", { volume: 0.1});

    this.input.keyboard.on("keydown-SPACE", function () {
      start.play();
    });
  }
}
