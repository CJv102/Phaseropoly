export default class PreloadScene extends Phaser.Scene
{
	constructor()
	{
		super('PreloadScene')
	}


	preload()
	{
    	///////////////////////
		// Loading screen bars
		this.graphics = this.add.graphics()
		this.newGraphics = this.add.graphics()

		let loadBar = this.add.rectangle(200, 200, 400, 50)
		let loadBarFill = this.add.rectangle(205, 205, 290, 40)

		this.graphics.fillStyle(0xffffff, 1)
		this.graphics.fillRectShape(loadBar)

		this.newGraphics.fillStyle(0x3587e2, 1)
		this.newGraphics.fillRectShape(loadBarFill)

		let loadingText = this.add.bitmapText(250, 280, 'VikingSquad', "Loading: ").setScale(0.8)

		this.load.on('progress', this.updateBar, {newGraphics:this.newGraphics, loadingText:loadingText})
		this.load.on('complete', this.complete, {scene:this.scene})
		

		///////////////////////////////
		// Assets To Load

    	// Main UI
	    this.load.image('box', './assets/images/ui/grey_box.png')
	    this.load.image('checkedBox', './assets/images/ui/blue_boxCheckmark.png')
		this.load.audio('bgMusic', ['./assets/sounds/TownTheme.mp3'])


	} // preload()


	updateBar(percentage) 
	{
		if (this.newGraphics) {
			this.newGraphics.clear()
			this.newGraphics.fillStyle(0x3587e2, 1)
			this.newGraphics.fillRectShape(new Phaser.Geom.Rectangle(205, 205, percentage*390, 40))
		}
		percentage = percentage * 100
		this.loadingText.setText("Loading: " + percentage.toFixed(2) + "%")
	}


	complete()
	{
		this.scene.start("TitleScene")
	}
}