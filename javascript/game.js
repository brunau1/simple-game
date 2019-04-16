let screen
let battlefield
let player1
let player2

function initializeObjects(backOption){
	screen = createCanvas(900,600)

	if (backOption == 1)
	battlefield = createBattleField().withImage("images/background1.png")
	if (backOption == 2)
	battlefield = createBattleField().withImage("images/background2.png")
	else
	battlefield = createBattleField().withImage("images/background1.png")
}

function gameStart(backOption){

	document.getElementById('players').hidden = false
	document.getElementById('selectBack').hidden = true

	initializeObjects(backOption)

	battlefield.background.onload = function(){
		screen.ctx.drawImage(battlefield.background,0,0);   
	}
}