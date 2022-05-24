export default class Cards
{
	constructor(scene, squares)
	{	
		this.scene = scene
		this.squares = squares

		// Community chest cards
		this.communityChestCards = [
			`Advance to ${this.squares[0][0]} (Collect £200)`,
			'Bank error in your favour. Collect £200',
			'Doctor’s fee. Pay £50',
			'From sale of stock you get £50',
			'Get Out of Jail Free',
			'Go to Jail. Go directly to jail, do not pass Go, do not collect £200',
			'Holiday fund matures. Receive £100',
			'Income tax refund. Collect £20',
			'It is your birthday. Collect £10 from every player',
			'Life insurance matures. Collect £100',
			'Pay hospital fees of £100',
			'Pay school fees of £50',
			'Receive £25 consultancy fee',
			'You are assessed for street repairs. £40 per house. £115 per hotel',
			'You have won second prize in a beauty contest. Collect £10',
			'You inherit £100'
		]



		// Chance cards
		this.chanceCards = [
		    `Advance to ${this.squares[0][0]} (Collect £200)`,
		    `Advance to ${this.squares[24][0]}. If you pass Go, collect £200`,
		    `Advance to ${this.squares[39][0]}`,
		    `Advance to ${this.squares[11][0]}. If you pass Go, collect £200`,
		   ' Advance to the nearest Station. If unowned, you may buy it from the Bank. If owned, pay wonder twice the rental to which they are otherwise entitled',
		    'Advance to the nearest Station. If unowned, you may buy it from the Bank. If owned, pay wonder twice the rental to which they are otherwise entitled',
		    'Advance token to nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total ten times amount thrown',
		    'Bank pays you dividend of £50',
		    'Get Out of Jail Free',
		    'Go Back 3 Spaces',
		    'Go to Jail. Go directly to Jail, do not pass Go, do not collect £200',
		    'Make general repairs on all your property. For each house pay £25. For each hotel pay £100',
		    'Speeding fine £15',
		    'Take a trip to Kings Cross Station. If you pass Go, collect £200',
		    'You have been elected Chairman of the Board. Pay each player £50',
		    'Your building loan matures. Collect £150'
		]
	}

	create()
	{

	}



	/*	----------------------------------------------------------------------
		shuffleCards(array)
		----------------------------------------------------------------------

		return array

		Shuffle array
		
		----------------------------------------------------------------------
		array array: array to shuffle
		----------------------------------------------------------------------
	*/
	shuffleCards(array)
	{
	    for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	    return array
	}



	chanceCard()
	{
		let card = Phaser.Math.RND.pick(this.chanceCards)
		return card
		// console.log(`Chance Card: ${card}`)
	}

	communityChestCard()
	{
		let card = Phaser.Math.RND.pick(this.communtyChestCards)
		return card
		// console.log(`Community Chest Card: ${card}`)
	}
	
}