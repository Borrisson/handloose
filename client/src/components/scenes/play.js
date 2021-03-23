import Phaser from "phaser";
import { decipher } from "../../helpers/selectors";

const position = [
  4.08, // Q
  3.8, // A
  3.53, // Z
  3.235, // W
  3.1, // S
  2.92, // X
  2.726, // E
  2.63, // D
  2.49, // C
  2.345, // R
  2.28, // F
  2.175, // V
  2.063, // T
  2.01, // G
  1.925, // B
  1.839, // Y
  1.795, // H
  1.732, // N
  1.662, // U
  1.63, // J
  1.576, // M
  1.49, // I
  1.486, // K
  1.39, // O
  1.367, // L
  1.286, // P
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
      default:
        break;
    }
  }

  setHits(charNumber) {
    this.hits.push(decipher(charNumber));
    this.score +=
      100 *
      (1 +
        Math.ceil(
          (this.streak * (this.interval / 1000)) /
            (27 - this.selectedCharacters.length)
        ));
    this.scoreText.setText("Score: " + this.score);
    this.charactersLeft.setText("Characters Left: " + this.characters.length);
    this.streak += 1;
    this.longest_streak =
      this.longest_streak < this.streak ? this.streak : this.longest_streak;
    this.streakText.setText("Streak: " + this.streak);
  }
  setMisses(charNumber) {
    if (charNumber) {
      this.misses.push(decipher(charNumber));
    }
    this.streak = 0;
    this.streakText.setText("Streak: " + this.streak);
  }

  collisionHandler(charSprite, kbSprite, keypress, row) {
    if (charSprite) {
      const {
        frame: { name },
      } = charSprite;

      const char = decipher(name);

      if (
        Phaser.Geom.Rectangle.Overlaps(
          charSprite.getBounds(),
          kbSprite.getBounds()
        ) &&
        keypress === char
      ) {
        this.destroy(row);
        this.setHits(name);
      } else {
        this.setMisses(name);
      }
    } else {
      this.setMisses();
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
      this.letter.setScale(5).setVelocityY(-this.velocity);
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
      while (this.listOfCharacters.length < 140) {
        this.listOfCharacters.push(Math.floor(Math.random() * 26));
      }
    } else {
      while (this.listOfCharacters.length < 140) {
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
    this.load.spritesheet("Afroman", "assets/Afroman.png", {
      frameWidth: 41,
      frameHeight: 90,
    });
    this.load.spritesheet("Prince", "assets/Prince.png", {
      frameWidth: 66,
      frameHeight: 44,
    });
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

    this.afroman = this.add
      .sprite(this.scale.width / 6, this.scale.height / 3, "Afroman")
      .setScale(2);

    this.prince = this.add
      .sprite(this.scale.width / 6, this.scale.height / 1.5, "Prince")
      .setScale(3);

    this.anims.create({
      key: "Afroman",
      frames: this.anims.generateFrameNumbers("Afroman"),
      frameRate: 2.25,
      repeat: -1,
    });

    this.anims.create({
      key: "Prince",
      frames: this.anims.generateFrameNumbers("Prince"),
      frameRate: 2.25,
      repeat: -1,
    });

    this.afroman.play("Afroman");

    this.prince.play("Prince");

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

    this.scoreText = this.add.text(
      this.scale.width / 100,
      this.scale.height / 40,
      "Score: 0",
      {
        fontSize: "20px",
        color: "#FF69B4",
      }
    );
    this.streakText = this.add.text(
      this.scale.width / 100,
      this.scale.height / 17,
      "Streak: 0",
      {
        fontSize: "20px",
        color: "#FF69B4",
      }
    );
    this.charactersLeft = this.add.text(
      this.scale.width / 100,
      this.scale.height / 11,
      "Characters Left: 140",
      {
        fontSize: "20px",
        color: "#FF69B4",
      }
    );

    this.kb1 = this.physics.add
      .sprite(this.scale.width / 1.945, this.scale.height / 5.05, "kb1")
      .setScale(5);
    this.kb2 = this.physics.add
      .sprite(this.scale.width / 2.01, this.scale.height / 3.9, "kb2")
      .setScale(5);
    this.kb3 = this.physics.add
      .sprite(this.scale.width / 2.175, this.scale.height / 3.1, "kb3")
      .setScale(5);

    this.topGameKeys = this.input.keyboard.addKeys(
      "Q,W,E,R,T,Y,U,I,O,P",
      true,
      true
    );
    this.midGameKeys = this.input.keyboard.addKeys(
      "A,S,D,F,G,H,J,K,L",
      true,
      true
    );
    this.botGameKeys = this.input.keyboard.addKeys("Z,X,C,V,B,N,M", true, true);

    this.gameKeys = [this.topGameKeys, this.midGameKeys, this.botGameKeys];

    for (const [index, row] of this.gameKeys.entries()) {
      const keysArrayOfRow = Object.keys(row);
      for (const gameKey in row) {
        row[gameKey].on("up", () => {
          this[`kb${index + 1}`].setFrame(0);
        });

        row[gameKey].on("down", (eventName, event) => {
          event.stopPropagation();
          this[`kb${index + 1}`].setFrame(keysArrayOfRow.indexOf(gameKey) + 1);

          switch (index) {
            case 0:
              this.collisionHandler(
                this.topCharactersInGame[0],
                this.kb1,
                eventName.originalEvent.key.toUpperCase(),
                "top"
              );
              break;
            case 1:
              this.collisionHandler(
                this.midCharactersInGame[0],
                this.kb2,
                eventName.originalEvent.key.toUpperCase(),
                "mid"
              );
              break;
            case 2:
              this.collisionHandler(
                this.botCharactersInGame[0],
                this.kb3,
                eventName.originalEvent.key.toUpperCase(),
                "bot"
              );
              break;
            default:
              break;
          }
        });
      }
    }

    this.getLetter();

    this.gameTime = this.time.addEvent({
      delay: this.interval,
      loop: true,
      callback: this.getLetter,
      callbackScope: this,
    });

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
      } else {
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
    if (
      this.topCharactersInGame.length &&
      !Phaser.Geom.Rectangle.Overlaps(
        this.scene.scene.physics.world.bounds,
        this.topCharactersInGame[0].getBounds()
      )
    ) {
      this.setMisses(this.topCharactersInGame[0].frame.name);
      this.destroy("top");
      this.charactersLeft.setText("Characters Left: " + this.characters.length);
    }

    if (
      this.midCharactersInGame.length &&
      !Phaser.Geom.Rectangle.Overlaps(
        this.scene.scene.physics.world.bounds,
        this.midCharactersInGame[0].getBounds()
      )
    ) {
      this.setMisses(this.midCharactersInGame[0].frame.name);
      this.destroy("mid");
      this.charactersLeft.setText("Characters Left: " + this.characters.length);
    }

    if (
      this.botCharactersInGame.length &&
      !Phaser.Geom.Rectangle.Overlaps(
        this.scene.scene.physics.world.bounds,
        this.botCharactersInGame[0].getBounds()
      )
    ) {
      this.setMisses(this.botCharactersInGame[0].frame.name);
      this.destroy("bot");
      this.charactersLeft.setText("Characters Left: " + this.characters.length);
    }

    if (
      !this.characters.length &&
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
          accuracies,
          this.props.user.name
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
    }
  }
}
