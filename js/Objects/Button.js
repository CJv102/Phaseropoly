/**
 * Create A Text Button Container
 * 
 * Throw a few variables in, get a text button linked to a scene out!
 * 
 * todo: add state colors, font, stroke... to params
 * 
 */

export default class Button extends Phaser.GameObjects.Container
{

    constructor(scene, xPosition, yPosition, textStr, textSize, targetScene)
    {
        super(scene)

        //////////
        // Params
        this.scene = scene
        this.x = xPosition
        this.y = yPosition

        /////////////////////
        // Create The Button

        this.text = this.scene.add.bitmapText(0, 0, 'VikingSquad', textStr)
        this.add(this.text)
        this.text.setInteractive({ useHandCursor:true })

        if (textSize === 'small') {
            this.text.setScale(0.5)
        }

        if (textSize === 'medium') {
            this.text.setScale(0.7)
        }

        if (textSize === 'large') {
            this.text.setScale(1.1)
        }


        /////////////////
        // Add Listeners
        this.text.on('pointerdown', function () {
            this.scene.scene.start(targetScene)
        }.bind(this))

        this.text.on('pointerover', function () {
            this.text.setTint(0x00ff00)
        }.bind(this))

        this.text.on('pointerout', function () {
            this.text.clearTint()
        }.bind(this))

        ///////////////////
        // Add Button To Scene
        this.scene.add.existing(this)
    }
}