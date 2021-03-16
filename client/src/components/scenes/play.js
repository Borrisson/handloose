import Phaser from "phaser"

export default class Play extends Phaser.Scene {
  constructor() {
    super("play")
  }
  preload() {
    this.load.spritesheet('keyboardPlay', 'assets/keyboardsPlay.png', {frameWidth: 123, frameHeight: 33})
    this.load.spritesheet('text', 'assets/text.png', {frameWidth: 7, frameHeight: 8})
  }
  create() {
    const kb = this.add.sprite(600, 200, 'keyboardPlay').setScale(6)
    const a = this.physics.add.sprite(275, 1000, 'text')
    a.setScale(6).setVelocityY(-100);
    this.input.keyboard.on('keydown-A', function (){
     kb.setFrame(1); 
    })
    this.input.keyboard.on('keyup-A', function() {
      kb.setFrame(0);
    })
    this.input.keyboard.on('keydown-S', function (){
      kb.setFrame(2); 
     })
    this.input.keyboard.on('keyup-S', function() {
      kb.setFrame(0);
    })
    this.input.keyboard.on('keydown-D', function (){
      kb.setFrame(3); 
    })
    this.input.keyboard.on('keyup-D', function() {
      kb.setFrame(0);
    })
    this.input.keyboard.on('keydown-F', function (){
      kb.setFrame(4); 
    })
    this.input.keyboard.on('keyup-F', function() {
      kb.setFrame(0);
    })

  }
}