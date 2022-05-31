import Button from '../Objects/Button.js'
export default class TitleScene extends Phaser.Scene
{

	constructor()
	{
		super("TitleScene");
	}


	create()
	{
		
		///////////////////
		// Add Background


		let titleText = this.add.bitmapText(150, -1170, 'VikingSquad', gameConfig.title)
		

		///////////////
		// Add Buttons
		let preText = new Button(this, gameConfig.width, 220, 'Pre Game', 'small', 'PreGameScene')
		let startText = new Button(this, gameConfig.width, 250, 'Start Game', 'small', 'GameScene')
		let instructionText = new Button(this, gameConfig.width, 280, 'Instructions', 'small',  'InstructionScene')
		let optionText = new Button(this, gameConfig.width, 310, 'Options', 'small',  'OptionsScene')
		let creditsText = new Button(this, gameConfig.width, 340, 'Credits', 'small',  'CreditScene')

	    // Animate Buttons 
	    let timeline = this.tweens.timeline({
	        ease: 'Power2',
	        duration: 1000,
	        tweens: [{
	            targets: titleText,
	            x: 150,
	            y: 150,
	            offset: 100
	        },
	        {
	            targets: preText,
	            x: 150,
	            offset: 100
	        },
	        {
	            targets: startText,
	            x: 150,
	            offset: 200
	        },
	        {
	            targets: instructionText,
	            x: 150,
	            offset: 400
	        },
	        {
	            targets: optionText,
	            x: 150,
	            offset: 500
	        },
	        {
	            targets: creditsText,
	            x: 150,
	            offset: 600
	        }]

	    });


	    /////////////
		// Add Audio
		this.model = this.sys.game.globals.model
	    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
	      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true })
	      this.bgMusic.play()
	      this.model.bgMusicPlaying = true
	      this.sys.game.globals.bgMusic = this.bgMusic
	    }

	} // create()
}