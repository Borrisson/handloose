import Phaser from "phaser"

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
  create() {
    console.log(window.velocity);
    this.key_SPACE = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.SPACE)
    this.pausePhysics = false;
 

    const kb1 = this.add.sprite(790, 200, 'kb1').setScale(6);
    //this.physics.enable(kb1);
    //kb1.body.setSize(119, 10);
    const kb2 = this.add.sprite(765, 260, 'kb2').setScale(6);
    const kb3 = this.add.sprite(705, 320, 'kb3').setScale(6);
    const a = this.physics.add.sprite(275, 1000, 'text', 0);
    a.setScale(6).setVelocityY(-(window.velocity));
    const b = this.physics.add.sprite(575, 1000, 'text', 1);
    const c = this.physics.add.sprite(431, 1000, 'text', 2);
    const d = this.physics.add.sprite(420, 1000, 'text', 3);
    const e = this.physics.add.sprite(409, 1000, 'text', 4);
    const f = this.physics.add.sprite(492, 1000, 'text', 5);
    const g = this.physics.add.sprite(564, 1000, 'text', 6);
    const h = this.physics.add.sprite(636, 1000, 'text', 7);
    const i = this.physics.add.sprite(780, 1000, 'text', 8);
    const j = this.physics.add.sprite(707, 1000, 'text', 9);
    const k = this.physics.add.sprite(780, 1000, 'text', 10);
    const l = this.physics.add.sprite(852, 1000, 'text', 11);
    const m = this.physics.add.sprite(721, 1000, 'text', 12);
    const n = this.physics.add.sprite(648, 1000, 'text', 13);
    const o = this.physics.add.sprite(840, 1000, 'text', 14);
    const p = this.physics.add.sprite(912, 1000, 'text', 15);
    const q = this.physics.add.sprite(263, 1000, 'text', 16);
    const r = this.physics.add.sprite(481, 1000, 'text', 17);
    const s = this.physics.add.sprite(348, 1000, 'text', 18);
    const t = this.physics.add.sprite(553, 1000, 'text', 19);
    const u = this.physics.add.sprite(697, 1000, 'text', 20);
    const v = this.physics.add.sprite(504, 1000, 'text', 21);
    const w = this.physics.add.sprite(336, 1000, 'text', 22);
    const x = this.physics.add.sprite(360, 1000, 'text', 23);
    const y = this.physics.add.sprite(624, 1000, 'text', 24);
    const z = this.physics.add.sprite(287, 1000, 'text', 25);
    
    const onEvent = function () {
      b.setScale(6).setVelocityY(-125);
      c.setScale(6).setVelocityY(-110);
      d.setScale(6).setVelocityY(-100);
      e.setScale(6).setVelocityY(-90);
      f.setScale(6).setVelocityY(-80);
      g.setScale(6).setVelocityY(-75);
      h.setScale(6).setVelocityY(-120);
      i.setScale(6).setVelocityY(-115);
      j.setScale(6).setVelocityY(-65);
      k.setScale(6).setVelocityY(-105);
      l.setScale(6).setVelocityY(-95);
      m.setScale(6).setVelocityY(-85);
      n.setScale(6).setVelocityY(-70);
      o.setScale(6).setVelocityY(-25);
      p.setScale(6).setVelocityY(-35);
      q.setScale(6).setVelocityY(-45);
      r.setScale(6).setVelocityY(-60);
      s.setScale(6).setVelocityY(-130);
      t.setScale(6).setVelocityY(-135);
      u.setScale(6).setVelocityY(-30);
      v.setScale(6).setVelocityY(-20);
      w.setScale(6).setVelocityY(-40);
      x.setScale(6).setVelocityY(-140);
      y.setScale(6).setVelocityY(-15);
      z.setScale(6).setVelocityY(-145);
    }
    
    this.input.keyboard.on('keydown-A', function (){
     kb2.setFrame(1); 
    })
    this.input.keyboard.on('keyup-A', function() {
      kb2.setFrame(0);
    })
    this.input.keyboard.on('keydown-B', function (){
      kb3.setFrame(5); 
     })
    this.input.keyboard.on('keyup-B', function() {
      kb3.setFrame(0);
    })
    this.input.keyboard.on('keydown-C', function (){
      kb3.setFrame(3); 
    })
    this.input.keyboard.on('keyup-C', function() {
      kb3.setFrame(0);
    })
    this.input.keyboard.on('keydown-D', function (){
      kb2.setFrame(3); 
    })
    this.input.keyboard.on('keyup-D', function() {
      kb2.setFrame(0);
    })
    this.input.keyboard.on('keydown-E', function (){
      kb1.setFrame(3); 
    })
    this.input.keyboard.on('keyup-E', function() {
      kb1.setFrame(0);
    })
    this.input.keyboard.on('keydown-F', function (){
      kb2.setFrame(4); 
    })
    this.input.keyboard.on('keyup-F', function() {
      kb2.setFrame(0);
    })
    this.input.keyboard.on('keydown-G', function (){
      kb2.setFrame(5); 
    })
    this.input.keyboard.on('keyup-G', function() {
      kb2.setFrame(0);
    })
    this.input.keyboard.on('keydown-H', function (){
      kb2.setFrame(6); 
    })
    this.input.keyboard.on('keyup-H', function() {
      kb2.setFrame(0);
    })
    this.input.keyboard.on('keydown-I', function (){
      kb1.setFrame(8); 
    })
    this.input.keyboard.on('keyup-I', function() {
      kb1.setFrame(0);
    })
    this.input.keyboard.on('keydown-J', function (){
      kb2.setFrame(7); 
    })
    this.input.keyboard.on('keyup-J', function() {
      kb2.setFrame(0);
    })
    this.input.keyboard.on('keydown-K', function (){
      kb2.setFrame(8); 
    })
    this.input.keyboard.on('keyup-K', function() {
      kb2.setFrame(0);
    })
    this.input.keyboard.on('keydown-L', function (){
      kb2.setFrame(9); 
    })
    this.input.keyboard.on('keyup-L', function() {
      kb2.setFrame(0);
    })
    this.input.keyboard.on('keydown-M', function (){
      kb3.setFrame(7); 
    })
    this.input.keyboard.on('keyup-M', function() {
      kb3.setFrame(0);
    })
    this.input.keyboard.on('keydown-N', function (){
      kb3.setFrame(6); 
    })
    this.input.keyboard.on('keyup-N', function() {
      kb3.setFrame(0);
    })
    this.input.keyboard.on('keydown-O', function (){
      kb1.setFrame(9); 
    })
    this.input.keyboard.on('keyup-O', function() {
      kb1.setFrame(0);
    })
    this.input.keyboard.on('keydown-P', function (){
      kb1.setFrame(10); 
    })
    this.input.keyboard.on('keyup-P', function() {
      kb1.setFrame(0);
    })
    this.input.keyboard.on('keydown-Q', function (){
      kb1.setFrame(1); 
    })
    this.input.keyboard.on('keyup-Q', function() {
      kb1.setFrame(0);
    })
    this.input.keyboard.on('keydown-R', function (){
      kb1.setFrame(4); 
    })
    this.input.keyboard.on('keyup-R', function() {
      kb1.setFrame(0);
    })
    this.input.keyboard.on('keydown-S', function (){
      kb2.setFrame(2); 
    })
    this.input.keyboard.on('keyup-S', function() {
      kb2.setFrame(0);
    })
    this.input.keyboard.on('keydown-T', function (){
      kb1.setFrame(5); 
    })
    this.input.keyboard.on('keyup-T', function() {
      kb1.setFrame(0);
    })
    this.input.keyboard.on('keydown-U', function (){
      kb1.setFrame(7); 
    })
    this.input.keyboard.on('keyup-U', function() {
      kb1.setFrame(0);
    })
    this.input.keyboard.on('keydown-V', function (){
      kb3.setFrame(4); 
    })
    this.input.keyboard.on('keyup-V', function() {
      kb3.setFrame(0);
    })
    this.input.keyboard.on('keydown-W', function (){
      kb1.setFrame(2); 
    })
    this.input.keyboard.on('keyup-W', function() {
      kb1.setFrame(0);
    })
    this.input.keyboard.on('keydown-X', function (){
      kb3.setFrame(2); 
    })
    this.input.keyboard.on('keyup-X', function() {
      kb3.setFrame(0);
    })
    this.input.keyboard.on('keydown-Y', function (){
      kb1.setFrame(6); 
    })
    this.input.keyboard.on('keyup-Y', function() {
      kb1.setFrame(0);
    })
    this.input.keyboard.on('keydown-Z', function (){
      kb3.setFrame(1); 
    })
    this.input.keyboard.on('keyup-Z', function() {
      kb3.setFrame(0);
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