//import Helper from '../classes/Helper.js'
export default class GameScene extends Phaser.Scene
{
	constructor(GameScene)
	{	
		super(GameScene)

		// Set a few global values, and assign vars a type

		// Board dimensions
		this.boardHeight = 500
		this.boardHeight = 500

		// Square sizes
		this.cornerSize = 65
		this.propertyWidth = 40

		// Square styling
		this.tileColor = 0xffffff
		this.tileBorderSize = 1
		this.tileBorderColor = 0x000000
		this.textColor = {color: '#000000', fontSize: 10}
		this.cardColor = 0xffffff
		this.cellMargin = 2

		// Property card modal
		this.propertyCard = {
			width: 50,
			height: 80,
			bgColor: 0xff00ff
		}

		// All squares, in order
		this.squares = [
			'Go',
			'Old Kent Road', 
			'Community Chest',
			'Whitechapel Road',
			'Income Tax',
			'Kings Cross Station',
			'The Angel Islington',
			'Chance',
			'Euston Road',
			'Pentonville Road',
			'Jail / Just Visiting',
			'Pall Mall',
			'Electric Company',
			'Whitehall',
			'Northumberland Avenue',
			'Marylebone Station',
			'Bow Street',
			'Community Chest',
			'Marlborough Street',
			'Vine Street',
			'Free Parking',
			'Strand',
			'Chance',
			'Fleet Street',
			'Trafalgar Square',
			'Fenchurch St. Station',
			'Leicester Square',
			'Coventry Street',
			'Water Works',
			'Piccadilly',
			'Go To Jail',
			'Regent Street',
			'Oxford Street',
			'Community Chest',
			'Bond Street',
			'Liverpool St. Station',
			'Chance',
			'Park Lane',
			'Super Tax',
			'Mayfair'
		]

		// 8 streets/colors
		this.streets = [
			['street1',	'8b4513', [1, 3]],
			['street2',	'87ceeb', [6, 8, 9]],
			['street3',	'ff00ff', [11, 13, 14]],
			['street4',	'ffa500', [16, 18, 19]],
			['street5',	'ff0000', [21, 23, 24]],
			['street6',	'ffff00', [26, 27, 29]],
			['street7',	'00ff00', [31, 32, 34]],
			['street8',	'a020f0', [37, 39]]
		]


		this.squaresArray = []

		// Community chest cards
		this.communtyChestCards = [
			'Advance to Go (Collect £200)',
			'Bank error in your favour. Collect £200',
			'Doctor’s fee. Pay £50',
			'From sale of stock you get £50',
			'Get Out of Jail Free',
			'Go to Jail. Go directly to jail, do not pass Go, do not collect £200',
			'Holiday fund matures. Receive £100',
			'Income tax refund. Collect £20',
			'It is your birthday. Collect £10 from every player',
			'Life insurance matures. Collect £100',
			'Pay hospital fees of £100',
			'Pay school fees of £50',
			'Receive £25 consultancy fee',
			'You are assessed for street repairs. £40 per house. £115 per hotel',
			'You have won second prize in a beauty contest. Collect £10',
			'You inherit £100'
		]

		// Chance cards
		this.chanceCards = [
		    'Advance to Go (Collect £200)',
		    'Advance to Trafalgar Square. If you pass Go, collect £200',
		    'Advance to Mayfair',
		    'Advance to Pall Mall. If you pass Go, collect £200',
		   ' Advance to the nearest Station. If unowned, you may buy it from the Bank. If owned, pay wonder twice the rental to which they are otherwise entitled',
		    'Advance to the nearest Station. If unowned, you may buy it from the Bank. If owned, pay wonder twice the rental to which they are otherwise entitled',
		    'Advance token to nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total ten times amount thrown',
		    'Bank pays you dividend of £50',
		    'Get Out of Jail Free',
		    'Go Back 3 Spaces',
		    'Go to Jail. Go directly to Jail, do not pass Go, do not collect £200',
		    'Make general repairs on all your property. For each house pay £25. For each hotel pay £100',
		    'Speeding fine £15',
		    'Take a trip to Kings Cross Station. If you pass Go, collect £200',
		    'You have been elected Chairman of the Board. Pay each player £50',
		    'Your building loan matures. Collect £150'
		]

		// Array of squares
		// 0 is Go, 39 is Mayfair
		this.squares = []

		// Dice
		this.dice = []
		this.doubleRollCount = 0
		this.diceResult = 0
	}


