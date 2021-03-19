import Phaser from "phaser"

function checkOverlap(spriteA, spriteB) {
  var boundsA = spriteA.getBounds();
  var boundsB = spriteB.getBounds();

  return Phaser.Geom.Intersects.RectangleToRectangle(boundsA, boundsB);
}

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
    this.key_A = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.A)
    this.pausePhysics = false;
 

    window.kb1 = this.add.sprite(790, 200, 'kb1').setScale(6);
    window.kb2 = this.add.sprite(765, 260, 'kb2').setScale(6);
    window.kb3 = this.add.sprite(705, 320, 'kb3').setScale(6);
    window.a = this.physics.add.sprite(477, 1000, 'text', 0);
    window.a.setScale(6).setVelocityY(-(window.velocity));
    window.b = this.physics.add.sprite(777, 1000, 'text', 1);
    window.c = this.physics.add.sprite(633, 1000, 'text', 2);
    window.d = this.physics.add.sprite(621, 1000, 'text', 3);
    window.e = this.physics.add.sprite(609, 1000, 'text', 4);
    window.f = this.physics.add.sprite(693, 1000, 'text', 5);
    window.g = this.physics.add.sprite(765, 1000, 'text', 6);
    window.h = this.physics.add.sprite(838, 1000, 'text', 7);
    window.i = this.physics.add.sprite(982, 1000, 'text', 8);
    window.j = this.physics.add.sprite(910, 1000, 'text', 9);
    window.k = this.physics.add.sprite(982, 1000, 'text', 10);
    window.l = this.physics.add.sprite(1053, 1000, 'text', 11);
    window.m = this.physics.add.sprite(921, 1000, 'text', 12);
    window.n = this.physics.add.sprite(849, 1000, 'text', 13);
    window.o = this.physics.add.sprite(1042, 1000, 'text', 14);
    window.p = this.physics.add.sprite(1114, 1000, 'text', 15);
    window.q = this.physics.add.sprite(460, 1000, 'text', 16);
    window.r = this.physics.add.sprite(682, 1000, 'text', 17);
    window.s = this.physics.add.sprite(550, 1000, 'text', 18);
    window.t = this.physics.add.sprite(755, 1000, 'text', 19);
    window.u = this.physics.add.sprite(898, 1000, 'text', 20);
    window.v = this.physics.add.sprite(705, 1000, 'text', 21);
    window.w = this.physics.add.sprite(538, 1000, 'text', 22);
    window.x = this.physics.add.sprite(561, 1000, 'text', 23);
    window.y = this.physics.add.sprite(826, 1000, 'text', 24);
    window.z = this.physics.add.sprite(490, 1000, 'text', 25);
    
    
    const onEvent = function () {
      window.b.setScale(6).setVelocityY(-125);
      window.c.setScale(6).setVelocityY(-110);
      window.d.setScale(6).setVelocityY(-100);
      window.e.setScale(6).setVelocityY(-90);
      window.f.setScale(6).setVelocityY(-80);
      window.g.setScale(6).setVelocityY(-75);
      window.h.setScale(6).setVelocityY(-120);
      window.i.setScale(6).setVelocityY(-115);
      window.j.setScale(6).setVelocityY(-65);
      window.k.setScale(6).setVelocityY(-105);
      window.l.setScale(6).setVelocityY(-95);
      window.m.setScale(6).setVelocityY(-85);
      window.n.setScale(6).setVelocityY(-70);
      window.o.setScale(6).setVelocityY(-25);
      window.p.setScale(6).setVelocityY(-35);
      window.q.setScale(6).setVelocityY(-45);
      window.r.setScale(6).setVelocityY(-60);
      window.s.setScale(6).setVelocityY(-130);
      window.t.setScale(6).setVelocityY(-135);
      window.u.setScale(6).setVelocityY(-30);
      window.v.setScale(6).setVelocityY(-20);
      window.w.setScale(6).setVelocityY(-40);
      window.x.setScale(6).setVelocityY(-140);
      window.y.setScale(6).setVelocityY(-115);
      window.z.setScale(6).setVelocityY(-145);
    }
    
    this.input.keyboard.on('keydown-A', function (){
     window.kb2.setFrame(1); 
    })
    this.input.keyboard.on('keyup-A', function() {
      window.kb2.setFrame(0);
    })
    this.input.keyboard.on('keydown-B', function (){
      window.kb3.setFrame(5); 
     })
    this.input.keyboard.on('keyup-B', function() {
      window.kb3.setFrame(0);
    })
    this.input.keyboard.on('keydown-C', function (){
      window.kb3.setFrame(3); 
    })
    this.input.keyboard.on('keyup-C', function() {
      window.kb3.setFrame(0);
    })
    this.input.keyboard.on('keydown-D', function (){
      window.kb2.setFrame(3); 
    })
    this.input.keyboard.on('keyup-D', function() {
      window.kb2.setFrame(0);
    })
    this.input.keyboard.on('keydown-E', function (){
      window.kb1.setFrame(3); 
    })
    this.input.keyboard.on('keyup-E', function() {
      window.kb1.setFrame(0);
    })
    this.input.keyboard.on('keydown-F', function (){
      window.kb2.setFrame(4); 
    })
    this.input.keyboard.on('keyup-F', function() {
      window.kb2.setFrame(0);
    })
    this.input.keyboard.on('keydown-G', function (){
      window.kb2.setFrame(5); 
    })
    this.input.keyboard.on('keyup-G', function() {
      window.kb2.setFrame(0);
    })
    this.input.keyboard.on('keydown-H', function (){
      window.kb2.setFrame(6); 
    })
    this.input.keyboard.on('keyup-H', function() {
      window.kb2.setFrame(0);
    })
    this.input.keyboard.on('keydown-I', function (){
      window.kb1.setFrame(8); 
    })
    this.input.keyboard.on('keyup-I', function() {
      window.kb1.setFrame(0);
    })
    this.input.keyboard.on('keydown-J', function (){
      window.kb2.setFrame(7); 
    })
    this.input.keyboard.on('keyup-J', function() {
      window.kb2.setFrame(0);
    })
    this.input.keyboard.on('keydown-K', function (){
      window.kb2.setFrame(8); 
    })
    this.input.keyboard.on('keyup-K', function() {
      window.kb2.setFrame(0);
    })
    this.input.keyboard.on('keydown-L', function (){
      window.kb2.setFrame(9); 
    })
    this.input.keyboard.on('keyup-L', function() {
      window.kb2.setFrame(0);
    })
    this.input.keyboard.on('keydown-M', function (){
      window.kb3.setFrame(7); 
    })
    this.input.keyboard.on('keyup-M', function() {
      window.kb3.setFrame(0);
    })
    this.input.keyboard.on('keydown-N', function (){
      window.kb3.setFrame(6); 
    })
    this.input.keyboard.on('keyup-N', function() {
      window.kb3.setFrame(0);
    })
    this.input.keyboard.on('keydown-O', function (){
      window.kb1.setFrame(9); 
    })
    this.input.keyboard.on('keyup-O', function() {
      window.kb1.setFrame(0);
    })
    this.input.keyboard.on('keydown-P', function (){
      window.kb1.setFrame(10); 
    })
    this.input.keyboard.on('keyup-P', function() {
      window.kb1.setFrame(0);
    })
    this.input.keyboard.on('keydown-Q', function (){
      window.kb1.setFrame(1); 
    })
    this.input.keyboard.on('keyup-Q', function() {
      window.kb1.setFrame(0);
    })
    this.input.keyboard.on('keydown-R', function (){
      window.kb1.setFrame(4); 
    })
    this.input.keyboard.on('keyup-R', function() {
      window.kb1.setFrame(0);
    })
    this.input.keyboard.on('keydown-S', function (){
      window.kb2.setFrame(2); 
    })
    this.input.keyboard.on('keyup-S', function() {
      window.kb2.setFrame(0);
    })
    this.input.keyboard.on('keydown-T', function (){
      window.kb1.setFrame(5); 
    })
    this.input.keyboard.on('keyup-T', function() {
      window.kb1.setFrame(0);
    })
    this.input.keyboard.on('keydown-U', function (){
      window.kb1.setFrame(7); 
    })
    this.input.keyboard.on('keyup-U', function() {
      window.kb1.setFrame(0);
    })
    this.input.keyboard.on('keydown-V', function (){
      window.kb3.setFrame(4); 
    })
    this.input.keyboard.on('keyup-V', function() {
      window.kb3.setFrame(0);
    })
    this.input.keyboard.on('keydown-W', function (){
      window.kb1.setFrame(2); 
    })
    this.input.keyboard.on('keyup-W', function() {
      window.kb1.setFrame(0);
    })
    this.input.keyboard.on('keydown-X', function (){
      window.kb3.setFrame(2); 
    })
    this.input.keyboard.on('keyup-X', function() {
      window.kb3.setFrame(0);
    })
    this.input.keyboard.on('keydown-Y', function (){
      window.kb1.setFrame(6); 
    })
    this.input.keyboard.on('keyup-Y', function() {
      window.kb1.setFrame(0);
    })
    this.input.keyboard.on('keydown-Z', function (){
      window.kb3.setFrame(1); 
    })
    this.input.keyboard.on('keyup-Z', function() {
      window.kb3.setFrame(0);
    })
    this.time.delayedCall(2000, onEvent, [], this);

    
    
  }
  
  
  update() {
    if (checkOverlap(window.a, window.kb2)){
      if (this.key_A.isDown){
        window.a.destroy();
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
}