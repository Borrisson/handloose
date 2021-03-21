import Phaser from "phaser";
import { decipher } from "../../helpers/selectors";
const topCharactersInGame = [];
const midCharactersInGame = [];
const botCharactersInGame = [];

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

function checkOverlap(spriteA, spriteB) {
  let boundsA = spriteA.getBounds();
  let boundsB = spriteB.getBounds();

  return Phaser.Geom.Intersects.RectangleToRectangle(boundsA, boundsB);
}

function randomizer() {
  const listOfCharacters = [];
  if (!window.selectedCharacters.length) {
    while (listOfCharacters.length < 140) {
      listOfCharacters.push(Math.floor(Math.random() * (26 - 0)) + 0);
    }
  } else {
    while (listOfCharacters.length < 140) {
      listOfCharacters.push(
        window.selectedCharacters[
          Math.floor(Math.random() * window.selectedCharacters.length)
        ]
      );
    }
  }
  return listOfCharacters;
}

function destroy(row) {
  switch (row) {
    case "top":
      topCharactersInGame[0].destroy();
      topCharactersInGame.shift();
      break;
    case "mid":
      midCharactersInGame[0].destroy();
      midCharactersInGame.shift();
      break;
    case "bot":
      botCharactersInGame[0].destroy();
      botCharactersInGame.shift();
      break;
  }
}

export default class Play extends Phaser.Scene {
  constructor() {
    super("play");
    this.hits = [];
    this.misses = [];

    this.score = 0;
    this.streak = 0;
  }

  setHits(charNumber) {
    this.hits.push(decipher(charNumber));
  }
  setMisses(charNumber) {
    console.log(decipher(charNumber));
    this.misses.push(decipher(charNumber));
  }

