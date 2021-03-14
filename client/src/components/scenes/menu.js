import Phaser from "phaser";

export default class Menu extends Phaser.Scene {
  
  constructor() {
    super('Menu')
  }
  preload() {}
  create() {
    this.add.text(800,800, 'What is up');

  }

}