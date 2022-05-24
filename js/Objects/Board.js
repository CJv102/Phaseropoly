import Cards from '../Objects/Cards.js'

export default class Board
{
	constructor(scene)
	{	
		this.scene = scene

		this.multiplier = 1.5

		// Board dimensions
		this.boardHeight = 500 * this.multiplier

		// Square sizes
		this.cornerSize = 65 * this.multiplier
		this.propertyWidth = 40 * this.multiplier

		// Square styling
		this.tileColor = 0xffffff
		this.tileBorderSize = 1 * this.multiplier
		this.tileBorderColor = 0x000000
		this.cardColor = 0xffffff
		this.cellMargin = 1 * this.multiplier


		// Property tile modal
		this.propertyCard = {
			width: 50,
			height: 80,
			bannerHeight: 20,
			bgColor: 0xff00ff
		}


		// All squares
		// These are standard names and values. At a minimun, change title
		// Edit values in this array accordingly
		this.squares = [

		// 	['SQUARE TITLE', 			'COLOR', 	PRICE 	OWNER, 	FUNCTION OR [TITLE DEED VALUES]]

			['Go', 						'ffffff', 	null,	null],
			['Old Kent Road', 			'8b4513', 	60,		0,		[2 ,4, 10, 30, 90, 160, 250, 50]], 
			['Community Chest', 		'ffffff',  	null,	null],
			['Whitechapel Road',  		'8b4513', 	60,		0,		[4, 8, 20, 60, 180, 320, 450, 50]],
			['Income Tax', 				'ffffff', 	null,	null],
			['Kings Cross Station',		'ffffff',	200,	0],
			['The Angel Islington', 	'87ceeb',	100,	0,		[6, 12, 30, 90, 270, 400, 550, 50]],
			['Chance',					'ffffff',	null,	null],
			['Euston Road', 			'87ceeb',	100,	0,		[6, 12, 30, 90, 270, 400, 550, 50]],
			['Pentonville Road', 		'87ceeb',	120,	0,		[8, 12, 40, 100, 300, 450, 600, 50]],
			['Jail / Just Visiting',	'ffffff', 	null,	null],
			['Pall Mall', 				'ff00ff',	140,	0,		[10, 20, 50, 100, 450, 625, 750, 100]],
			['Electric Company',		'ffffff', 	150,	0],
			['Whitehall', 				'ff00ff',	140,	0,		[10, 20, 50, 100, 450, 625, 750, 100]],
			['Northumberland Avenue', 	'ff00ff',	160,	0,		[12, 24, 60, 180, 500, 700, 900, 100]],
			['Marylebone Station',		'ffffff',	200,	0],
			['Bow Street',				'ffa500',	180,	0,		[14, 28, 70, 200, 550, 750, 950, 100]],
			['Community Chest', 		'ffffff',  	null,	null],
			['Marlborough Street',		'ffa500',	180,	0,		[14, 28, 70, 200, 550, 750, 950, 100]],
			['Vine Street',				'ffa500',	200,	0,		[16, 32, 80, 220, 600, 800, 1000, 100]],
			['Free Parking', 			'ffffff',  	null,	null],
			['Strand',					'ff0000',	220,	0,		[18, 26, 90, 250, 700, 875, 1050, 150]],
			['Chance', 					'ffffff',  	null,	null],
			['Fleet Street',			'ff0000',	220,	0,		[18, 26, 90, 250, 700, 875, 1050, 150]],
			['Trafalgar Square',		'ff0000',	240,	0,		[20, 40, 100, 300, 750, 925, 1100, 150]],
			['Fenchurch St. Station',	'ffffff',	200,	0],
			['Leicester Square',		'ffff00',	260,	0,		[22, 44, 110, 330, 800, 975, 1150, 150]],
			['Coventry Street',			'ffff00',	260,	0,		[22, 44, 110, 330, 800, 975, 1150, 150]],
			['Water Works',				'ffffff', 	150,	0],
			['Piccadilly',				'ffff00',	280,	0,		[24, 48, 120, 360, 850, 1025, 1200, 150]],
			['Go To Jail',				'ffffff', 	null,	null],
			['Regent Street',			'00ff00',	300,	0,		[26, 52, 130, 390, 900, 1100, 1275, 200]],
			['Oxford Street',			'00ff00',	300,	0,		[26, 52, 130, 390, 900, 1100, 1275, 200]],
			['Community Chest', 		'ffffff',  	null,	null],
			['Bond Street',				'00ff00',	320,	0,		[28, 56, 150, 450, 1000, 1200, 1400, 200]],
			['Liverpool St. Station',	'ffffff',	200,	0],
			['Chance', 					'ffffff',  	null,	null],
			['Park Lane',				'a020f0',	350,	0,		[35, 70, 175, 500, 1100, 1300, 1500, 200]],
			['Super Tax',				'ffffff',	null, 	null],
			['Mayfair',					'a020f0',	400,	0,		[50, 100, 200, 600, 1400, 1700, 2000, 200]]
		]

		// An array of all property tiles we can use further on through the game
		this.propertySquares = [1, 3, 6, 8, 9, 11, 13, 14, 16, 18, 19, 21, 23, 24, 26, 27, 29, 31, 32, 34, 37, 39]

		//this.propertyCardModal

		this.Cards = new Cards(this, this.squares)

	}



