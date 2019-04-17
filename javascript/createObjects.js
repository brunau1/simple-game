function createCanvas(canvasWidth, canvasHeight){

	const canvas = document.getElementById('gameCanvas');

	canvas.width = canvasWidth;
	canvas.height = canvasHeight;

	const ctx = canvas.getContext("2d");

	return {canvas, ctx}
}

function createBattleField(){
	return{
		withImage: function ( background ){
			this.background = new Image()
			this.background.src  = background
			return this
		}
	}
}

function createPlayer(){
	return{
		withName: function ( name ){
			this.name = name
			return this
		},

		withLife: function ( life ) {
			this.life = life
			return this
		},

		withTank: function ( tank ){
			this.tank = tank
			return this
		}
	}
}

function createTank(){
	return{
		withImage: function ( image ){
			this.sprite = new Image()
			this.sprite.src = image
			return this
		},
		withRectDimensions: function ( width, height ) {
			this.width = width
			this.height = height
			return this
		},
		withMoveDirection: function( moveX, moveY ) {
			this.moveDirX = moveX
			this.moveDirY = moveY
			return this
		},
		withCoordinates: function( x, y ) {
			this.x = x
			this.y = y
			return this
		},
		withSpeed: function( speed ) {
			this.speed = speed
			return this
		},
	}
}