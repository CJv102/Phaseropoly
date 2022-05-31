import Button from '../Objects/Button.js'
import Player from '../Objects/Player.js'

export default class PreGame extends Phaser.Scene
{
	constructor(PreGameScene)
	{
		super(PreGameScene)

		this.Player = new Player(this)

		this.playerCount = 0


		// UI stuffs
		this.uiStartX = 300
		this.uiStartY
	}


	create()
	{
		this.add.text(this.uiStartX, 300, `Pre Game Lobby`, {font: 'bold 50px Arial', color: '#fff'})
			.setOrigin(0, 0)

		//this.heading()
		this.createForm()

		let preText = new Button(this, this.uiStartX, 220, 'Home', 'small', 'TitleScene')


	}

	heading()
	{
		
		this.add.text(this.uiStartX, 300, `Pre Game Lobby`, {font: 'bold 50px Arial', color: '#fff'})
			.setOrigin(0, 0)
	}

	createForm()
	{
		this.add.rectangle(gameConfig.width/2, gameConfig.height/2, 500, 350, 0xffffff)
			.setAlpha(0.2)

		this.add.text(this.uiStartX, 380, `Choose A Color`, {font: 'bold 20px Arial', color: '#fff'})

		// Create colors to choose from
		for (let i=0; i<this.Player.tokenColors.length; i++)
		{
			var x = this.uiStartX + (i*50)
			var y = 440

			this.add.circle(x, y, 20, `0x${this.Player.tokenColors[i][1]}`)
				.setOrigin(0)
				.setInteractive({useHandCursor:true})
				.on('pointerdown', ()=>{

					// Are we player 1?
					if (this.playerCount === 0)
					{
						this.Player.player = 1

					}

					else {
						this.playerCount++
						this.Player.player = i+1
					}

					// TODO: Do we need to check if we can take this color?
					this.Player.color = this.Player.tokenColors[i]

					this.add.circle(x-2, y-2, 22, 0xffffff)
						.setOrigin(0)
						.setDepth(-1)

					//console.log(this.Player.color)
				})
		} // for

		// Add an AI player
		this.add.text(this.uiStartX, 530, `Add AI Player`, {font: 'bold 16px Arial', color: '#fff'})
			.setInteractive({useHandCursor:true})
			.on('pointerdown', ()=> {
				console.log(`AI!!`)
			})

	} // createForm()
}