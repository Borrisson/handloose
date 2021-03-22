import Phaser from "phaser";

export default class Levels extends Phaser.Scene {
  constructor() {
    super("Levels");

    this.levelState = {
      lvl1: true,
      lvl2: false,
      lvl3: false,
      lvl4: false,
      lvl5: false,
      lvl6: false,
      lvl7: false,
      lvl8: false,
      lvl9: false,
      lvl10: false,
    };
  }

  resetState(toggleKey) {
    for (let key in this.levelState) {
      this.levelState[key] = false;
    }
    this.levelState[toggleKey] = true;
  }

  preload() {
    this.load.spritesheet("keyboard", "assets/keyboards.png", {
      frameWidth: 123,
      frameHeight: 33,
    });
    this.load.spritesheet("slider", "assets/slider.png", {
      frameWidth: 44,
      frameHeight: 7,
    });
    this.load.image("arrowLeft", "assets/arrowLeft.png");
    this.load.image("arrowRight", "assets/arrowRight.png");
  }
  create() {
    this.velocity = 100;
    this.interval = 3750;
    this.selectedCharacters = [1, 4, 7, 10];
    this.frame = 0;
    this.scale.on("resize", this.resize, this);
    this.left = this.add
      .image(
        (this.scale.width / 10) * 4,
        (this.scale.height / 20) * 17,
        "arrowLeft"
      )
      .setInteractive();
    this.right = this.add
      .image(
        (this.scale.width / 10) * 6,
        (this.scale.height / 20) * 17,
        "arrowRight"
      )
      .setInteractive();

    this.slide = this.add
      .sprite(this.scale.width / 2, (this.scale.height / 20) * 16, "slider")
      .setScale(5)
      .setFrame(this.frame);

    this.lvl1 = this.add
      .text(
        (this.scale.width / 10) * 4,
        (this.scale.height / 20) * 8,
        "Level 1"
      )
      .setInteractive()
      .setTint(0x6aa84f);
    this.lvl2 = this.add
      .text(
        (this.scale.width / 10) * 4,
        (this.scale.height / 20) * 9,
        "Level 2"
      )
      .setInteractive();
    this.lvl3 = this.add
      .text(
        (this.scale.width / 10) * 4,
        (this.scale.height / 20) * 10,
        "Level 3"
      )
      .setInteractive();
    this.lvl4 = this.add
      .text(
        (this.scale.width / 10) * 4,
        (this.scale.height / 20) * 11,
        "Level 4"
      )
      .setInteractive();
    this.lvl5 = this.add
      .text(
        (this.scale.width / 10) * 4,
        (this.scale.height / 20) * 12,
        "Level 5"
      )
      .setInteractive();
    this.lvl6 = this.add
      .text(
        (this.scale.width / 10) * 6,
        (this.scale.height / 20) * 8,
        "Level 6"
      )
      .setInteractive();
    this.lvl7 = this.add
      .text(
        (this.scale.width / 10) * 6,
        (this.scale.height / 20) * 9,
        "Level 7"
      )
      .setInteractive();
    this.lvl8 = this.add
      .text(
        (this.scale.width / 10) * 6,
        (this.scale.height / 20) * 10,
        "Level 8"
      )
      .setInteractive();
    this.lvl9 = this.add
      .text(
        (this.scale.width / 10) * 6,
        (this.scale.height / 20) * 11,
        "Level 9"
      )
      .setInteractive();
    this.lvl10 = this.add
      .text(
        (this.scale.width / 10) * 6,
        (this.scale.height / 20) * 12,
        "Level 10"
      )
      .setInteractive();

    this.levels = {
      lvl1: this.lvl1,
      lvl2: this.lvl2,
      lvl3: this.lvl3,
      lvl4: this.lvl4,
      lvl5: this.lvl5,
      lvl6: this.lvl6,
      lvl7: this.lvl7,
      lvl8: this.lvl8,
      lvl9: this.lvl9,
      lvl10: this.lvl10,
    };

    this.play = this.add
      .text(this.scale.width / 2, (this.scale.height / 20) * 17, "Play")
      .setInteractive();

    this.kb = this.add
      .sprite(this.scale.width / 2, (this.scale.height / 20) * 5, "keyboard")
      .setScale(5)
      .setFrame(1);

    this.left.on("pointerdown", () => {
      if (this.frame > 0) {
        this.frame--;
        this.slide.setFrame(this.frame);
        this.velocity -= 100;
        this.interval += 1000;
      }
    });
    this.right.on("pointerdown", () => {
      if (this.frame < 3) {
        this.frame++;
        this.slide.setFrame(this.frame);
        this.velocity += 100;
        this.interval -= 1000;
      }
    });

    for (let [key, lvl] of Object.entries(this.levels)) {
      lvl.on(
        "pointerover",
        () => {
          if (!this.levelState[key]) {
            lvl.setTint(0xff00ff);
          }
        },
        this
      );
      lvl.on(
        "pointerout",
        () => {
          if (!this.levelState[key]) {
            lvl.setTint(0xffffff);
          }
        },
        this
      );

      lvl.on(
        "pointerdown",
        () => {
          this.lvl10.setTint(0xffffff);
          this.lvl9.setTint(0xffffff);
          this.lvl8.setTint(0xffffff);
          this.lvl7.setTint(0xffffff);
          this.lvl6.setTint(0xffffff);
          this.lvl5.setTint(0xffffff);
          this.lvl4.setTint(0xffffff);
          this.lvl3.setTint(0xffffff);
          this.lvl2.setTint(0xffffff);
          this.lvl1.setTint(0xffffff);
          lvl.setTint(0x6aa84f);
          this.kb.setFrame(Number(key.match(/\d+/)[0]));
          this.resetState(key);

          switch (key) {
            case "this.lvl1":
              this.selectedCharacters = [1, 4, 7, 10];
              break;
            case "this.lvl2":
              this.selectedCharacters = [1, 4, 7, 10, 19, 22, 24];
              break;
            case "this.lvl3":
              this.selectedCharacters = [1, 4, 7, 10, 13, 16, 19, 22, 24];
              break;
            case "this.lvl4":
              this.selectedCharacters = [
                0,
                1,
                3,
                4,
                6,
                7,
                10,
                13,
                16,
                19,
                22,
                24,
              ];
              break;
            case "this.lvl5":
              this.selectedCharacters = [
                0,
                1,
                3,
                4,
                6,
                7,
                10,
                13,
                16,
                19,
                21,
                22,
                23,
                24,
                25,
              ];
              break;
            case "this.lvl6":
              this.selectedCharacters = [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                10,
                13,
                16,
                19,
                21,
                22,
                23,
                24,
                25,
              ];
              break;
            case "this.lvl7":
              this.selectedCharacters = [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                10,
                11,
                13,
                16,
                19,
                21,
                22,
                23,
                24,
                25,
              ];
              break;
            case "this.lvl8":
              this.selectedCharacters = [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                16,
                19,
                21,
                22,
                23,
                24,
                25,
              ];
              break;
            case "this.lvl9":
              this.selectedCharacters = [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                15,
                16,
                18,
                19,
                21,
                22,
                23,
                24,
                25,
              ];
              break;
            case "this.lvl10":
              this.selectedCharacters = [];
              break;
          }
        },
        this
      );
    }

    this.play.on(
      "pointerout",
      () => {
        this.play.setTint(0xffffff);
      },
      this
    );
    this.play.on(
      "pointerover",
      () => {
        this.play.setTint(0xff00ff);
      },
      this
    );
    this.play.on(
      "pointerdown",
      () => {
        this.scene.start("play", {
          interval: this.interval,
          selectedCharacters: this.selectedCharacters,
          velocity: this.velocity,
        });
      },
      this
    );
  }

