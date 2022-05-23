export default class Dice
{
	constructor(scene)
	{
		this.scene = scene

		this.doubleRollMax = 0
	}

	rollDice()
	{
		let d1 = Phaser.Math.Between(1, 6)
		let d2 = Phaser.Math.Between(1, 6)
		console.log(`D1: ${d1} D2: ${d2}`)

		// Double?
		if (d1 === d2)
		{
			console.log(`DOUBLE!! \nD1: ${d1} D2: ${d2}`)
			this.doubleRollMax++
		}

		if (this.doubleRollMax === 3)
		{
			// Go To Jail
			console.log(`Rolled 3 Doubles, Player Goes To Jail`)
		}
		
	}
}