export default class Player
{
	constructor(scene)
	{
		this.scene = scene

		this.tokenColors = [
			['Pink',	'ff00ff'],
			['Green',	'00ff00'],
			['Red', 	'ff0000'],
			['Blue', 	'0000ff'],
		]

		this.cash = startingCash
		this.position = 0
		this.properties = []
	}

	tokens()
	{
		this.scene.add.circle(0, 0, 15, 0xff00ff)
	}
}