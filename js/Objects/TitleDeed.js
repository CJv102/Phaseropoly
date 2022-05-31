export default class TitleDeed
{
	//constructor(scene, squareID, rent, rentWith1House, rentWith2Houses, rentWith3Houses, rentWith4Houses, rentWithHotel, buildingCost)
	constructor(scene, squares)
	{
		this.scene = scene
		this.squares = squares
	}

	create()
	{
		// The main Card BG
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

		this.propertyCardModalRent = this.scene.add.text(0, 0, '', {font: '10px Arial', color: '#000'})
			.setOrigin(0,0)
			.setAlpha(0)
			.setDepth(13)

		this.propertyCardModalRentWith1House = this.scene.add.text(0, 0, '', {font: '10px Arial', color: '#000'})
			.setOrigin(0,0)
			.setAlpha(0)
			.setDepth(13)

		this.propertyCardModalRentWith2Houses = this.scene.add.text(0, 0, '', {font: '10px Arial', color: '#000'})
			.setOrigin(0,0)
			.setAlpha(0)
			.setDepth(13)

		this.propertyCardModalRentWith3Houses = this.scene.add.text(0, 0, '', {font: '10px Arial', color: '#000'})
			.setOrigin(0,0)
			.setAlpha(0)
			.setDepth(13)

		this.propertyCardModalRentWith4Houses = this.scene.add.text(0, 0, '', {font: '10px Arial', color: '#000'})
			.setOrigin(0,0)
			.setAlpha(0)
			.setDepth(13)

		this.propertyCardModalRentWithHotel = this.scene.add.text(0, 0, '', {font: '10px Arial', color: '#000'})
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
	}
}