	/*	----------------------------------------------------------------------
		create()
		----------------------------------------------------------------------

		Create the main board, sets up any interactive squares.
		Shuffle card decks, reset all game data
		
		----------------------------------------------------------------------
	*/
	create()
	{	

		// Xpos for game ui
		let uiX = this.boardHeight + 30
		this.scene.add.text(uiX, 20, `Players: ${players.count}`, {color:'#fff'})

		var innerBoard = this.scene.add.rectangle(this.boardHeight/2, this.boardHeight/2, 365*this.multiplier, 365*this.multiplier, 0xdddddd)

		// Community Chest Deck Positions
		var communtyChest = this.scene.add.rectangle(this.boardHeight/3.5, this.boardHeight/3.5, 80*this.multiplier, 50*this.multiplier, this.cardColor)
			.setDepth(10)
			.setAngle(-45)
			.setInteractive({useHandCursor:true})
			.on('pointerdown', ()=>{
				let card = this.Cards.communityChestCard()
				console.log(card)
			})

		var communtyChestText = this.scene.add.text(this.boardHeight/3.9 +40, this.boardHeight/3.9 - 10, 'Communty Chest', {color:'#000', fontSize:8})
			.setDepth(11)
			.setAngle(+135)

		// Chance Deck Position
		var chance = this.scene.add.rectangle(this.boardHeight*.71, this.boardHeight*.71, 80*this.multiplier, 50*this.multiplier, this.cardColor)
			.setDepth(10)
			.setAngle(-45)
			.setInteractive({useHandCursor:true})
			.on('pointerdown', ()=>{
				let card = this.Cards.chanceCard()
				console.log(card)
			})

		var chanceText = this.scene.add.text(this.boardHeight*.71 - 10, this.boardHeight*.71 + 10, 'Chance', {color:'#000', fontSize:8})
			.setDepth(11)
			.setAngle(-45)



		// Display property card on mposeover
		this.propertyCardModal = this.scene.add.rectangle(0,0, this.propertyCard.width*2, this.propertyCard.height*2, 0xffffff)
			.setStrokeStyle(2, 0x000000)
			.setOrigin(0,0)
			.setAlpha(0)
			.setDepth(12)

		this.propertyCardModalBanner = this.scene.add.rectangle(0,0, this.propertyCard.width*2 - 10, this.propertyCard.height/5)
			.setStrokeStyle(1, 0x000000)
			.setOrigin(0,0)
			.setAlpha(0)
			.setDepth(12)

		this.propertyCardModalTitleDeed = this.scene.add.text(0, 0, '', {font: 'bold 10px Arial', color: '#000'})
			.setOrigin(0,0)
			.setAlpha(0)
			.setDepth(13)

		this.propertyCardModalSquareTitle = this.scene.add.text(0, 0, 'Square Title', {font: 'bold 12px Arial', color: '#000', wordWrap: {width: this.propertyCard.width*2 -10}})
			.setOrigin(0,0)
			.setAlpha(0)
			.setDepth(13)

		this.propertyCardModalSquareCost = this.scene.add.text(0, 0, 'Square Cost', {font: 'bold 10px Arial', color: '#000'})
			.setOrigin(0,0)
			.setAlpha(0)
			.setDepth(13)



		//////////////////////////
		// 	Create The Squares

		var xStr
		var yStr 
		var color
		var str 
		var thisSquare
		var thisSquareID = 0//Reference to postion in this.squares

		// Bottom Row
		var go = this.createCornerTile((this.boardHeight-this.cornerSize) - this.cellMargin, (this.boardHeight-this.cornerSize) - this.cellMargin, thisSquareID)
		thisSquareID++

		for (let i=0; i<9; i++)
		{
			// xStr = ((this.boardHeight - this.cornerSize) - ((this.propertyWidth+1) * i) - this.propertyWidth)-3
			// xStr = ((this.boardHeight - this.cornerSize) - ((this.propertyWidth+1) * i) - this.propertyWidth)-3
			xStr = (((this.boardHeight - this.cornerSize) - this.tileBorderSize) - ((this.propertyWidth + this.tileBorderSize) * i)) - (this.propertyWidth )
			yStr = (this.boardHeight - this.cellMargin) - this.cornerSize
			thisSquare = this.createTile(xStr, yStr, thisSquareID, 0)
			thisSquareID++
		}


		// Left Row
		var jail = this.createCornerTile(this.tileBorderSize, this.boardHeight-this.cornerSize - this.tileBorderSize, thisSquareID)
		thisSquareID++

		for (let i=0; i<9; i++)
		{
			let xStr = 1 * this.multiplier
			let yStr =  (((this.boardHeight - this.cornerSize) - this.tileBorderSize) - ((this.propertyWidth + this.cellMargin) * i)) - this.propertyWidth
			thisSquare = this.createTile(xStr, yStr, thisSquareID, 1)
			// this.createTileText(xStr+5, yStr+15, thisSquareID)
			thisSquareID++
		}


		// Top Row
		var freeParking = this.createCornerTile(1, 1, thisSquareID)
		thisSquareID++

		for (let i=0; i<9; i++)
		{
			let xStr = (this.cornerSize + this.cellMargin) + ((this.propertyWidth+this.cellMargin) * i)
			let yStr = this.cellMargin
			thisSquare = this.createTile(xStr, yStr, thisSquareID, 2)
			// this.createTileText(xStr+5, yStr+20, thisSquareID)
			thisSquareID++
		}

		// Right Row
		var goToJail = this.createCornerTile(this.boardHeight-this.cornerSize - this.cellMargin, 1, thisSquareID)
		thisSquareID++

		for (let i=0; i<9; i++)
		{
			let xStr = this.boardHeight - (this.cornerSize + this.cellMargin)
			let yStr = (this.cornerSize + this.cellMargin) + ((this.propertyWidth+this.cellMargin) * i)
			thisSquare = this.createTile(xStr, yStr, thisSquareID, 3)
			// this.createTileText(xStr+5, yStr+15, thisSquareID)
			thisSquareID++
		}
		
	} // create()


