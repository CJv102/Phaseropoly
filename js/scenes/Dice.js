export default class Dice
{
	constructor(scene)
	{
		this.scene = scene
	}

	rollDice()
	{
		let d1 = Phaser.Math.Between(1, 6)
		let d2 = Phaser.Math.Between(1, 6)

		// Double?
		if (d1 === d2)
		{
			console.log(`DOUBLE!! \nD1: ${d1} D2: ${d2}`)
		}
		
	}
}