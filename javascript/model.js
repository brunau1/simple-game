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