	// The squares that need actions...
	goSquare()
	{
		console.log(`YO, GO!`)
	}

	communtyChestSquare()
	{

	}

	incomeTaxSquare()
	{
		
	}

	superTaxSquare()
	{
		
	}

	/*	----------------------------------------------------------------------
		propertyPointer(xStr, yStr, squareID)
		----------------------------------------------------------------------

		Upon mouseover, create a a rectangle and text
		
		----------------------------------------------------------------------
		int xStr: x postion
		int yStr: y potion
		int squareID: position on board/in main squares array
		----------------------------------------------------------------------
	*/
	propertyPointer(xStr, yStr, squareID)
	{
		this.propertyCardModal.setAlpha(1)
		this.propertyCardModal.setFillStyle(`0xffffff`, 1)
		this.propertyCardModal.x = xStr
		this.propertyCardModal.y = yStr

		this.propertyCardModalTitleDeed.setAlpha(1)
		this.propertyCardModalTitleDeed.x = this.propertyCardModal.x + 5
		this.propertyCardModalTitleDeed.y = yStr + 5

		this.propertyCardModalSquareTitle.setAlpha(1)
		this.propertyCardModalSquareTitle.setText(`${this.squares[squareID][0]}`)
		this.propertyCardModalSquareTitle.x = this.propertyCardModal.x + 5
		this.propertyCardModalSquareTitle.y = yStr + 25

		this.propertyCardModalSquareCost.setAlpha(1)

		// Does this tile even have a price?
		if (this.squares[squareID][2] != null) {
			this.propertyCardModalBanner.setAlpha(1)
			this.propertyCardModalBanner.setFillStyle(`0x${this.squares[squareID][1]}`, 1)
			this.propertyCardModalBanner.x = this.propertyCardModal.x + 5
			this.propertyCardModalBanner.y = yStr + 5

			this.propertyCardModalSquareCost.setText(`${currency + parseInt(this.squares[squareID][2])}`)
			this.propertyCardModalSquareCost.x = this.propertyCardModal.x + 5
			this.propertyCardModalSquareCost.y = yStr + 145
		}
	}



