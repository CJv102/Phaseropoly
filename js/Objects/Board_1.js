//import Helper from '../classes/Helper.js'
export default class Board
{
	constructor(scene)
	{	
		this.scene = scene

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

		// All squares
		this.squares = [
		// 	['SQUARE TITLE', 			'COLOR', 	PRICE	OWNER, 	FUNCTION OR [TITLE DEED VALUES]]
			['Go', 						'ffffff', 	null,	null/*, 	this.goSquare()*/],
			['Old Kent Road', 			'8b4513', 	60,		0,		[2 ,4, 10, 30, 90, 160, 250, 50]], 
			['Community Chest', 		'ffffff',  	null,	null/*,	this.communtyChestSquare()*/],
			['Whitechapel Road',  		'8b4513', 	60,		0,		[4, 8, 20, 60, 180, 320, 450, 50]],
			['Income Tax', 				'ffffff', 	null,	null/*,	this.incomeTaxSquare()*/],
			['Kings Cross Station',		'ffffff',	200,	0],
			['The Angel Islington', 	'87ceeb',	100,	0,		[6, 12, 30, 90, 270, 400, 550, 50]],
			['Chance',					'ffffff',	null,	null/*,	this.chanceSquare()*/],
			['Euston Road', 			'87ceeb',	100,	0,		[6, 12, 30, 90, 270, 400, 550, 50]],
			['Pentonville Road', 		'87ceeb',	120,	0,		[8, 12, 40, 100, 300, 450, 600, 50]],
			['Jail / Just Visiting',	'ffffff', 	null,	null/*,	jailOrJustVisitingSquare()*/],
			['Pall Mall', 				'ff00ff',	140,	0,		[10, 20, 50, 100, 450, 625, 750, 100]],
			['Electric Company',		'ffffff', 	150,	0],
			['Whitehall', 				'ff00ff',	140,	0,		[10, 20, 50, 100, 450, 625, 750, 100]],
			['Northumberland Avenue', 	'ff00ff',	160,	0,		[12, 24, 60, 180, 500, 700, 900, 100]],
			['Marylebone Station',		'ffffff',	200,	0],
			['Bow Street',				'ffa500',	180,	0,		[14, 28, 70, 200, 550, 750, 950, 100]],
			['Community Chest', 		'ffffff',  	null,	null/*,	this.communtyChestSquare()*/],
			['Marlborough Street',		'ffa500',	180,	0,		[14, 28, 70, 200, 550, 750, 950, 100]],
			['Vine Street',				'ffa500',	200,	0,		[16, 32, 80, 220, 600, 800, 1000, 100]],
			['Free Parking', 			'ffffff',  	null,	null/*,	this.freeParkingSquare()*/],
			['Strand',					'ff0000',	220,	0,		[18, 26, 90, 250, 700, 875, 1050, 150]],
			['Chance', 					'ffffff',  	null,	null/*,	this.chanceSquare()*/],
			['Fleet Street',			'ff0000',	220,	0,		[18, 26, 90, 250, 700, 875, 1050, 150]],
			['Trafalgar Square',		'ff0000',	240,	0,		[20, 40, 100, 300, 750, 925, 1100, 150]],
			['Fenchurch St. Station',	'ffffff',	200,	0],
			['Leicester Square',		'ffff00',	260,	0,		[22, 44, 110, 330, 800, 975, 1150, 150]],
			['Coventry Street',			'ffff00',	260,	0,		[22, 44, 110, 330, 800, 975, 1150, 150]],
			['Water Works',				'ffffff', 	150,	0],
			['Piccadilly',				'ffff00',	280,	0,		[24, 48, 120, 360, 850, 1025, 1200, 150]],
			['Go To Jail',				'ffffff', 	null,	null/*,	this.gotToJailSquare()*/],
			['Regent Street',			'0000ff',	300,	0,		[26, 52, 130, 390, 900, 1100, 1275, 200]],
			['Oxford Street',			'0000ff',	300,	0,		[26, 52, 130, 390, 900, 1100, 1275, 200]],
			['Community Chest', 		'ffffff',  	null,	null/*,	this.communityChestSquare()*/],
			['Bond Street',				'0000ff',	320,	0,		[28, 56, 150, 450, 1000, 1200, 1400, 200]],
			['Liverpool St. Station',	'ffffff',	200,	0],
			['Chance', 					'ffffff',  	null,	null/*,	this.chanceSquare()*/],
			['Park Lane',				'a020f0',	350,	0,		[35, 70, 175, 500, 1100, 1300, 1500, 200]],
			['Super Tax',				'ffffff',	null, 	null/*,	this.superTaxSquare()*/],
			['Mayfair',					'a020f0',	400,	0,		[50, 100, 200, 600, 1400, 1700, 2000, 200]]
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
			this.scene.add.text(530, 60+ (14*i), this.streets[i][0], {color:`#${this.streets[i][1]}`}).setDepth(12)
		}

		// Xpos for game ui
		let uiX = 530
		this.scene.add.text(uiX, 20, `Players: ${players.count}`, {color:'#fff'})

		var innerBoard = this.scene.add.rectangle(this.boardHeight/2, this.boardHeight/2, 365, 365, 0xdddddd)

		// Community Chest/Chance Deck Positions
		var communtyChest = this.scene.add.rectangle(this.boardHeight/3.5, this.boardHeight/3.5, 80, 50, this.cardColor)
			.setDepth(10)
			.setAngle(-45)
		var communtyChestText = this.scene.add.text(this.boardHeight/3.9 +40, this.boardHeight/3.9 - 10, 'Communty Chest', {color:'#000', fontSize:8})
			.setDepth(11)
			.setAngle(+135)

		var chance = this.scene.add.rectangle(this.boardHeight*.71, this.boardHeight*.71, 80, 50, this.cardColor)
			.setDepth(10)
			.setAngle(-45)
		var chanceText = this.scene.add.text(this.boardHeight*.71 - 10, this.boardHeight*.71 + 10, 'Chance', {color:'#000', fontSize:8})
			.setDepth(11)
			.setAngle(-45)


		//////////////////////////
		// 	Create The Squares

		var thisSquare

		// Bottom Row
		var go = this.scene.add.rectangle(this.boardHeight-this.cornerSize - 1, this.boardHeight-this.cornerSize - 1, this.cornerSize, this.cornerSize, this.tileColor)
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
				color = `0x${this.streets[0][1]}`
			}