  collisionHandlerTop(charSprite, kbSprite) {
    const {
      frame: { name },
    } = charSprite;

    const char = decipher(name);

    if (
      (Phaser.Input.Keyboard.JustDown(this.key_Q) && char === "Q") ||
      (Phaser.Input.Keyboard.JustDown(this.key_W) && char === "W") ||
      (Phaser.Input.Keyboard.JustDown(this.key_E) && char === "E") ||
      (Phaser.Input.Keyboard.JustDown(this.key_R) && char === "R") ||
      (Phaser.Input.Keyboard.JustDown(this.key_T) && char === "T") ||
      (Phaser.Input.Keyboard.JustDown(this.key_Y) && char === "Y") ||
      (Phaser.Input.Keyboard.JustDown(this.key_U) && char === "U") ||
      (Phaser.Input.Keyboard.JustDown(this.key_I) && char === "I") ||
      (Phaser.Input.Keyboard.JustDown(this.key_O) && char === "O") ||
      (Phaser.Input.Keyboard.JustDown(this.key_P) && char === "P")
    ) if (!Phaser.Geom.Rectangle.Overlaps(charSprite.getBounds(), kbSprite.getBounds()))
      {
        destroy("top");
        this.streak = 0;
        this.streakText.setText('Streak: ' + this.streak);
        this.setMisses(name);
      
      } else {
        console.log(this.hits.length);
        destroy("top");
        this.score += 100;
        this.scoreText.setText('Score: ' + this.score);
        this.streak += 1;
        this.streakText.setText('Streak: ' + this.streak);
        this.setHits(name);
      } 
  }
  collisionHandlerMid(charSprite, kbSprite) {
    const {
      frame: { name },
    } = charSprite;

    const char = decipher(name);

    if (
      (Phaser.Input.Keyboard.JustDown(this.key_A) && char === "A") ||
      (Phaser.Input.Keyboard.JustDown(this.key_S) && char === "S") ||
      (Phaser.Input.Keyboard.JustDown(this.key_D) && char === "D") ||
      (Phaser.Input.Keyboard.JustDown(this.key_F) && char === "F") ||
      (Phaser.Input.Keyboard.JustDown(this.key_G) && char === "G") ||
      (Phaser.Input.Keyboard.JustDown(this.key_H) && char === "H") ||
      (Phaser.Input.Keyboard.JustDown(this.key_J) && char === "J") ||
      (Phaser.Input.Keyboard.JustDown(this.key_K) && char === "K") ||
      (Phaser.Input.Keyboard.JustDown(this.key_L) && char === "L")
    ) if (!Phaser.Geom.Rectangle.Overlaps(charSprite.getBounds(), kbSprite.getBounds()))
      {
        this.streak = 0;
        this.streakText.setText('Streak: ' + this.streak);
        this.setMisses(name);
      
      } else {
        console.log(this.hits.length);
        destroy("mid");
        this.score += 100;
        this.scoreText.setText('Score: ' + this.score);
        this.streak += 1;
        this.streakText.setText('Streak: ' + this.streak);
        this.setHits(name);
    }
  }
  collisionHandlerBottom(charSprite, kbSprite) {
    const {
      frame: { name },
    } = charSprite;

    const char = decipher(name);
    if (
      (Phaser.Input.Keyboard.JustDown(this.key_Z) && char === "Z") ||
      (Phaser.Input.Keyboard.JustDown(this.key_X) && char === "X") ||
      (Phaser.Input.Keyboard.JustDown(this.key_C) && char === "C") ||
      (Phaser.Input.Keyboard.JustDown(this.key_V) && char === "V") ||
      (Phaser.Input.Keyboard.JustDown(this.key_B) && char === "B") ||
      (Phaser.Input.Keyboard.JustDown(this.key_N) && char === "N") ||
      (Phaser.Input.Keyboard.JustDown(this.key_M) && char === "M")
    ) {
      if (!Phaser.Geom.Rectangle.Overlaps(charSprite.getBounds(), kbSprite.getBounds()))
      {
        destroy("bot");
        this.streak = 0;
        this.streakText.setText('Streak: ' + this.streak);
        this.setMisses(name);
      
      } else {
        console.log(this.hits.length);
        destroy("bot");
        this.score += 100;
        this.scoreText.setText('Score: ' + this.score);
        this.streak += 1;
        this.streakText.setText('Streak: ' + this.streak);
        this.setHits(name);

      }
      // console.log(this.hits.length);
      // destroy("bot");
      // this.score += 100;
      // this.scoreText.setText('Score: ' + this.score);
      // this.streak += 1;
      // this.streakText.setText('Streak: ' + this.streak);
      // this.setHits(name);
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
      this.letter.setScale(6).setVelocityY(-window.velocity);
      const firstRow = [0, 3, 6, 9, 12, 15, 18, 21, 23, 25];
      const lastRow = [2, 5, 8, 11, 14, 17, 20];
      if (firstRow.includes(shifty.x)) {
        topCharactersInGame.push(this.letter);
      } else if (lastRow.includes(shifty.x)) {
        botCharactersInGame.push(this.letter);
      } else {
        midCharactersInGame.push(this.letter);
      }
    }
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

  create() {
    this.characters = randomizer().map((x) => {
      return {
        width: this.scale.width / position[x],
        height: this.scale.height,
        x,
      };
    });

    this.key_SPACE = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
    this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.key_B = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
    this.key_C = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
    this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.key_E = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    this.key_F = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    this.key_G = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
    this.key_H = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
    this.key_I = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
    this.key_J = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
    this.key_K = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);
    this.key_L = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);
    this.key_M = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
    this.key_N = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);
    this.key_O = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);
    this.key_P = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
    this.key_Q = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    this.key_R = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.key_T = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
    this.key_U = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.U);
    this.key_V = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.V);
    this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.key_X = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
    this.key_Y = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Y);
    this.key_Z = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
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

    this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', color: '#FF69B4' });
    this.streakText = this.add.text(16, 48, 'Streak: 0', { fontSize: '32px', color: '#FF69B4' });

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
    });
    this.input.keyboard.on("keyup-A", () => {
      this.kb2.setFrame(0);
    });
    this.input.keyboard.on("keydown-B", () => {
      this.kb3.setFrame(5);
    });
    this.input.keyboard.on("keyup-B", () => {
      this.kb3.setFrame(0);
    });
    this.input.keyboard.on("keydown-C", () => {
      this.kb3.setFrame(3);
    });
    this.input.keyboard.on("keyup-C", () => {
      this.kb3.setFrame(0);
    });
    this.input.keyboard.on("keydown-D", () => {
      this.kb2.setFrame(3);
    });
    this.input.keyboard.on("keyup-D", () => {
      this.kb2.setFrame(0);
    });
    this.input.keyboard.on("keydown-E", () => {
      this.kb1.setFrame(3);
    });
    this.input.keyboard.on("keyup-E", () => {
      this.kb1.setFrame(0);
    });
    this.input.keyboard.on("keydown-F", () => {
      this.kb2.setFrame(4);
    });
    this.input.keyboard.on("keyup-F", () => {
      this.kb2.setFrame(0);
    });
    this.input.keyboard.on("keydown-G", () => {
      this.kb2.setFrame(5);
    });
    this.input.keyboard.on("keyup-G", () => {
      this.kb2.setFrame(0);
    });
    this.input.keyboard.on("keydown-H", () => {
      this.kb2.setFrame(6);
    });
    this.input.keyboard.on("keyup-H", () => {
      this.kb2.setFrame(0);
    });
    this.input.keyboard.on("keydown-I", () => {
      this.kb1.setFrame(8);
    });
    this.input.keyboard.on("keyup-I", () => {
      this.kb1.setFrame(0);
    });
    this.input.keyboard.on("keydown-J", () => {
      this.kb2.setFrame(7);
    });
    this.input.keyboard.on("keyup-J", () => {
      this.kb2.setFrame(0);
    });
    this.input.keyboard.on("keydown-K", () => {
      this.kb2.setFrame(8);
    });
    this.input.keyboard.on("keyup-K", () => {
      this.kb2.setFrame(0);
    });
    this.input.keyboard.on("keydown-L", () => {
      this.kb2.setFrame(9);
    });
    this.input.keyboard.on("keyup-L", () => {
      this.kb2.setFrame(0);
    });
    this.input.keyboard.on("keydown-M", () => {
      this.kb3.setFrame(7);
    });
    this.input.keyboard.on("keyup-M", () => {
      this.kb3.setFrame(0);
    });
    this.input.keyboard.on("keydown-N", () => {
      this.kb3.setFrame(6);
    });
    this.input.keyboard.on("keyup-N", () => {
      this.kb3.setFrame(0);
    });
    this.input.keyboard.on("keydown-O", () => {
      this.kb1.setFrame(9);
    });
    this.input.keyboard.on("keyup-O", () => {
      this.kb1.setFrame(0);
    });
    this.input.keyboard.on("keydown-P", () => {
      this.kb1.setFrame(10);
    });
    this.input.keyboard.on("keyup-P", () => {
      this.kb1.setFrame(0);
    });
    this.input.keyboard.on("keydown-Q", () => {
      this.kb1.setFrame(1);
    });
    this.input.keyboard.on("keyup-Q", () => {
      this.kb1.setFrame(0);
    });
    this.input.keyboard.on("keydown-R", () => {
      this.kb1.setFrame(4);
    });
    this.input.keyboard.on("keyup-R", () => {
      this.kb1.setFrame(0);
    });
    this.input.keyboard.on("keydown-S", () => {
      this.kb2.setFrame(2);
    });
    this.input.keyboard.on("keyup-S", () => {
      this.kb2.setFrame(0);
    });
    this.input.keyboard.on("keydown-T", () => {
      this.kb1.setFrame(5);
    });
    this.input.keyboard.on("keyup-T", () => {
      this.kb1.setFrame(0);
    });
    this.input.keyboard.on("keydown-U", () => {
      this.kb1.setFrame(7);
    });
    this.input.keyboard.on("keyup-U", () => {
      this.kb1.setFrame(0);
    });
    this.input.keyboard.on("keydown-V", () => {
      this.kb3.setFrame(4);
    });
    this.input.keyboard.on("keyup-V", () => {
      this.kb3.setFrame(0);
    });
    this.input.keyboard.on("keydown-W", () => {
      this.kb1.setFrame(2);
    });
    this.input.keyboard.on("keyup-W", () => {
      this.kb1.setFrame(0);
    });
    this.input.keyboard.on("keydown-X", () => {
      this.kb3.setFrame(2);
    });
    this.input.keyboard.on("keyup-X", () => {
      this.kb3.setFrame(0);
    });
    this.input.keyboard.on("keydown-Y", () => {
      this.kb1.setFrame(6);
    });
    this.input.keyboard.on("keyup-Y", () => {
      this.kb1.setFrame(0);
    });
    this.input.keyboard.on("keydown-Z", () => {
      this.kb3.setFrame(1);
    });
    this.input.keyboard.on("keyup-Z", () => {
      this.kb3.setFrame(0);
    });

    this.getLetter();

    this.gameTime = this.time.addEvent({
      delay: window.interval,
      loop: true,
      callback: this.getLetter,
      callbackScope: this,
    });

    this.scale.on("resize", this.resize, this);

    this.physics.add.overlap(
      topCharactersInGame,
      this.kb1,
      this.collisionHandlerTop,
      null,
      this
    );

    this.physics.add.overlap(
      midCharactersInGame,
      this.kb2,
      this.collisionHandlerMid,
      null,
      this
    );

    this.physics.add.overlap(
      botCharactersInGame,
      this.kb3,
      this.collisionHandlerBottom,
      null,
      this
    );
    this.input.keyboard.on("keyup-SPACE", () => {
      if (!this.pausePhysics) {
        this.pausePhysics = true;

        this.physics.pause();
        this.gameTime.paused = true;
        this.pause = this.add.text(this.scale.width / 2, this.scale.height / 2, 'PAUSE');
        //load sprite to show that the user has paused
      } else if (this.pausePhysics) {
        this.pause.destroy();
        this.pausePhysics = false;
        this.physics.resume();
        this.gameTime.paused = false;
      }
    });
    this.input.keyboard.on("keydown-ESC", () => {
      if(!this.music.mute) {
        this.music.mute = true;
      } else if (this.music.mute) {
        this.music.mute = false;
      }
    })
  }

  update() {
    //need to short circuit this with array length first so that when it is empty it doesn't give us an error at midCharactersInGame[0].getBounds();
    
    if (topCharactersInGame.length) {
      if (!Phaser.Geom.Rectangle.Overlaps(
        this.scene.scene.physics.world.bounds,
        topCharactersInGame[0].getBounds())
      ){ 
        this.setMisses(topCharactersInGame[0].frame.name);
        this.streak = 0;
        this.streakText.setText('Streak: ' + this.streak);
        destroy("top");
      } else {
        this.collisionHandlerTop(topCharactersInGame[0], this.kb1)
      }
    }
      
   

    if (midCharactersInGame.length) {
      if (!Phaser.Geom.Rectangle.Overlaps(
        this.scene.scene.physics.world.bounds,
        midCharactersInGame[0].getBounds())
      ){ 
        this.setMisses(midCharactersInGame[0].frame.name);
        this.streak = 0;
        this.streakText.setText('Streak: ' + this.streak);
        destroy("mid");
      } else {
        this.collisionHandlerMid(midCharactersInGame[0], this.kb1)
      }
    }

    if (botCharactersInGame.length) {
      if (!Phaser.Geom.Rectangle.Overlaps(
        this.scene.scene.physics.world.bounds,
        botCharactersInGame[0].getBounds())
      ){ 
        this.setMisses(botCharactersInGame[0].frame.name);
        this.streak = 0;
        this.streakText.setText('Streak: ' + this.streak);
        destroy("bot");
      } else {
        this.collisionHandlerBot(botCharactersInGame[0], this.kb1)
      }
    }

    // end game goes here

    if (
      !midCharactersInGame.length &&
      !topCharactersInGame.length &&
      !botCharactersInGame.length
    ) {
      // before scene change we'll send data to the back
      //change state, axios call, then change scene it that order

      console.log("endgame");
      console.log(this.hits);
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
    this.pause.setPosition(width / 2, height / 2);
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