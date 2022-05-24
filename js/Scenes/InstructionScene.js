import Button from '../Objects/Button.js'

export default class InstructionScene extends Phaser.Scene
{

	constructor()
	{
		super("InstructionScene")
	}

	create()
	{

		this.instructionHead = this.add.bitmapText(150, 100, 'VikingSquad', "Instructions")

		var text = `Insert your intructions here!
		Or, whatever!`

		this.instructionText = this.add.bitmapText(150, 200, 'VikingSquad', text)
		this.instructionText.setScale(0.5)


		///////////////
		// Add Buttons
		let startText = new Button(this, 150, gameConfig.height - 50, 'Start', 'small', 'GameScene')
		let titleText = new Button(this, 230, gameConfig.height - 50, 'Home', 'small',  'TitleScene')
	}
}