	/*	----------------------------------------------------------------------
		propertyPointerRemove()
		----------------------------------------------------------------------

		clears propertyModal
		
		----------------------------------------------------------------------
	*/

	propertyPointerRemove()
	{
		this.propertyCardModal.setFillStyle(0xffffff, 0)
		this.propertyCardModal.setAlpha(0)

		
		this.propertyCardModalBanner.setFillStyle(0xffffff, 0)
		this.propertyCardModalBanner.setAlpha(0)

		this.propertyCardModalTitleDeed.setAlpha(0)
		this.propertyCardModalSquareTitle.setAlpha(0)
		this.propertyCardModalSquareCost.setAlpha(0)
	}



	/*	----------------------------------------------------------------------
		createCornerTile(xStr, yStr, squareID)
		----------------------------------------------------------------------

		return a corner square
		
		----------------------------------------------------------------------
		int xStr: x postion
		int yStr: y potion
		int squareID: position on board/in main squares array
		----------------------------------------------------------------------
	*/
	createCornerTile(xStr, yStr, squareID)
	{
		return this.scene.add.rectangle(xStr, yStr, this.cornerSize, this.cornerSize, `0x${this.squares[squareID][1]}`)
			.setOrigin(0, 0)
			.setStrokeStyle(this.tileBorderSize, this.tileBorderColor)
			.setInteractive({useHandCursor:true})
	}