			else if (this.streets[1][2].includes(i+1))
			{
				color = `0x${this.streets[1][1]}`
			}
			thisSquare = this.createTileHorizontal(xStr, yStr, color)
			this.createTileText(xStr+5, yStr+5, str)
		}


		// Left Row
		var jail = this.scene.add.rectangle(1, this.boardHeight-this.cornerSize - 1, this.cornerSize, this.cornerSize, this.tileColor)
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
		var freeParking = this.scene.add.rectangle(1, 1, this.cornerSize, this.cornerSize, this.tileColor)
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
		var goToJail = this.scene.add.rectangle(this.boardHeight-this.cornerSize - 1, 1, this.cornerSize, this.cornerSize, this.tileColor)
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

		
	} // create()


	// The square that need an actions...
	goSquare()
	{
		console.log(`YO, GO!`)
	}

	communtyChestSquare()
	{

	}

	incomeTax1Square()
	{
		
	}

	incomeTax2Square()
	{
		
	}

	createTileHorizontal(xStr, yStr, color=0xffffff)
	{	
		// Display property card on mposeover
		let propertyCardModal = this.scene.add.rectangle(0,0, this.propertyCard.width*2, this.propertyCard.height*2, color)
			.setOrigin(0,0)
			.setAlpha(0)
			.setDepth(12)

		return this.scene.add.rectangle(xStr, yStr, this.propertyWidth, this.cornerSize, color)
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
		return this.scene.add.rectangle(xStr, yStr, this.cornerSize, this.propertyWidth, this.tileColor)
			.setOrigin(0, 0)
			.setStrokeStyle(this.tileBorderSize, this.tileBorderColor)
			.setInteractive({useHandCursor:true})
			.setDepth(10)
	}

	createTileText(xStr, yStr, str)
	{
		return this.scene.add.text(xStr, yStr, str, this.textColor)
			.setOrigin(0, 0)
			.setDepth(11)
	}



	// preUpdate (time, delta)
 //    {
 //        super.preUpdate(time, delta)
 //    }



	update(time, delta)
	{


	}// update()

}// Board()