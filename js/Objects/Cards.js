export default class Cards
{
	constructor(scene, squares)
	{	
		this.scene = scene
		this.squares = squares

		// Community chest cards
		this.communityChestCards = [
			[`Advance to ${this.squares[0][0]} (Collect ${currency}${salary})`, `ADVS00`],
			[`Bank error in your favour. Collect ${currency}${salary}`, 'BNKERR'],
			[`Doctor’s fee. Pay ${currency}50`, `DCTFEE`],
			[`From sale of stock you get ${currency}50`, 'STKSAL'],
			[`Get Out of Jail Free`, `ESCJAL`],
			[`Go to Jail. Go directly to jail, do not pass Go, do not collect ${currency}${salary}`, `GO2JAL`],
			[`Holiday fund matures. Receive ${currency}100`, `HOLFND`],
			[`Income tax refund. Collect ${currency}20`, `INCTAX`],
			[`It is your birthday. Collect ${currency}10 from every player`, `BTHDAY`],
			[`Life insurance matures. Collect ${currency}100`, `LFEASS`],
			[`Pay hospital fees of ${currency}100`, `HSPFEE`],
			[`Pay school fees of ${currency}50`, `SCHFEE`],
			[`Receive ${currency}25 consultancy fee`, `CNSFEE`],
			[`You are assessed for street repairs. ${currency}40 per house. ${currency}115 per hotel`, `STRREP`],
			[`You have won second prize in a beauty contest. Collect ${currency}10`, `BTYWIN`],
			[`You inherit ${currency}100`, `INHERT`]
		]



		// Chance cards
		this.chanceCards = [
		    [`Advance to ${this.squares[0][0]} (Collect ${currency}${salary})`, `ADVS00`],
		    [`Advance to ${this.squares[24][0]}. If you pass Go, collect ${currency}${salary}`, `ADVS24`],
		    [`Advance to ${this.squares[39][0]}`, `ADVS39`],
		    [`Advance to ${this.squares[11][0]}. If you pass Go, collect ${currency}${salary}`, `ADVS11`],
		   	[`Advance to the nearest Station. If unowned, you may buy it from the Bank. If owned, pay wonder twice the rental to which they are otherwise entitled`, `ADVNXS`],
		    [`Advance to the nearest Station. If unowned, you may buy it from the Bank. If owned, pay wonder twice the rental to which they are otherwise entitled`, `ADVNXS`],
		    ['Advance token to nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total ten times amount thrown', `ADVNXU`],
		    [`Bank pays you dividend of ${currency}50`, `BNKDIV`],
		    [`Get Out of Jail Free`, `ESCJAL`],
		    [`Go Back 3 Spaces`, `GOBCK3`],
		    [`Go to Jail. Go directly to jail, do not pass Go, do not collect ${currency}${salary}`, `GO2JAL`],
		    [`Make general repairs on all your property. For each house pay ${currency}25. For each hotel pay ${currency}100`, `MAKREP`],
		    [`Speeding fine ${currency}15`, `SPDFNE`],
		    [`Take a trip to ${this.squares[5][0]}. If you pass Go, collect ${currency}${salary}`, `ADVS05`],
		   	[`You have been elected Chairman of the Board. Pay each player ${currency}50`, `ELCBRD`],
		    [`Your building loan matures. Collect ${currency}150`, `LONMAT`]
		]
	}




	create()
	{

	}




	/*	----------------------------------------------------------------------
		shuffle(array)
		----------------------------------------------------------------------

		return array

		Shuffle array
		
		----------------------------------------------------------------------
		array array: array to shuffle
		----------------------------------------------------------------------
	*/
	shuffle(array)
	{
	    for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	    return array
	}




	/*	----------------------------------------------------------------------
		chanceCard()
		----------------------------------------------------------------------
		
		return array

		draw a card from deck
		----------------------------------------------------------------------
	*/
	chanceCard()
	{
		return Phaser.Math.RND.pick(this.chanceCards)
	}




	/*	----------------------------------------------------------------------
		communityChestCard()
		----------------------------------------------------------------------
		
		return array 

		draw a card from deck
		----------------------------------------------------------------------
	*/
	communityChestCard()
	{
		return Phaser.Math.RND.pick(this.communityChestCards)
	}




	/*	----------------------------------------------------------------------
		cardFuntion(cardCode)
		----------------------------------------------------------------------

		execute an action/function depening on code
		
		----------------------------------------------------------------------
		cardCode str: 6 digit str code from cards array
		----------------------------------------------------------------------
	*/
	cardFunction(cardCode)
	{
		switch (cardCode)
		{
			case `ADVS00`: 
				console.log(`Advance To Go!`)
				// Move player alomg board

				// Give player money
				break

		}
	}
	
}