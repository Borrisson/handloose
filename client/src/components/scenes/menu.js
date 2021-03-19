import Phaser from "phaser";

export default class Menu extends Phaser.Scene {
  constructor() {
    super("Menu");
  }
  preload() {
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
      .setInteractive()
      .setScale(1.5);

    this.floor = this.add.sprite(750, 850).setScale(10);
    this.floor.scaleX = 16;

    this.logo = this.add
      .sprite(this.scale.width / 2, this.scale.height / 3, "logo")
      .setScale(2);
    this.curtainLeft = this.add.image(130, 450, "curtains").setScale(9);
    this.curtainRight = this.add.image(1400, 450, "curtains").setScale(9);
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
      },
      this
    );
    this.scale.on("resize", this.resize, this);
  }

  resize(gameSize, baseSize, displaySize, resolution) {
    var width = gameSize.width;
    var height = gameSize.height;

    this.cameras.resize(width, height);

    this.play.setPosition(width / 2.2, height / 2);
    this.curtainLeft.setSize(width, height);
    this.curtainRight.setSize(width, height);
    this.floor.setSize(width, height);
    this.logo.setPosition(width / 2, height / 3);
  }
}
