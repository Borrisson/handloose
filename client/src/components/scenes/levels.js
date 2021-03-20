import Phaser from "phaser";

export default class Levels extends Phaser.Scene {
  constructor() {
    super("Levels");
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
  }
  create() {
    const left = this.add.text(450, 750, "<==").setInteractive();
    const right = this.add.text(750, 750, "==>").setInteractive();

    const slide = this.add.sprite(625, 700, "slider").setScale(5);
    let frame = 0;
    window.velocity = 100;
    slide.setFrame(frame);
    window.interval = 3750;
    window.selectedCharacters = []; // if empty it is all

    let selected = false;

    const lvl1 = this.add.text(500, 400, "Level 1").setInteractive();
    const lvl2 = this.add.text(500, 450, "Level 2").setInteractive();
    const lvl3 = this.add.text(500, 500, "Level 3").setInteractive();
    const lvl4 = this.add.text(500, 550, "Level 4").setInteractive();
    const lvl5 = this.add.text(500, 600, "Level 5").setInteractive();
    const lvl6 = this.add.text(700, 400, "Level 6").setInteractive();
    const lvl7 = this.add.text(700, 450, "Level 7").setInteractive();
    const lvl8 = this.add.text(700, 500, "Level 8").setInteractive();
    const lvl9 = this.add.text(700, 550, "Level 9").setInteractive();
    const lvl10 = this.add.text(700, 600, "Level 10").setInteractive();

    const back = this.add.text(1400, 950, "Back").setInteractive();

    const play = this.add.text(600, 850, "Play").setInteractive();

    const kb = this.add.sprite(500, 200, "keyboard").setScale(5);
    kb.setFrame(0);

    left.on("pointerdown", function () {
      if (frame > 0) {
        frame--;
        slide.setFrame(frame);
        window.velocity -= 100;
        window.interval += 1000;
      }
    });
    right.on("pointerdown", function () {
      if (frame < 3) {
        frame++;
        slide.setFrame(frame);
        window.velocity += 100;
        window.interval -= 1000;
      }
    });

    lvl1.on(
      "pointerover",
      function () {
        if (!selected) {
          lvl1.setTint(0xff00ff);
        }
      },
      this
    );
    lvl1.on(
      "pointerout",
      function () {
        if (!selected) {
          lvl1.setTint(0xffffff);
        }
      },
      this
    );
    lvl1.on(
      "pointerdown",
      function () {
        lvl1.setTint(0x6aa84f);
        kb.setFrame(1);
        selected = true;
        window.selectedCharacters = [1, 4, 7, 10];
        console.log(window.selectedCharacters);
      },
      this
    );

    lvl2.on(
      "pointerover",
      function () {
        lvl2.setTint(0xff00ff);
      },
      this
    );
    lvl2.on(
      "pointerout",
      function () {
        lvl2.setTint(0xffffff);
      },
      this
    );
    lvl2.on(
      "pointerdown",
      function () {
        lvl2.setTint(0x6aa84f);
        lvl1.setTint(0xffffff);
        kb.setFrame(2);
        selected = true;
      },
      this
    );

    back.on(
      "pointerout",
      function () {
        back.setTint(0xffffff);
      },
      this
    );
    back.on(
      "pointerover",
      function () {
        back.setTint(0xff00ff);
      },
      this
    );
    back.on(
      "pointerdown",
      function () {
        this.scene.start("Menu");
      },
      this
    );

    play.on(
      "pointerout",
      function () {
        play.setTint(0xffffff);
      },
      this
    );
    play.on(
      "pointerover",
      function () {
        play.setTint(0xff00ff);
      },
      this
    );
    play.on(
      "pointerdown",
      function () {
        this.scene.start("play");
      },
      this
    );
  }
}
