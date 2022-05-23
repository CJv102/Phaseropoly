import Cards from '../objects/Cards.js'
export default class Board
{
	constructor(scene)
	{	
		this.scene = scene
		this.Cards = new Cards()

		// Board dimensions
		this.boardHeight = 500

		// Square sizes
		this.cornerSize = 65
		this.propertyWidth = 40

		// Square styling
		this.tileColor = 0xffffff
		this.tileBorderSize = 1
		this.tileBorderColor = 0x000000
		this.cardColor = 0xffffff
		this.cellMargin = 2

		// Title deed modal
		this.titleDeed = {
			width: 50,
			height: 80,
			bannerHeight: 20,
			bgColor: 0xff00ff,
			rent: 0,
			rentWithColorSet: 0,
			rentWith1House: 0,
			rentWith2House: 0,
			rentWith3House: 0,
			rentWith4House: 0,
			rentWithHotel: 0,
			housesCost: 0 ,
			hotelsCost: 0,
		}

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

		this.propertyCardModal

	}



	/*	----------------------------------------------------------------------
		create()
		----------------------------------------------------------------------

		Create the main board
		
		----------------------------------------------------------------------
	*/
	create()
	{	

		// Xpos for game ui
		let uiX = this.boardHeight + 30
		this.scene.add.text(uiX, 20, `Players: ${players.count}`, {color:'#fff'})

		var innerBoard = this.scene.add.rectangle(this.boardHeight/2, this.boardHeight/2, 370, 370, 0xdddddd)

		// Community Chest Deck Positions
		var communtyChest = this.scene.add.rectangle(this.boardHeight/3.5, this.boardHeight/3.5, 80, 50, this.cardColor)
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
		var chance = this.scene.add.rectangle(this.boardHeight*.71, this.boardHeight*.71, 80, 50, this.cardColor)
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

		this.propertyCardModalSquareTitle = this.scene.add.text(0, 0, 'Square Title', {font: 'bold 12px Arial', color: '#000', wordWrap: {width: this.propertyCard.width}})
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
		var go = this.createCornerTile((this.boardHeight-this.cornerSize) - 1, (this.boardHeight-this.cornerSize) - 1, thisSquareID)
		thisSquareID++

		for (let i=0; i<9; i++)
		{
			xStr = this.boardHeight - (this.cornerSize + this.cellMargin) - ((this.propertyWidth+0.77) * i) - this.propertyWidth
			yStr = (this.boardHeight - 1) - this.cornerSize
			thisSquare = this.createTile(xStr, yStr, thisSquareID, 0)
			this.createTileText(xStr+5, yStr+20, thisSquareID)
			thisSquareID++
		}


		// Left Row
		var jail = this.createCornerTile(1, this.boardHeight-this.cornerSize - 1, thisSquareID)
		thisSquareID++

		for (let i=0; i<9; i++)
		{
			let xStr = 1
			let yStr =  this.boardHeight - (this.cornerSize + this.cellMargin) - ((this.propertyWidth+0.77) * i) - this.propertyWidth
			thisSquare = this.createTile(xStr, yStr, thisSquareID, 1)
			this.createTileText(xStr+5, yStr+15, thisSquareID)
			thisSquareID++
		}


		// Top Row
		var freeParking = this.createCornerTile(1, 1, thisSquareID)
		thisSquareID++

		for (let i=0; i<9; i++)
		{
			let xStr = (this.cornerSize + this.cellMargin) + ((this.propertyWidth+1) * i)
			let yStr = 1
			thisSquare = this.createTile(xStr, yStr, thisSquareID, 0)
			this.createTileText(xStr+5, yStr+20, thisSquareID)
			thisSquareID++
		}

		// Right Row
		var goToJail = this.createCornerTile(this.boardHeight-this.cornerSize - 1, 1, thisSquareID)
		thisSquareID++

		for (let i=0; i<9; i++)
		{
			let xStr = this.boardHeight - (this.cornerSize + 1)
			let yStr = (this.cornerSize + this.cellMargin) + ((this.propertyWidth+0.77) * i)
			thisSquare = this.createTile(xStr, yStr, thisSquareID, 1)
			this.createTileText(xStr+5, yStr+15, thisSquareID)
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
		bool allign: 0/1 (horizontal/vertical)
		----------------------------------------------------------------------
	*/

	createTile(xStr, yStr, squareID, allign)
	{	
		let width = allign === 0 ? this.propertyWidth : this.cornerSize
		let height = allign === 0 ? this.cornerSize : this.propertyWidth

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


			if (this.squares[squareID][2] != null)
			{
				let ting = this.scene.add.rectangle(xStr, yStr, width, height/5, `0x${this.squares[squareID][1]}`)
				.setOrigin(0, 0)
				.setStrokeStyle(this.tileBorderSize, this.tileBorderColor)
				.setInteractive({useHandCursor:true})
				.setDepth(11)
			}
	}



	/*	----------------------------------------------------------------------
		createTileText(xStr, yStr, squareID)
		----------------------------------------------------------------------

		Return a text object

		----------------------------------------------------------------------
		int xStr: x postion
		int yStr: y potion
		int squareID: position on board/in main squares array
		----------------------------------------------------------------------
	*/

	createTileText(xStr, yStr, squareID)
	{
		return this.scene.add.text(xStr, yStr, this.squares[squareID][0], {fontSize: 6, color: `#000000`})
			.setOrigin(0, 0)
			.setDepth(11)
	}

}// Board()