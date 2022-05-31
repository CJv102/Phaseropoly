export default class Player
{
	constructor(scene)
	{
		this.scene = scene

		this.player = 0//player 1, 2 ..
		this.color

		this.tokenColors = [
			['Pink',	'ff00ff'],
			['Green',	'00ff00'],
			['Red', 	'ff0000'],
			['Blue', 	'0000ff'],
			['Orange',	'ffa500']
		]

		this.cash = startingCash
		this.position = 0
		this.properties = []

		// Does this player own a get out of jail free card?
		this.getOutOfJailFree = false

	}

}