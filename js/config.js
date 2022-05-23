/*
	config.js

	Here we hold our Phaser config, and set up any other settings to be used in our game.
*/

const gameConfig = 
{
	type: Phaser.AUTO,
	autoCenter: true,
	
	backgroundColor: "#000000",
	width: 900,
	height: 700,

	title: "Phaseropoly",
	version: "0.9a",
	url: "\nhttps://github.com/CJv102",
	banner: {
		text: '#ffffff',
		background: [
			'#734547',
			'#bb5d0d',
			'#053A25',
			'#F7A012',
			'#A80110'
		],
	},

	physics: {
		default: 'arcade',
			arcade: {
			debug: true,// Never true on live game
			debugShowVelocity: true,
			gravity: { y: 0 }
		},
	},
	
	roundPixels: true,
	antialias: true,
	autoRound: 10,

} // gameConfig

const currency = '£'
const goSquarePassValue = 200

var players = {
	active: 0,//Which players turn?
	count: 2,
	min: 2,
	max: 8
}

var player = {
	token: 'gold',
	cash: 0,
	currentPos: 0,// 0 = Go, 39 = Mayfair
	squaresOwned: [null],
}

const gameLayers = {
	board: 0,
	squares: 1,
	ui: 10
}

// Are we in a game?
var gameActive = false

var activePlayer

// Array of who is in jail, and  turns remaining till release
var inJail = [[]]