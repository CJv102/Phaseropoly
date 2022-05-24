export default class Helpers
{
	constructor(scene)
	{	
		this.scene = scene
	}


	////////////////////////////////////////
	// Ensures sprite speed doesnt exceed maxVelocity while update is called
	constrainVelocity(sprite, maxVelocity)
	{
	    if (!sprite || !sprite.body) {
	    	console.log("Helper::constrainVelocity() Error. (Missing sprite)")
	    	return
	    }

	    let angle, currVelocitySqr, vx, vy
	    vx = sprite.body.velocity.x
	    vy = sprite.body.velocity.y
	    currVelocitySqr = vx * vx + vy * vy

	    if (currVelocitySqr > maxVelocity * maxVelocity) {
	        angle = Math.atan2(vy, vx)
	        vx = Math.cos(angle) * maxVelocity
	        vy = Math.sin(angle) * maxVelocity
	        sprite.body.velocity.x = vx
	        sprite.body.velocity.y = vy
	    }
	}// constrainVelocity()



	///////////////////////////////////
	// Capitalize 1st char of string
	cap1stChar(string)
    {
    	return string.charAt(0).toUpperCase()+string.slice(1)
    }


    ///////////////////////////////////////
    // Add a pulse anim to group objects
    tweensPulse(scene, targets)
	{	
		if (!targets) {
			console.log("Helper::tweensPulse() Error. (Missing targets)")
			return
		}
		scene.tweens.add({
	        targets: targets,
	        alpha: 0.1,
	        duration: 100,
	        scaleX: 0.9,
        	scaleY: 0.9,
	        yoyo: true,
	        repeat: -1,
	        ease: 'Sine.easeInOut'
	    })
	}


	tweensBlink(scene, targets)
	{
		if (!targets) {
			console.log("Helper::tweensBlink() Error. (Missing targets)")
			return
		}
		scene.tweens.add({
			targets: targets,
			alpha: 0.1,
			scaleX: 1.6,
			scaleY: 1.6,
			yoyo: true,
			repeat: 0,
			duration: 200,
			ease: 'Sine.easeInOut',
		})
	}


	tweensBlinkDestroy(scene, targets, child)
	{
		scene.tweens.add({
			targets: targets,
			alpha: 0.1,
			scaleX: 1.6,
			scaleY: 1.6,
			yoyo: true,
			repeat: 0,
			duration: 200,
			ease: 'Sine.easeInOut',
			onComplete: ()=>{ child.destroy() }
		})
	}


	////////////////////////////////////
    // Flash a sprites color briefly
    flashColor(sprite, color=0xff0000)
    {
    	if (!sprite) {
    		console.log("Helper::flashColor() Error. (Missing sprite)")
    		return
    	}

    	// Flash Red
    	this.scene.tweens.addCounter({
	        from: 0,
	        to: 50,
	        duration: 50,
	        onUpdate: ()=>{ sprite.setTint(color) },
	        onComplete: ()=>{ sprite.clearTint() },
    		yoyo: true
	    })
    }


    /////////////////////////////////////////
    // Random place sprites from a group
    randomPlace(group, total=1, maxX=4790, maxY=4790)
    {
    	if (!group) {
			console.log("Helper::randomPlace() Error. (Missing group)")
			return
		}

		for (let i=0; i<total; i++) {
			group.get(
				Phaser.Math.Between(10, maxX), Phaser.Math.Between(10, maxY)
			)
		}
	}

}