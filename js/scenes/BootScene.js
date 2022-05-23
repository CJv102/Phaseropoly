/**
 * 	The BootScene is used at the very beginning before the Preloader is called. 
 * 	We may want to load some small assets into the preloader, such as logo or 
 * 	make a communication to the server or something like that.
 */

export default class BootScene extends Phaser.Scene
{
	constructor()
	{
		super('BootScene')
	}

	preload()
	{
		this.load.bitmapFont('VikingSquad', './assets/fonts/Unnamed-1.png', './assets/fonts/Unnamed-1.xml');
	}

	create()
	{
		this.scene.start("PreloadScene")
	}

}