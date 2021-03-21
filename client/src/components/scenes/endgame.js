import Phaser from 'phaser';

export default class Endgame extends Phaser.Scene {
  constructor() {
    super({key: 'endgame', active: false});
  }
  preload () {
    this.load.image('overlay', 'assets/GameoverOverlay.png');
  }
  init (data)
  {
    this.score = data.score;
  }
  create () {
    this.add.image(this.scale.width / 2, this.scale.height / 2, 'overlay');
    this.add.text(this.scale.width / 2, this.scale.height / 1.9, 'Well done!');
  }


}