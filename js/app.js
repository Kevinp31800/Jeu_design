
var game = new Phaser.Game(750, 469, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
	game.load.image('sky', '../mario.jpg');
	game.load.spritesheet('dude', '../move.png', 67, 64, 4);

}

function create() {
	var bg = game.add.sprite(0, 0, 'sky');
	this.dude=game.add.sprite(100, 150, "dude");
	this.dude.animations.add('walk',[0,1,2,3],12,true);
	this.dude.animations.play('walk')

}

function update() {
}