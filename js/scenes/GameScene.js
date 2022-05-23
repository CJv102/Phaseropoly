import Board from '../objects/Board.js'
import Player from '../objects/Player.js'
import Cards from '../objects/Cards.js'
import Dice from '../objects/Dice.js'

export default class GameScene extends Phaser.Scene
{
	constructor(GameScene)
	{	
		super(GameScene)
		this.Board = new Board(this)
		this.Player = new Player(this)
		this.Cards = new Cards(this)
		this.Dice = new Dice(this)

		this.preGameRoll = false
		this.playerOrder = []
		this.activePlayer = 0

		// Cards
		this.chanceCardDeck = [...this.Cards.chanceCards]

		// Dice
		this.dice = []
		this.doubleRollCount = 0
		this.diceResult = 0
	}


	create()
	{	
		this.Board.create(this)

		this.Dice.rollDice(this)

		// var originalArray = [...this.chanceCardDeck]
		// console.log(originalArray)

		var newArray = this.Cards.shuffleCards([...this.chanceCardDeck])
		console.log(newArray)
		console.log(this.chanceCardDeck)

		// this.Cards.communityChestCard()
		// this.Cards.chanceCard()

	} // create()

	

}// GameScene()