	/*	----------------------------------------------------------------------
		createTile(xStr, yStr, squareID, allign)
		----------------------------------------------------------------------

		return an interactive tile.

		----------------------------------------------------------------------
		int xStr: x postion
		int yStr: y potion
		int squareID: position on board/in main squares array
		enum allign: 0/1/2/3 (bottom/left/top/right)
		----------------------------------------------------------------------
	*/
	createTile(xStr, yStr, squareID, allign)
	{	
		let width = (allign % 2 == 0) ? this.propertyWidth : this.cornerSize
		let height = (allign % 2 == 0) ? this.cornerSize : this.propertyWidth

		this.scene.add.rectangle(xStr, yStr, width, height, 0xffffff)
			.setOrigin(0, 0)
			.setStrokeStyle(this.tileBorderSize, this.tileBorderColor)
			.setInteractive({useHandCursor:true})
			.setDepth(10)
			.on('pointerover', (pointer)=>
			{
				// Position modal
				let yPos
				if (pointer.y < 30) yPos = 30
				else if (pointer.y > this.boardHeight - 30) yPos = this.boardHeight - 150
				else yPos = pointer.y
				this.propertyPointer(xStr, yPos, squareID)
			}, this)
			.on('pointerout', ()=>{	
				this.propertyPointerRemove()
			}, this)


			let titleStyle = {
				font: '8px Arial', 
				color: `#000`, 
				wordWrap: {
					width:this.propertyWidth - 5
				},
			}

			let priceStyle = {
				font: 'bold 12px Arial', 
				color: `#000`
			}

			// Title Text
			let textTitle = this.scene.add.text(xStr, yStr, this.squares[squareID][0], titleStyle)
				.setOrigin(0, 0)
				.setDepth(11)

			// Purchase Price Text
			let textPrice = this.scene.add.text(xStr, yStr, this.squares[squareID][2], priceStyle)
				.setOrigin(0, 0)
				.setDepth(11)
			
			switch (allign)
			{
				case 0: 
					textTitle.setAngle(0)
						.setX(xStr + this.cornerSize*.05)
						.setY(yStr + this.cornerSize*.25)
					textPrice.setAngle(0)
						.setX(xStr + this.cornerSize*.05)
						.setY(yStr + this.cornerSize*.85)
					break 

				case 1:
					textTitle.setAngle(90)
						.setX(this.cornerSize*.8)
						.setY(yStr + this.cornerSize*.05)
					textPrice.setAngle(90)
						.setX(xStr + this.cornerSize*.15)
						.setY(yStr + this.cornerSize*.05)
					break 

				case 2:
					textTitle.setAngle(180)
						.setX(xStr + this.propertyWidth - 5)
						.setY(this.cornerSize*.8)

					textPrice.setAngle(180)
						.setX(xStr + this.propertyWidth - 5)
						.setY(this.cornerSize*.15)
					break 

				case 3:
					textTitle.setAngle(-90)
						.setX(this.boardHeight - (this.cornerSize*.8))
						.setY((yStr + this.propertyWidth) - 5)
					textPrice.setAngle(-90)
						.setX(this.boardHeight - (this.cornerSize*.15))
						.setY((yStr + this.propertyWidth) - 5)
					break 
			}


			

			// Do we need a property banner?
			if (this.propertySquares.includes(squareID))
			{
				let x = xStr
				let y = yStr

				switch (allign)
				{
					case 1: x = (x + this.cornerSize) - this.cornerSize/5; break 
					case 2: y = (y + this.cornerSize) - this.cornerSize/5; break
				}

				let width = (allign % 2 == 0) ? this.propertyWidth : this.cornerSize/5
				let height = (allign % 2 == 0) ? this.cornerSize/5 : this.propertyWidth

				let ting = this.scene.add.rectangle(x, y, width, height, `0x${this.squares[squareID][1]}`)
				.setOrigin(0, 0)
				.setStrokeStyle(this.tileBorderSize, this.tileBorderColor)
				.setInteractive({useHandCursor:true})
				.setDepth(11)
			}
	}



	/*	----------------------------------------------------------------------
		createTileText(xStr, yStr, squareID, allign)
		----------------------------------------------------------------------

		Return a text object

		----------------------------------------------------------------------
		int xStr: x postion
		int yStr: y potion
		int squareID: position on board/in main squares array
		enum allign: 0/1/2/3 (bottom/left/top/right)
		----------------------------------------------------------------------
	*/
	// createTileText(xStr, yStr, squareID, allign)
	// {
	// 	let style = {
	// 		font: 'bold 10px Arial', 
	// 		color: `#000000`, 
	// 		wordWrap: {
	// 			width:this.propertyWidth - 5
	// 		},
	// 	}

	// 	// Title Text
	// 	this.scene.add.text(xStr, yStr, this.squares[squareID][0], style)
	// 		.setOrigin(0, 0)
	// 		.setDepth(11)

	// 	// Purchase Price Text
	// 	this.scene.add.text(xStr + 25, yStr + 25, this.squares[squareID][2], style)
	// 		.setOrigin(0, 0)
	// 		.setDepth(11)
	// }

}// Board()