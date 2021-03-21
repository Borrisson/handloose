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

    this.velocity = 100;
    this.interval = 3750;
    this.selectedCharacters = [1, 4, 7, 10];
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
    const left = this.add.image(600, 750, "arrowLeft").setInteractive();
    const right = this.add.image(925, 750, "arrowRight").setInteractive();

    const slide = this.add
      .sprite(this.scale.width / 2, this.scale.height / 1.5, "slider")
      .setScale(6);
    let frame = 0;
    slide.setFrame(frame);

    const lvl1 = this.add.text(600, 400, "Level 1").setInteractive();
    const lvl2 = this.add.text(600, 450, "Level 2").setInteractive();
    const lvl3 = this.add.text(600, 500, "Level 3").setInteractive();
    const lvl4 = this.add.text(600, 550, "Level 4").setInteractive();
    const lvl5 = this.add.text(600, 600, "Level 5").setInteractive();
    const lvl6 = this.add.text(850, 400, "Level 6").setInteractive();
    const lvl7 = this.add.text(850, 450, "Level 7").setInteractive();
    const lvl8 = this.add.text(850, 500, "Level 8").setInteractive();
    const lvl9 = this.add.text(850, 550, "Level 9").setInteractive();
    const lvl10 = this.add.text(850, 600, "Level 10").setInteractive();

    this.levels = {
      lvl1,
      lvl2,
      lvl3,
      lvl4,
      lvl5,
      lvl6,
      lvl7,
      lvl8,
      lvl9,
      lvl10,
    };

    const back = this.add.text(1400, 950, "Back").setInteractive();

    const play = this.add.text(740, 850, "Play").setInteractive();

    const kb = this.add
      .sprite(this.scale.width / 2, this.scale.height / 4.5, "keyboard")
      .setScale(5);
    kb.setFrame(1);
    lvl1.setTint(0x6aa84f);

    left.on("pointerdown", () => {
      if (frame > 0) {
        frame--;
        slide.setFrame(frame);

        this.velocity -= 100;
        this.interval += 1000;
      }
    });
    right.on("pointerdown", () => {
      if (frame < 3) {
        frame++;
        slide.setFrame(frame);
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
          lvl10.setTint(0xffffff);
          lvl9.setTint(0xffffff);
          lvl8.setTint(0xffffff);
          lvl7.setTint(0xffffff);
          lvl6.setTint(0xffffff);
          lvl5.setTint(0xffffff);
          lvl4.setTint(0xffffff);
          lvl3.setTint(0xffffff);
          lvl2.setTint(0xffffff);
          lvl1.setTint(0xffffff);
          lvl.setTint(0x6aa84f);
          kb.setFrame(Number(key.match(/\d+/)[0]));
          this.resetState(key);

          switch (key) {
            case "lvl1":
              this.selectedCharacters = [1, 4, 7, 10];
              break;
            case "lvl2":
              this.selectedCharacters = [1, 4, 7, 10, 19, 22, 24];
              break;
            case "lvl3":
              this.selectedCharacters = [1, 4, 7, 10, 13, 16, 19, 22, 24];
              break;
            case "lvl4":
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
            case "lvl5":
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
            case "lvl6":
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
            case "lvl7":
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
            case "lvl8":
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
            case "lvl9":
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
            case "lvl10":
              this.selectedCharacters = [];
              break;
          }
        },
        this
      );
    }

    back.on(
      "pointerout",
      () => {
        back.setTint(0xffffff);
      },
      this
    );
    back.on(
      "pointerover",
      () => {
        back.setTint(0xff00ff);
      },
      this
    );
    back.on(
      "pointerdown",
      () => {
        this.scene.start("Menu");
      },
      this
    );

    play.on(
      "pointerout",
      () => {
        play.setTint(0xffffff);
      },
      this
    );
    play.on(
      "pointerover",
      () => {
        play.setTint(0xff00ff);
      },
      this
    );
    play.on(
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
}
