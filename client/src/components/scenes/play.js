import Phaser from "phaser";
import { decipher } from "../../helpers/selectors";

const position = [
  3.34, // Q
  3.23, // A
  3.13, // Z
  2.86, // W
  2.8, // S
  2.74, // X
  2.52, // E
  2.48, // D
  2.42, // C
  2.25, // R
  2.22, // F
  2.18, // V
  2.035, // T
  2.01, // G
  1.96, // B
  1.86, // Y
  1.84, // H
  1.81, // N
  1.71, // U
  1.69, // J
  1.665, // M
  1.565, // I
  1.565, // K
  1.475, // O
  1.46, // L
  1.38, // P
];

export default class Play extends Phaser.Scene {
  constructor(props) {
    super("play");
    this.props = props;
  }

  destroy(row) {
    switch (row) {
      case "top":
        this.topCharactersInGame[0].destroy();
        this.topCharactersInGame.shift();
        break;
      case "mid":
        this.midCharactersInGame[0].destroy();
        this.midCharactersInGame.shift();
        break;
      case "bot":
        this.botCharactersInGame[0].destroy();
        this.botCharactersInGame.shift();
        break;
    }
  }

  setHits(charNumber) {
    this.hits.push(decipher(charNumber));
  }
  setMisses(charNumber) {
    this.misses.push(decipher(charNumber));
  }

  collisionHandlerTop(charSprite, kbSprite) {
    if (charSprite !== undefined) {
      const {
        frame: { name },
      } = charSprite;

      const char = decipher(name);

      if (
        char === "Q" ||
        char === "W" ||
        char === "E" ||
        char === "R" ||
        char === "T" ||
        char === "Y" ||
        char === "U" ||
        char === "I" ||
        char === "O" ||
        char === "P"
      ) {
        if (
          !Phaser.Geom.Rectangle.Overlaps(
            charSprite.getBounds(),
            kbSprite.getBounds()
          )
        ) {
          this.streak = 0;
          this.streakText.setText("Streak: " + this.streak);
          this.setMisses(name);
        } else {
          this.destroy("top");
          this.score += 100;
          this.scoreText.setText("Score: " + this.score);
          this.streak += 1;
          this.streakText.setText("Streak: " + this.streak);
          this.setHits(name);
        }
      }
    }
  }
  collisionHandlerMid(charSprite, kbSprite) {
    if (charSprite !== undefined) {
      const {
        frame: { name },
      } = charSprite;

      const char = decipher(name);

      if (
        char === "A" ||
        char === "S" ||
        char === "D" ||
        char === "F" ||
        char === "G" ||
        char === "H" ||
        char === "J" ||
        char === "K" ||
        char === "L"
      ) {
        if (
          !Phaser.Geom.Rectangle.Overlaps(
            charSprite.getBounds(),
            kbSprite.getBounds()
          )
        ) {
          this.streak = 0;
          this.streakText.setText("Streak: " + this.streak);
          this.setMisses(name);
        } else {
          this.destroy("mid");
          this.score += 100;
          this.scoreText.setText("Score: " + this.score);
          this.streak += 1;
          this.streakText.setText("Streak: " + this.streak);
          this.setHits(name);
        }
      }
    }
  }

