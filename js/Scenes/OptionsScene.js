import Button from '../Objects/Button.js';

export default class OptionsScene extends Phaser.Scene 
{
    constructor ()
    {
        super('OptionsScene')
    }

    create ()
    {

        this.model = this.sys.game.globals.model


        /////////////////////
        // Add Options Title
        this.text = this.add.bitmapText(150, 100, 'VikingSquad', 'Options')


        //////////////////////////
        // Create Toggle Switches
        this.musicButton = this.add.image(200, 300, 'checkedBox')
        this.musicText = this.add.bitmapText(240, 285, 'VikingSquad', 'Music Enabled').setScale(0.6)
        this.musicButton.setInteractive({useHandCursor:true})

        this.soundButton = this.add.image(200, 375, 'checkedBox')
        this.soundText = this.add.bitmapText(240, 365, 'VikingSquad', 'Sound Enabled').setScale(0.6)
        this.soundButton.setInteractive({useHandCursor:true})


        ///////////////////
        // Event Listeners 
        this.musicButton.on('pointerdown', function () {
            this.model.musicOn = !this.model.musicOn
            this.updateAudio()
        }.bind(this))

        this.soundButton.on('pointerdown', function () {
            this.model.soundOn = !this.model.soundOn
            this.updateAudio()
        }.bind(this))



        ///////////////
        // Add Buttons
        let startText = new Button(this, 150, gameConfig.height - 50, 'Start', 'small', 'GameScene')
        let titleText = new Button(this, 230, gameConfig.height - 50, 'Home', 'small',  'TitleScene')

        this.updateAudio();
      }

      updateAudio()
      {
        if (this.model.musicOn === false) {
            this.musicButton.setTexture('box')
            this.sys.game.globals.bgMusic.stop()
            this.model.bgMusicPlaying = false
        } else {
            this.musicButton.setTexture('checkedBox')
            if (this.model.bgMusicPlaying === false) {
                this.sys.game.globals.bgMusic.play()
                this.model.bgMusicPlaying = true
            }
        }

        if (this.model.soundOn === false) {
            this.soundButton.setTexture('box')
        } else {
            this.soundButton.setTexture('checkedBox')
        }
    }
}