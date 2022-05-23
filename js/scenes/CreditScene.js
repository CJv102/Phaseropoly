import Button from '../Objects/Button.js'
export default class CreditScene extends Phaser.Scene
{
	constructor() 
	{
		super('CreditScene')
	}

	create() 
	{

        this.text = this.add.bitmapText(150, 100, 'VikingSquad', 'Credits')

		let text =
			`Made With Phaser.js!! 
			... and any other shoutouts!`

		this.creditsText = this.add.bitmapText(150, 200, 'VikingSquad', text)
		this.creditsText.setScale(0.6)


		///////////////
		// Add Buttons
		let startText = new Button(this, 150, gameConfig.height - 50, 'Start', 'small', 'GameScene')
		let titleText = new Button(this, 230, gameConfig.height - 50, 'Home', 'small',  'TitleScene')
		
	}

}