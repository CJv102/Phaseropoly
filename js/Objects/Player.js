export default class Player
{
	constructor(scene)
	{
		this.scene = scene

		this.playerTokenColors = [
			['Pink',	'ff00ff'],
			['Green',	'00ff00'],
			['Red', 	'ff0000'],
			['Blue', 	'0000ff'],
		]


		this.players = [

		//	NAME 		COLOR 		POSITION

			'Pink',		'ff00ff',	0,
			'Green',	'00ff00',	0,
		]
	}

	token()
	{
		this.scene.add.circle(0, 0, 15, 0xff00ff)
	}
}