  collisionHandlerBottom(charSprite, kbSprite) {
    if (charSprite) {
      const {
        frame: { name },
      } = charSprite;

      const char = decipher(name);
      if (
        char === "Z" ||
        char === "X" ||
        char === "C" ||
        char === "V" ||
        char === "B" ||
        char === "N" ||
        char === "M"
      ) {
        if (
          !Phaser.Geom.Rectangle.Overlaps(
            charSprite.getBounds(),
            kbSprite.getBounds()
          )
        ) {
          this.streak = 0;
          this.streakText.setText("Streak: " + this.streak);
          this.setMisses(name);
        } else {
          console.log(this.hits.length);
          this.destroy("bot");
          this.score += 100;
          this.scoreText.setText("Score: " + this.score);
          this.streak += 1;
          this.streakText.setText("Streak: " + this.streak);
          this.setHits(name);
        }
      }
    }
  }
  getLetter() {
    if (!this.characters.length) {
      this.gameTime.remove(false);
    } else {
      const shifty = this.characters.shift();
      this.letter = this.physics.add.sprite(
        shifty.width,
        shifty.height,
        "text",
        shifty.x
      );
      this.letter.setScale(6).setVelocityY(-this.velocity);
      const firstRow = [0, 3, 6, 9, 12, 15, 18, 21, 23, 25];
      const lastRow = [2, 5, 8, 11, 14, 17, 20];
      if (firstRow.includes(shifty.x)) {
        this.topCharactersInGame.push(this.letter);
      } else if (lastRow.includes(shifty.x)) {
        this.botCharactersInGame.push(this.letter);
      } else {
        this.midCharactersInGame.push(this.letter);
      }
    }
  }

  randomizer() {
    this.listOfCharacters = [];
    if (!this.selectedCharacters.length) {
      while (this.listOfCharacters.length < 3) {
        this.listOfCharacters.push(Math.floor(Math.random() * 26));
      }
    } else {
      while (this.listOfCharacters.length < 3) {
        this.listOfCharacters.push(
          this.selectedCharacters[
            Math.floor(Math.random() * this.selectedCharacters.length)
          ]
        );
      }
    }
    return this.listOfCharacters;
  }

  preload() {
    this.load.audio("main_theme", "assets/audio/main_theme.mp3");
    this.load.spritesheet("kb1", "assets/kb1.png", {
      frameWidth: 119,
      frameHeight: 10,
    });
    this.load.spritesheet("kb2", "assets/kb2.png", {
      frameWidth: 107,
      frameHeight: 11,
    });
    this.load.spritesheet("kb3", "assets/kb3.png", {
      frameWidth: 83,
      frameHeight: 12,
    });
    this.load.spritesheet("text", "assets/text.png", {
      frameWidth: 7,
      frameHeight: 8,
    });
  }

  init(data) {
    this.interval = data.interval;
    this.velocity = data.velocity;
    this.selectedCharacters = data.selectedCharacters;
  }

