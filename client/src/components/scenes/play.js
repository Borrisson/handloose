import Phaser from "phaser"

function checkOverlap(spriteA, spriteB) {
  var boundsA = spriteA.getBounds();
  var boundsB = spriteB.getBounds();

  return Phaser.Geom.Intersects.RectangleToRectangle(boundsA, boundsB);
}




const position = [3.34, 3.23, 3.13, 621, 609, 693, 765, 838, 982, 910, 982, 1053, 921, 849, 1042, 1114, 460, 682, 550, 755, 898, 705, 538, 561, 826, 490]

export default class Play extends Phaser.Scene {
  constructor() {
    super("play")
  }
  preload() {
    this.load.spritesheet('kb1', 'assets/kb1.png', {frameWidth: 119, frameHeight: 10});
    this.load.spritesheet('kb2', 'assets/kb2.png', {frameWidth: 107, frameHeight: 11});
    this.load.spritesheet('kb3', 'assets/kb3.png', {frameWidth: 83, frameHeight: 12});
    this.load.spritesheet('text', 'assets/text.png', {frameWidth: 7, frameHeight: 8})
  }
  getLetter() {
    const num = (Math.floor(Math.random() * (3 - 0) ) + 0);
    let posX = position[1]
    this.letter = this.physics.add.sprite(this.scale.width / posX, 1000, 'text', 1)
    this.letter.setScale(6).setVelocityY(-(window.velocity));
  }
  create() {
    this.key_SPACE = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.SPACE)
    this.key_A = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.A)
    this.key_B = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.B)
    this.key_C = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.C)
    this.key_D = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.D)
    this.key_E = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.E)
    this.key_F = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.F)
    this.key_G = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.G)
    this.key_H = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.H)
    this.key_I = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.I)
    this.key_J = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.J)
    this.key_K = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.K)
    this.key_L = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.L)
    this.key_M = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.M)
    this.key_N = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.N)
    this.key_O = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.O)
    this.key_P = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.P)
    this.key_Q = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.Q)
    this.key_R = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.R)
    this.key_S = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.S)
    this.key_T = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.T)
    this.key_U = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.U)
    this.key_V = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.V)
    this.key_W = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.W)
    this.key_X = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.X)
    this.key_Y = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.Y)
    this.key_Z = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.Z)
    this.pausePhysics = false;
    
    
    this.kb1 = this.add
      .sprite(this.scale.width / 1.945, this.scale.height / 5.05, 'kb1')
      .setScale(6)
    this.kb2 = this.add
      .sprite(this.scale.width / 2.01, this.scale.height / 3.9, 'kb2')
      .setScale(6);
    this.kb3 = this.add
      .sprite(this.scale.width / 2.175, this.scale.height / 3.1, 'kb3')
      .setScale(6);
    
    this.input.keyboard.on('keydown-A', () => {
     this.kb2.setFrame(1);
    })
    this.input.keyboard.on('keyup-A', () => {
      this.kb2.setFrame(0);
    })
    this.input.keyboard.on('keydown-B', () => {
      this.kb3.setFrame(5); 
     })
    this.input.keyboard.on('keyup-B', () => {
      this.kb3.setFrame(0);
    })
    this.input.keyboard.on('keydown-C', () => {
      this.kb3.setFrame(3); 
    })
    this.input.keyboard.on('keyup-C', () => {
      this.kb3.setFrame(0);
    })
    this.input.keyboard.on('keydown-D', () => {
      this.kb2.setFrame(3); 
    })
    this.input.keyboard.on('keyup-D', () => {
      this.kb2.setFrame(0);
    })
    this.input.keyboard.on('keydown-E', () => {
      this.kb1.setFrame(3); 
    })
    this.input.keyboard.on('keyup-E', () => {
      this.kb1.setFrame(0);
    })
    this.input.keyboard.on('keydown-F', () => {
      this.kb2.setFrame(4); 
    })
    this.input.keyboard.on('keyup-F', () => {
      this.kb2.setFrame(0);
    })
    this.input.keyboard.on('keydown-G', () => {
      this.kb2.setFrame(5); 
    })
    this.input.keyboard.on('keyup-G', () => {
      this.kb2.setFrame(0);
    })
    this.input.keyboard.on('keydown-H', () => {
      this.kb2.setFrame(6); 
    })
    this.input.keyboard.on('keyup-H', () => {
      this.kb2.setFrame(0);
    })
    this.input.keyboard.on('keydown-I', () => {
      this.kb1.setFrame(8); 
    })
    this.input.keyboard.on('keyup-I', () => {
      this.kb1.setFrame(0);
    })
    this.input.keyboard.on('keydown-J', () => {
      this.kb2.setFrame(7); 
    })
    this.input.keyboard.on('keyup-J', () => {
      this.kb2.setFrame(0);
    })
    this.input.keyboard.on('keydown-K', () => {
      this.kb2.setFrame(8); 
    })
    this.input.keyboard.on('keyup-K', () => {
      this.kb2.setFrame(0);
    })
    this.input.keyboard.on('keydown-L', () => {
      this.kb2.setFrame(9); 
    })
    this.input.keyboard.on('keyup-L', () => {
      this.kb2.setFrame(0);
    })
    this.input.keyboard.on('keydown-M', () => {
      this.kb3.setFrame(7); 
    })
    this.input.keyboard.on('keyup-M', () => {
      this.kb3.setFrame(0);
    })
    this.input.keyboard.on('keydown-N', () => {
      this.kb3.setFrame(6); 
    })
    this.input.keyboard.on('keyup-N', () => {
      this.kb3.setFrame(0);
    })
    this.input.keyboard.on('keydown-O', () => {
      this.kb1.setFrame(9); 
    })
    this.input.keyboard.on('keyup-O', () => {
      this.kb1.setFrame(0);
    })
    this.input.keyboard.on('keydown-P', () => {
      this.kb1.setFrame(10); 
    })
    this.input.keyboard.on('keyup-P', () => {
      this.kb1.setFrame(0);
    })
    this.input.keyboard.on('keydown-Q', () => {
      this.kb1.setFrame(1); 
    })
    this.input.keyboard.on('keyup-Q', () => {
      this.kb1.setFrame(0);
    })
    this.input.keyboard.on('keydown-R', () => {
      this.kb1.setFrame(4); 
    })
    this.input.keyboard.on('keyup-R', () => {
      this.kb1.setFrame(0);
    })
    this.input.keyboard.on('keydown-S', () => {
      this.kb2.setFrame(2); 
    })
    this.input.keyboard.on('keyup-S', () => {
      this.kb2.setFrame(0);
    })
    this.input.keyboard.on('keydown-T', () => {
      this.kb1.setFrame(5); 
    })
    this.input.keyboard.on('keyup-T', () => {
      this.kb1.setFrame(0);
    })
    this.input.keyboard.on('keydown-U', () => {
      this.kb1.setFrame(7); 
    })
    this.input.keyboard.on('keyup-U', () => {
      this.kb1.setFrame(0);
    })
    this.input.keyboard.on('keydown-V', () => {
      this.kb3.setFrame(4); 
    })
    this.input.keyboard.on('keyup-V', () => {
      this.kb3.setFrame(0);
    })
    this.input.keyboard.on('keydown-W', () => {
      this.kb1.setFrame(2); 
    })
    this.input.keyboard.on('keyup-W', () => {
      this.kb1.setFrame(0);
    })
    this.input.keyboard.on('keydown-X', () => {
      this.kb3.setFrame(2); 
    })
    this.input.keyboard.on('keyup-X', () => {
      this.kb3.setFrame(0);
    })
    this.input.keyboard.on('keydown-Y', () => {
      this.kb1.setFrame(6); 
    })
    this.input.keyboard.on('keyup-Y', () => {
      this.kb1.setFrame(0);
    })
    this.input.keyboard.on('keydown-Z', () => {
      this.kb3.setFrame(1); 
    })
    this.input.keyboard.on('keyup-Z', () => {
      this.kb3.setFrame(0);
    })
    // this.time.delayedCall(2000, onEvent, [], this);
    this.getLetter();

    // this.time.addEvent({ delay: 2000, loop: true, callback: this.getLetter, callbackScope: this});
    this.scale.on("resize", this.resize, this);
  }
  
  
  update() {
    if (checkOverlap(this.letter, this.kb2)){
      console.log('collide!');
      if (this.key_A.isDown){
        
        this.letter.destroy();
      }
    } 
    
    

    if ( this.key_SPACE.isDown && this.pausePhysics === false) {
      this.pausePhysics = true;
      this.physics.pause();
    } else if (this.pausePhysics === true && this.key_SPACE.isDown){
      this.pausePhysics = false;
      this.physics.resume();
    }

  
  }
  resize(gameSize, baseSize, displaySize, resolution) {
    var width = gameSize.width;
    var height = gameSize.height;

    this.cameras.resize(width, height);

    this.kb1.setPosition(this.scale.width / 1.945, this.scale.height / 5.05);
    this.kb2.setPosition(this.scale.width / 2.01, this.scale.height / 3.9);
    this.kb3.setPosition(
      this.scale.width / 2.175,
      this.scale.height / 3.1
    );
    
  }
}