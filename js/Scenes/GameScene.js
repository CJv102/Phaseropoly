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

		// Xpos for game ui
		let uiX = this.Board.boardHeight + 20

		// UI text styling
		let uiStyle = {
			font: 'bold 16px Arial',
			color: '#fff'
		}
		this.add.text(uiX, 20, `Players: ${players.count}`, uiStyle)



		// Who goes 1st?
		let playr = []
		let tempBest
		let theBest

		for (let i=0; i<players.count; i++)
		{
			let arr = this.Dice.roll(this)
			playr[i] = arr[0] + arr[1]

			if (i===0)
			{
				tempBest = `Player ${i+1} with ${playr[i]}`
			}
			else 
			{
				if (playr[i] > tempBest)
				{
					theBest = `Player ${i+1} with ${playr[i]}`
				}
			}
			//console.log(theBest)

			this.add.text(uiX, 50 + (i*20), `Player ${i+1} Rolled: ${arr[0]} + ${arr[1]}`, uiStyle)
		}
		//let player1Dice = this.Dice.rollDice(this)
		console.log(theBest)

		

		console.log(this.GameLog.log)

		this.add.text(550, 60, `Log: ${this.GameLog.log[0]}`, {color: '#ffffff'})

	} // create()


	

}// GameScene()