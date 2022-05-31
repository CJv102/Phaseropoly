export default class GameLog
{
	constructor(scene, player)
	{
		this.scene = scene

		// Array holding logs
		this.log = []

		// Current time
		this.timeString = new Date().toLocaleTimeString()

		// Active player
		this.player = player

		// Actions
		this.actions = ['Buy', 'Trade', 'Sell']
	}

	create(msg)
	{
		// if (this.log.length < 1)
		// {
		// 	//this.log.push(`${this.timeString}||Logged On`)

		// 	this.create('Loggerinismist')
		// 	return
		// }

		msg = !msg ? `No Msg` : msg

		let log = `${this.timeString}||${msg}`
		this.log.push(log)
		console.log(this.log)
	}

}