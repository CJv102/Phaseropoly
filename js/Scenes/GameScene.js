import Board from '../Objects/Board.js'
import Player from '../Objects/Player.js'
import Cards from '../Objects/Cards.js'
import Dice from '../Objects/Dice.js'
import GameLog from '../Objects/GameLog.js'

export default class GameScene extends Phaser.Scene
{
	constructor(GameScene)
	{	
		super(GameScene)

		this.Board = new Board(this)
		this.Player = new Player(this)
		this.Cards = new Cards(this, this.Board.squares)
		this.Dice = new Dice(this)
		this.GameLog = new GameLog(this)

		this.preGameRoll = false
		this.playerOrder = []
		this.activePlayer = 0

		// Shuffle Cards
		this.chanceCardDeck = [...this.Cards.chanceCards]
		this.communityChestCardDeck = [...this.Cards.communityChestCards]

		// Spent Cards
		this.chanceDeckUsed = []
		this.communityChestCardDeckUsed = []

		// Dice
		this.dice = []
		this.doubleRollCount = 0
		this.diceResult = 0
	}


	create()
	{	
		// Create Board
		this.Board.create(this)

		this.Dice.rollDice(this)

	} // create()

	

}// GameScene()