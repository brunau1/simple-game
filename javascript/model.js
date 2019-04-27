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
		}
	}
}

function move ( player ) {

	if (player.dir.LEFT)
		player.xVelocity = -1
	if (player.dir.RIGHT)
		player.xVelocity = 1
	if (player.dir.UP)
		player.yVelocity = -1
	if (player.dir.DOWN)
		player.yVelocity = 1

	player.x += player.xVelocity
	player.y += player.yVelocity
	player.xVelocity *= 0.9
	player.yVelocity *= 0.9

	console.log("X",player.x)
	console.log("Y",player.y)

	verifyCanvasRanges( player )
}

function verifyCanvasRanges ( player ) {

	if (player.x >= 900 - player.width) {
		player.x = 900 - player.width
	}
	else if (player.x <= 0) {
		player.x = 0
	}
	if (player.y >= 600 - player.height) {
		player.y = 600 - player.height
	}
	else if (player.y <= 0) {
		player.y = 0
	}
}