	create()
	{	
		// this.card = Phaser.Math.RND.pick(this.chanceCards)
		// console.log(this.card)

		for (let i=0; i<this.streets.length; i++)
		{
			this.add.text(530, 60+ (14*i), this.streets[i][0], {color:`#${this.streets[i][1]}`}).setDepth(12)
		}

		// Xpos for game ui
		let uiX = 530
		this.add.text(uiX, 20, `Players: ${players.count}`, {color:'#fff'})

		var innerBoard = this.add.rectangle(this.boardHeight/2, this.boardHeight/2, 365, 365, 0xdddddd)

		// Community Chest/Chance Deck Positions
		var communtyChest = this.add.rectangle(this.boardHeight/3.5, this.boardHeight/3.5, 80, 50, this.cardColor)
			.setDepth(10)
			.setAngle(-45)
		var communtyChestText = this.add.text(this.boardHeight/3.9 +40, this.boardHeight/3.9 - 10, 'Communty Chest', {color:'#000', fontSize:8})
			.setDepth(11)
			.setAngle(+135)

		var chance = this.add.rectangle(this.boardHeight*.71, this.boardHeight*.71, 80, 50, this.cardColor)
			.setDepth(10)
			.setAngle(-45)
		var chanceText = this.add.text(this.boardHeight*.71 - 10, this.boardHeight*.71 + 10, 'Chance', {color:'#000', fontSize:8})
			.setDepth(11)
			.setAngle(-45)


		//////////////////////////
		// 	Create The Squares

		var thisSquare

		// Bottom Row
		var go = this.add.rectangle(this.boardHeight-this.cornerSize - 1, this.boardHeight-this.cornerSize - 1, this.cornerSize, this.cornerSize, this.tileColor)
			.setOrigin(0, 0)
			.setStrokeStyle(this.tileBorderSize, this.tileBorderColor)
			.setInteractive({useHandCursor:true})

		for (let i=8; i>=0; i--)
		{
			let xStr = this.boardHeight - (this.cornerSize + this.cellMargin) - ((this.propertyWidth+0.77) * i) - this.propertyWidth
			let yStr = (this.boardHeight - 1) - this.cornerSize
			let str = i
			let color
			switch (i)
			{
				case 1: str = '🗳️'; break
				case 3: str = '💰'; break
				case 4: str = '🚆'; break
				case 6: str = '❔'; break
			}

			if (this.streets[0][2].includes(i+1))
			{
				console.log(i+'DDDDD')
				color = `0x${this.streets[0][1]}`
			}

			else if (this.streets[1][2].includes(i+1))
			{
				console.log(i+'DDDDD')
				color = `0x${this.streets[1][1]}`
			}
			thisSquare = this.createTileHorizontal(xStr, yStr, color)
			this.createTileText(xStr+5, yStr+5, str)
		}


		// Left Row
		var jail = this.add.rectangle(1, this.boardHeight-this.cornerSize - 1, this.cornerSize, this.cornerSize, this.tileColor)
			.setOrigin(0, 0)
			.setStrokeStyle(this.tileBorderSize, this.tileBorderColor)
			.setInteractive({useHandCursor:true})

		for (let i=0; i<9; i++)
		{
			let xStr = 1
			let yStr =  this.boardHeight - (this.cornerSize + this.cellMargin) - ((this.propertyWidth+0.77) * i) - this.propertyWidth
			let str = i
			switch (i)
			{
				case 1: str = '💡'; break
				case 4: str = '🚆'; break
				case 6: str = '🗳️'; break
			}
			this.createTileVertical(xStr, yStr)
			this.createTileText(xStr, yStr, str)
		}


		// Top Row
		var freeParking = this.add.rectangle(1, 1, this.cornerSize, this.cornerSize, this.tileColor)
			.setOrigin(0, 0)
			.setStrokeStyle(this.tileBorderSize, this.tileBorderColor)
			.setInteractive({useHandCursor:true})

		for (let i=0; i<9; i++)
		{
			let xStr = (this.cornerSize + this.cellMargin) + ((this.propertyWidth+0.77) * i)
			let yStr = 1
			let str = i
			switch (i)
			{
				case 1: str = '❔'; break
				case 4: str = '🚆'; break
				case 7: str = '💧'; break
			}
			this.createTileHorizontal(xStr, yStr)
			this.createTileText(xStr, yStr, str)
		}

		// Right Row
		var goToJail = this.add.rectangle(this.boardHeight-this.cornerSize - 1, 1, this.cornerSize, this.cornerSize, this.tileColor)
			.setOrigin(0, 0)
			.setStrokeStyle(this.tileBorderSize, this.tileBorderColor)
			.setInteractive({useHandCursor:true})

		for (let i=8; i>=0; i--)
		{
			let xStr = this.boardHeight - (this.cornerSize + 1)
			let yStr = (this.cornerSize + this.cellMargin) + ((this.propertyWidth+0.77) * i)
			let str = i
			switch (i)
			{
				case 2: str = '🗳️'; break
				case 4: str = '🚆'; break
				case 5: str = '❔'; break
				case 7: str = '💰'; break
			}
			this.createTileVertical(xStr, yStr)
			this.createTileText(xStr, yStr, str)
		}

		this.rollDice()

	} // create()


