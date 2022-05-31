const gameConfig = 
{
	type: Phaser.AUTO,
	autoCenter: true,
	
	backgroundColor: "#000000",
	width: 1000,
	height: 900,

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
			debug: false,// Never true on live game
			debugShowVelocity: false,// ditto
			gravity: { y: 0 }
		},
	},
	
	roundPixels: true,
	antialias: true,
	autoRound: 10,

} // gameConfig



const currency = '£'
const startingCash = 1500
const salary = 200

// Does bank auction property if player does not purchase a property they land on?
const allowAuction = false


var players = {
	active: 0,//Which players turn?
	count: 2,
	min: 2,
	max: 8
}




// Are we in a game?
var gameActive = false

var activePlayer

// Array of who is in jail, and  turns remaining till release
var inJail = [[]]