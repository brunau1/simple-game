player = {
	x: 0,
	y: 0,
	xVelocity: 0,
	yVelocity: 0,
	width: 0,
	height: 0,
	controller: new controller,


	move: function () {
		if (controller.dir.up) 
			yVelocity -= 10
		if (controller.dir.down)
			yVelocity += 10
		if (controller.dir.left)
			xVelocity -= 10
		if (controller.dir.right)
			xVelocity += 10
	}
}