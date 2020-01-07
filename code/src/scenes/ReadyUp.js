import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor (key) {
    super(key);
  }

  preload () {
  }

  create () {
    let text = "Go to socket-game-demo.peachapps.io and enter ASDF to join!";
    this.joinText = this.add.text(window.innerWidth / 2 - text.length / 2 * 48 / 2, 30, text, {font: '48px Arial', fill: '#ffffff' });
  }
};
