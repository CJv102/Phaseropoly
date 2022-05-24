import Player from '../Objects/Player.js'
export default class PreGame extends Phaser.Scene
{
	constructor(PreGameScene)
	{
		super(PreGameScene)
		console.log(`PreGameScene`)

		this.Player = new Player()
	}


	create()
	{
		this.heading()
		this.createForm()
	}

	heading()
	{
		const screenCenterX = this.cameras.main.worldView.x / 2// + this.cameras.main.width / 2
		const screenCenterY = this.cameras.main.worldView.y / 2// + this.cameras.main.height / 2

		this.add.text(screenCenterX, screenCenterY, `Pre Game Lobby`, {font: 'bold 50px Arial', color: '#fff'})
			//.setOrigin(0, 0)
	}

	createForm()
	{
		this.add.rectangle(gameConfig.width/2, gameConfig.height/2, 500, 350, 0xffffff)
			.setAlpha(0.2)


	}
}