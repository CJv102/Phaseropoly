import Player from '../Objects/Player.js'
export default class PreGame extends Phaser.Scene
{
	constructor(PreGameScene)
	{
		super(PreGameScene)

		this.Player = new Player(this)
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

		this.add.text(300, 350, `Choose A Color`, {font: 'bold 20px Arial', color: '#fff'})

		for (let i=0; i<this.Player.tokenColors.length; i++)
		{
			//console.log(this.Player.tokenColors[i][1])

			this.add.circle(300 + (i*50), 400, 22, 0xffffff)
			this.add.circle(300 + (i*50), 400, 20, `0x${this.Player.tokenColors[i][1]}`)
				.setInteractive({useHandCursor:true})
		}
	}
}