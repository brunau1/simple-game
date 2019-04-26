function createCanvas(canvasWidth, canvasHeight){

	const canvas = document.getElementById('gameCanvas')

	canvas.width = canvasWidth
	canvas.height = canvasHeight

	const ctx = canvas.getContext("2d")

	return {canvas, ctx}
}

function createPlayer(){
	dir = {
		LEFT: false,
		RIGHT: false,
		UP: false,
		DOWN: false
	}

	return{
		dir,

		withName: function ( name ){
			this.name = name
			return this
		},

		withLife: function ( life ) {
			this.life = life
			return this
		},

		withImage: function ( image ){
			this.sprite = new Image()
			this.sprite.src = image
			return this
		},

		withDimensions: function ( width, height ) {
			this.width = width
			this.height = height
			return this
		},
		
		withPosition: function( x, y, xVelocity, yVelocity ) {
			this.x = x
			this.y = y
			this.xVelocity = xVelocity
			this.yVelocity = yVelocity
			return this
		},
		
		withId: function( id ){
			this.id = id
			return this
		},

		move: function () {

			if (dir.LEFT)
				xVelocity -= 10
			if (dir.RIGHT)
				xVelocity += 10
			if (dir.UP)
				yVelocity -= 10
			if (dir.DOWN)
				yVelocity += 10

			rectangle.yVelocity += 1.5
			rectangle.x += rectangle.xVelocity
			rectangle.y += rectangle.yVelocity
			rectangle.xVelocity *= 0.9
			rectangle.yVelocity *= 0.9

			verifyCanvasRanges()
		},

		verifyCanvasRanges: function () {

			if (x >= 900 - width) {
				x = 900 - width
				console.log("X: " + x)
			}
			else if (x <= 0) {
				x = 0
				console.log("X: " + x)
			}
			if (y >= 600 - height) {
				y = 600 - height
			}
			else if (y <= 0) {
				y = 0
			}
		}
	}
}