	createTileHorizontal(xStr, yStr, color=0xffffff)
	{	
		// Display property card on mposeover
		let propertyCardModal = this.add.rectangle(0,0, this.propertyCard.width*2, this.propertyCard.height*2, color)
			.setOrigin(0,0)
			.setAlpha(0)
			.setDepth(12)

		return this.add.rectangle(xStr, yStr, this.propertyWidth, this.cornerSize, color)
			.setOrigin(0, 0)
			.setStrokeStyle(this.tileBorderSize, this.tileBorderColor)
			.setInteractive({useHandCursor:true})
			.setDepth(10)
			.on('pointerover', (pointer)=>
			{
				// Position modal
				let yPos
				if (pointer.y < 30)
					yPos = 30
				else if (pointer.y > this.boardHeight - 30)
					yPos = this.boardHeight - 150
				else yPos = pointer.y
				
				propertyCardModal.setAlpha(1)
				propertyCardModal.x = pointer.x 
				propertyCardModal.y = yPos
			}, this)
			.on('pointerout', ()=>
			{
				propertyCardModal.setAlpha(0)

			}, this)
	}

	createTileVertical(xStr, yStr)
	{
		return this.add.rectangle(xStr, yStr, this.cornerSize, this.propertyWidth, this.tileColor)
			.setOrigin(0, 0)
			.setStrokeStyle(this.tileBorderSize, this.tileBorderColor)
			.setInteractive({useHandCursor:true})
			.setDepth(10)
	}

	createTileText(xStr, yStr, str)
	{
		return this.add.text(xStr, yStr, str, this.textColor)
			.setOrigin(0, 0)
			.setDepth(11)
	}

	rollDice()
	{
		let d1 = Phaser.Math.Between(1, 6)
		let d2 = Phaser.Math.Between(1, 6)
		console.log(`D1: ${d1} D2: ${d2}`)
	}



	// preUpdate (time, delta)
 //    {
 //        super.preUpdate(time, delta)
 //    }



	update(time, delta)
	{


	}// update()

}// GameScene()