  create() {
    this.hits = [];
    this.misses = [];
    this.topCharactersInGame = [];
    this.midCharactersInGame = [];
    this.botCharactersInGame = [];
    this.score = 0;
    this.streak = 0;
    this.endgame = false;
    this.longest_streak = 0;

    this.characters = this.randomizer().map((x) => {
      return {
        width: this.scale.width / position[x],
        height: this.scale.height,
        x,
      };
    });

    this.pausePhysics = false;

    this.music = this.sound.add("main_theme");

    const musicConfig = {
      mute: false,
      volume: 0.5,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: true,
      delay: 0,
    };

    this.music.play(musicConfig);

    this.scoreText = this.add.text(16, 16, "Score: 0", {
      fontSize: "32px",
      color: "#FF69B4",
    });
    this.streakText = this.add.text(16, 48, "Streak: 0", {
      fontSize: "32px",
      color: "#FF69B4",
    });

    this.kb1 = this.physics.add
      .sprite(this.scale.width / 1.945, this.scale.height / 5.05, "kb1")
      .setScale(6);
    this.kb2 = this.physics.add
      .sprite(this.scale.width / 2.01, this.scale.height / 3.9, "kb2")
      .setScale(6);
    this.kb3 = this.physics.add
      .sprite(this.scale.width / 2.175, this.scale.height / 3.1, "kb3")
      .setScale(6);

    this.input.keyboard.on("keydown-A", () => {
      this.kb2.setFrame(1);
      this.collisionHandlerMid(this.midCharactersInGame[0], this.kb2);
    });
    this.input.keyboard.on("keyup-A", () => {
      this.kb2.setFrame(0);
    });
    this.input.keyboard.on("keydown-B", () => {
      this.kb3.setFrame(5);
      this.collisionHandlerBottom(this.botCharactersInGame[0], this.kb3);
    });
    this.input.keyboard.on("keyup-B", () => {
      this.kb3.setFrame(0);
    });
    this.input.keyboard.on("keydown-C", () => {
      this.kb3.setFrame(3);
      this.collisionHandlerBottom(this.botCharactersInGame[0], this.kb3);
    });
    this.input.keyboard.on("keyup-C", () => {
      this.kb3.setFrame(0);
    });
    this.input.keyboard.on("keydown-D", () => {
      this.kb2.setFrame(3);
      this.collisionHandlerMid(this.midCharactersInGame[0], this.kb2);
    });
    this.input.keyboard.on("keyup-D", () => {
      this.kb2.setFrame(0);
    });
    this.input.keyboard.on("keydown-E", () => {
      this.kb1.setFrame(3);
      this.collisionHandlerTop(this.topCharactersInGame[0], this.kb1);
    });
    this.input.keyboard.on("keyup-E", () => {
      this.kb1.setFrame(0);
    });
    this.input.keyboard.on("keydown-F", () => {
      this.kb2.setFrame(4);
      this.collisionHandlerMid(this.midCharactersInGame[0], this.kb2);
    });
    this.input.keyboard.on("keyup-F", () => {
      this.kb2.setFrame(0);
    });
    this.input.keyboard.on("keydown-G", () => {
      this.kb2.setFrame(5);
      this.collisionHandlerMid(this.midCharactersInGame[0], this.kb2);
    });
    this.input.keyboard.on("keyup-G", () => {
      this.kb2.setFrame(0);
    });
    this.input.keyboard.on("keydown-H", () => {
      this.kb2.setFrame(6);
      this.collisionHandlerMid(this.midCharactersInGame[0], this.kb2);
    });
    this.input.keyboard.on("keyup-H", () => {
      this.kb2.setFrame(0);
    });
    this.input.keyboard.on("keydown-I", () => {
      this.kb1.setFrame(8);
      this.collisionHandlerTop(this.topCharactersInGame[0], this.kb1);
    });
    this.input.keyboard.on("keyup-I", () => {
      this.kb1.setFrame(0);
    });
    this.input.keyboard.on("keydown-J", () => {
      this.kb2.setFrame(7);
      this.collisionHandlerMid(this.midCharactersInGame[0], this.kb2);
    });
    this.input.keyboard.on("keyup-J", () => {
      this.kb2.setFrame(0);
    });
    this.input.keyboard.on("keydown-K", () => {
      this.kb2.setFrame(8);
      this.collisionHandlerMid(this.midCharactersInGame[0], this.kb2);
    });
    this.input.keyboard.on("keyup-K", () => {
      this.kb2.setFrame(0);
    });
    this.input.keyboard.on("keydown-L", () => {
      this.kb2.setFrame(9);
      this.collisionHandlerMid(this.midCharactersInGame[0], this.kb2);
    });
    this.input.keyboard.on("keyup-L", () => {
      this.kb2.setFrame(0);
    });
    this.input.keyboard.on("keydown-M", () => {
      this.kb3.setFrame(7);
      this.collisionHandlerBottom(this.botCharactersInGame[0], this.kb3);
    });
    this.input.keyboard.on("keyup-M", () => {
      this.kb3.setFrame(0);
    });
    this.input.keyboard.on("keydown-N", () => {
      this.kb3.setFrame(6);
      this.collisionHandlerBottom(this.botCharactersInGame[0], this.kb3);
    });
    this.input.keyboard.on("keyup-N", () => {
      this.kb3.setFrame(0);
    });
    this.input.keyboard.on("keydown-O", () => {
      this.kb1.setFrame(9);
      this.collisionHandlerTop(this.topCharactersInGame[0], this.kb1);
    });
    this.input.keyboard.on("keyup-O", () => {
      this.kb1.setFrame(0);
    });
    this.input.keyboard.on("keydown-P", () => {
      this.kb1.setFrame(10);
      this.collisionHandlerTop(this.topCharactersInGame[0], this.kb1);
    });
    this.input.keyboard.on("keyup-P", () => {
      this.kb1.setFrame(0);
    });
    this.input.keyboard.on("keydown-Q", () => {
      this.kb1.setFrame(1);
      this.collisionHandlerTop(this.topCharactersInGame[0], this.kb1);
    });
    this.input.keyboard.on("keyup-Q", () => {
      this.kb1.setFrame(0);
    });
    this.input.keyboard.on("keydown-R", () => {
      this.kb1.setFrame(4);
      this.collisionHandlerTop(this.topCharactersInGame[0], this.kb1);
    });
    this.input.keyboard.on("keyup-R", () => {
      this.kb1.setFrame(0);
    });
    this.input.keyboard.on("keydown-S", () => {
      this.kb2.setFrame(2);
      this.collisionHandlerMid(this.midCharactersInGame[0], this.kb2);
    });
    this.input.keyboard.on("keyup-S", () => {
      this.kb2.setFrame(0);
    });
    this.input.keyboard.on("keydown-T", () => {
      this.kb1.setFrame(5);
      this.collisionHandlerTop(this.topCharactersInGame[0], this.kb1);
    });
    this.input.keyboard.on("keyup-T", () => {
      this.kb1.setFrame(0);
    });
    this.input.keyboard.on("keydown-U", () => {
      this.kb1.setFrame(7);
      this.collisionHandlerTop(this.topCharactersInGame[0], this.kb1);
    });
    this.input.keyboard.on("keyup-U", () => {
      this.kb1.setFrame(0);
    });
    this.input.keyboard.on("keydown-V", () => {
      this.kb3.setFrame(4);
      this.collisionHandlerBottom(this.botCharactersInGame[0], this.kb3);
    });
    this.input.keyboard.on("keyup-V", () => {
      this.kb3.setFrame(0);
    });
    this.input.keyboard.on("keydown-W", () => {
      this.kb1.setFrame(2);
      this.collisionHandlerTop(this.topCharactersInGame[0], this.kb1);
    });
    this.input.keyboard.on("keyup-W", () => {
      this.kb1.setFrame(0);
    });
    this.input.keyboard.on("keydown-X", () => {
      this.kb3.setFrame(2);
      this.collisionHandlerBottom(this.botCharactersInGame[0], this.kb3);
    });
    this.input.keyboard.on("keyup-X", () => {
      this.kb3.setFrame(0);
    });
    this.input.keyboard.on("keydown-Y", () => {
      this.kb1.setFrame(6);
      this.collisionHandlerTop(this.topCharactersInGame[0], this.kb1);
    });
    this.input.keyboard.on("keyup-Y", () => {
      this.kb1.setFrame(0);
    });
    this.input.keyboard.on("keydown-Z", () => {
      this.kb3.setFrame(1);
      this.collisionHandlerBottom(this.botCharactersInGame[0], this.kb3);
    });
    this.input.keyboard.on("keyup-Z", () => {
      this.kb3.setFrame(0);
    });

    this.getLetter();

    this.gameTime = this.time.addEvent({
      delay: this.interval,
      loop: true,
      callback: this.getLetter,
      callbackScope: this,
    });

    this.scale.on("resize", this.resize, this);

    this.input.keyboard.on("keyup-SPACE", () => {
      if (!this.pausePhysics) {
        this.pausePhysics = true;

        this.physics.pause();
        this.gameTime.paused = true;
        this.pause = this.add.text(
          this.scale.width / 2,
          this.scale.height / 2,
          "PAUSE"
        );
        //load sprite to show that the user has paused
      } else if (this.pausePhysics) {
        this.pause.destroy();
        this.pausePhysics = false;
        this.physics.resume();
        this.gameTime.paused = false;
      }
    });
    this.input.keyboard.on("keydown-ESC", () => {
      if (!this.music.mute) {
        this.music.mute = true;
      } else if (this.music.mute) {
        this.music.mute = false;
      }
    });
  }

