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

		withPontuation: function ( pontuation ) {
			this.pontuation = pontuation
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
		}
	}
}

function createCharacter(){
	return {
		withImageRun: function ( imgSrc ) {
			this.characterRun = new Image()
			this.characterRun.src = imgSrc
			return this
		},
		withImageDimensions: function ( imgWidth, imgHeight ) {
			this.imgWidth = imgWidth
			this.imgHeight = imgHeight
			return this
		},
		withSpriteDimensions: function ( imgWidth, imgHeight, rows, cols ) {
			this.spriteWidth = imgWidth/cols
			this.spriteHeight = imgHeight/rows
			return this
		},
		withMoveState: function( moveState ) {
			this.moveState = moveState
			return this
		},
		withFrame: function( frameCount, currentFrame ) {
			this.frameCount = frameCount
			this.currentFrame = currentFrame
			return this
		},
		withCoordinates: function( x, y, srcX, srcY ) {
			this.x = x
			this.y = y
			this.srcX = srcX
			this.srcY = srcY
			return this
		},
		withSpeed: function( speed ) {
			this.speed = speed
			return this
		},
		withId: function( id ){
			this.id = id
			return this
		}
	}
}