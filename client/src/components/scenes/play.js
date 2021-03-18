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
    this.key_SPACE = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.SPACE)
    this.pausePhysics = false;
 

    const kb = this.add.sprite(600, 200, 'keyboardPlay').setScale(6)
    const a = this.physics.add.sprite(275, 1000, 'text', 0)
    a.setScale(6).setVelocityY(-100);
    const b = this.physics.add.sprite(450, 1000, 'text', 1);
    
    const onEvent = function () {
      b.setScale(6).setVelocityY(-100);
    }
    
    this.input.keyboard.on('keydown-A', function (){
     kb.setFrame(1); 
    })
    this.input.keyboard.on('keyup-A', function() {
      kb.setFrame(0);
    })
    this.input.keyboard.on('keydown-B', function (){
      kb.setFrame(2); 
     })
    this.input.keyboard.on('keyup-B', function() {
      kb.setFrame(0);
    })
    this.input.keyboard.on('keydown-C', function (){
      kb.setFrame(3); 
    })
    this.input.keyboard.on('keyup-C', function() {
      kb.setFrame(0);
    })
    this.input.keyboard.on('keydown-D', function (){
      kb.setFrame(4); 
    })
    this.input.keyboard.on('keyup-D', function() {
      kb.setFrame(0);
    })
    this.input.keyboard.on('keydown-E', function (){
      kb.setFrame(5); 
    })
    this.input.keyboard.on('keyup-E', function() {
       kb.setFrame(0);
    })
    this.input.keyboard.on('keydown-F', function (){
      kb.setFrame(6); 
    })
    this.input.keyboard.on('keyup-F', function() {
       kb.setFrame(0);
    })
    this.input.keyboard.on('keydown-G', function (){
      kb.setFrame(7); 
    })
    this.input.keyboard.on('keyup-G', function() {
       kb.setFrame(0);
    })
    this.input.keyboard.on('keydown-H', function (){
      kb.setFrame(8); 
    })
    this.input.keyboard.on('keyup-H', function() {
       kb.setFrame(0);
    })
    this.input.keyboard.on('keydown-I', function (){
      kb.setFrame(9); 
    })
    this.input.keyboard.on('keyup-I', function() {
       kb.setFrame(0);
    })
    this.input.keyboard.on('keydown-J', function (){
      kb.setFrame(10); 
    })
    this.input.keyboard.on('keyup-J', function() {
       kb.setFrame(0);
    })
    this.input.keyboard.on('keydown-K', function (){
      kb.setFrame(11); 
    })
    this.input.keyboard.on('keyup-K', function() {
       kb.setFrame(0);
    })
    this.input.keyboard.on('keydown-L', function (){
      kb.setFrame(12); 
    })
    this.input.keyboard.on('keyup-L', function() {
       kb.setFrame(0);
    })
    this.input.keyboard.on('keydown-M', function (){
      kb.setFrame(13); 
    })
    this.input.keyboard.on('keyup-M', function() {
       kb.setFrame(0);
    })
    this.input.keyboard.on('keydown-N', function (){
      kb.setFrame(14); 
    })
    this.input.keyboard.on('keyup-N', function() {
       kb.setFrame(0);
    })
    this.input.keyboard.on('keydown-O', function (){
      kb.setFrame(15); 
    })
    this.input.keyboard.on('keyup-O', function() {
       kb.setFrame(0);
    })
    this.input.keyboard.on('keydown-P', function (){
      kb.setFrame(16); 
    })
    this.input.keyboard.on('keyup-P', function() {
       kb.setFrame(0);
    })
    this.input.keyboard.on('keydown-Q', function (){
      kb.setFrame(17); 
    })
    this.input.keyboard.on('keyup-Q', function() {
       kb.setFrame(0);
    })
    this.input.keyboard.on('keydown-R', function (){
      kb.setFrame(18); 
    })
    this.input.keyboard.on('keyup-R', function() {
      kb.setFrame(0);
    })
    this.input.keyboard.on('keydown-S', function (){
      kb.setFrame(19); 
    })
    this.input.keyboard.on('keyup-S', function() {
      kb.setFrame(0);
    })
    this.input.keyboard.on('keydown-T', function (){
      kb.setFrame(20); 
    })
    this.input.keyboard.on('keyup-T', function() {
      kb.setFrame(0);
    })
    this.input.keyboard.on('keydown-U', function (){
      kb.setFrame(21); 
    })
    this.input.keyboard.on('keyup-U', function() {
      kb.setFrame(0);
    })
    this.input.keyboard.on('keydown-V', function (){
      kb.setFrame(22); 
    })
    this.input.keyboard.on('keyup-V', function() {
      kb.setFrame(0);
    })
    this.input.keyboard.on('keydown-W', function (){
      kb.setFrame(23); 
    })
    this.input.keyboard.on('keyup-W', function() {
      kb.setFrame(0);
    })
    this.input.keyboard.on('keydown-X', function (){
      kb.setFrame(24); 
    })
    this.input.keyboard.on('keyup-X', function() {
      kb.setFrame(0);
    })
    this.input.keyboard.on('keydown-Y', function (){
      kb.setFrame(25); 
    })
    this.input.keyboard.on('keyup-Y', function() {
      kb.setFrame(0);
    })
    this.input.keyboard.on('keydown-Z', function (){
      kb.setFrame(26); 
    })
    this.input.keyboard.on('keyup-Z', function() {
      kb.setFrame(0);
    })
    this.time.delayedCall(2000, onEvent, [], this);

    
    
  }
  
  update() {

    

    if ( this.key_SPACE.isDown && this.pausePhysics === false) {
      this.pausePhysics = true;
      this.physics.pause();
    } else if (this.pausePhysics === true && this.key_SPACE.isDown){
      this.pausePhysics = false;
      this.physics.resume();
    }

  
  }
}