  update() {
    //need to short circuit this with array length first so that when it is empty it doesn't give us an error at midCharactersInGame[0].getBounds();

    if (
      this.topCharactersInGame.length &&
      !Phaser.Geom.Rectangle.Overlaps(
        this.scene.scene.physics.world.bounds,
        this.topCharactersInGame[0].getBounds()
      )
    ) {
      this.setMisses(this.topCharactersInGame[0].frame.name);
      this.streak = 0;
      this.streakText.setText("Streak: " + this.streak);
      this.destroy("top");
    }

    if (
      this.midCharactersInGame.length &&
      !Phaser.Geom.Rectangle.Overlaps(
        this.scene.scene.physics.world.bounds,
        this.midCharactersInGame[0].getBounds()
      )
    ) {
      this.setMisses(this.midCharactersInGame[0].frame.name);
      this.streak = 0;
      this.streakText.setText("Streak: " + this.streak);
      this.destroy("mid");
    }

    if (
      this.botCharactersInGame.length &&
      !Phaser.Geom.Rectangle.Overlaps(
        this.scene.scene.physics.world.bounds,
        this.botCharactersInGame[0].getBounds()
      )
    ) {
      this.setMisses(this.botCharactersInGame[0].frame.name);
      this.streak = 0;
      this.streakText.setText("Streak: " + this.streak);
      this.destroy("bot");
    }

    // end game goes here

    if (
      !this.midCharactersInGame.length &&
      !this.topCharactersInGame.length &&
      !this.botCharactersInGame.length
    ) {
      if (this.props.user.id) {
        const parsedHits = this.hits.map((character) => {
          return { character, hit: true };
        });

        const parsedMisses = this.misses.map((character) => {
          return { character, hit: false };
        });

        const accuracies = [].concat(parsedHits).concat(parsedMisses);

        this.props.handleGameData(
          {
            score: this.score,
            longest_streak: this.longest_streak,
            key_stroke_frequency: this.interval,
            user_id: this.props.user.id,
          },
          accuracies
        );
        this.props.handleGamePost(
          {
            score: this.score,
            longest_streak: this.longest_streak,
            key_stroke_frequency: this.interval,
            user_id: this.props.user.id,
          },
          accuracies
        );
      }
      this.scene.stop();
      this.scene.start("endgame", {
        score: this.score,
        top: this.topCharactersInGame,
        mid: this.midCharactersInGame,
        bot: this.botCharactersInGame,
        hits: this.hit,
      });
      //this is where we'll add the change scene

      // before scene change we'll send data to the back
      //change state, axios call, then change scene it that order
    }
  }
  resize(gameSize, baseSize, displaySize, resolution) {
    const width = gameSize.width;
    const height = gameSize.height;

    this.cameras.resize(width, height);
    //https://www.html5gamedevs.com/topic/7745-move-a-group-of-sprites-together-as-one-body/
    //we need to fix the resizing I think the answer is in the link above
    this.kb1.setPosition(width / 1.945, height / 5.05);
    this.kb2.setPosition(width / 2.01, height / 3.9);
    this.kb3.setPosition(width / 2.175, height / 3.1);
    if (this.pause) {
      this.pause.setPosition(width / 2, height / 2);
    }
  }
}

//To do:

//End-game scene: Score, highest streak(gotta add), hits and misses, Replay and Go Back button, make it modal
//Resize  (keyboards, decipher chars) responsive design
//Pause display - done
//Levels - Done (Just add the hover later)
//Misses
//Keyboard collision handle once
//Sprites
//Music toggle (Music note sprite) -Done, used ESC button to mute and unmute song.