  resize(gameSize, baseSize) {
    const width = gameSize.width;
    const height = gameSize.height;
    this.cameras.resize(width, height);
    this.left.setPosition((width / 10) * 4, (height / 20) * 17);
    this.right.setPosition((width / 10) * 6, (height / 20) * 17);
    this.slide.setPosition(width / 2, (height / 20) * 16);
    this.kb.setPosition(width / 2, (height / 20) * 5);
    this.lvl1.setPosition((width / 10) * 4, (height / 20) * 8);
    this.lvl2.setPosition((width / 10) * 4, (height / 20) * 9);
    this.lvl3.setPosition((width / 10) * 4, (height / 20) * 10);
    this.lvl4.setPosition((width / 10) * 4, (height / 20) * 11);
    this.lvl5.setPosition((width / 10) * 4, (height / 20) * 12);
    this.lvl6.setPosition((width / 10) * 6, (height / 20) * 8);
    this.lvl7.setPosition((width / 10) * 6, (height / 20) * 9);
    this.lvl8.setPosition((width / 10) * 6, (height / 20) * 10);
    this.lvl9.setPosition((width / 10) * 6, (height / 20) * 11);
    this.lvl10.setPosition((width / 10) * 6, (height / 20) * 12);
    this.play.setPosition(width / 2, (height / 20) * 17);
  }
}
