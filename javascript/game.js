let screen

function initializeObjects(backOption){
	screen = createCanvas(900,600)

	let background = new Image();

	if (backOption == 1){
		background.src = "images/background1.png"
	}
	if (backOption == 2){
		background.src = "images/background2.png" 
	}
	else{
		background.src = "images/background1.png" 
	}

	background.onload = function(){
		screen.ctx.drawImage(background,0,0);   
	}
}

function gameStart(backOption){

	document.getElementById('players').hidden = false
	document.getElementById('selectBack').hidden = true

	initializeObjects(backOption)
}