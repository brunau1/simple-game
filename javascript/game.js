let screen
let battlefield
let players = []

function initializeObjects(backOption, name1, name2){
	screen = createCanvas(900,600)

	if (backOption == 1)
	battlefield = createBattleField().withImage("images/background1.png")
	if (backOption == 2)
	battlefield = createBattleField().withImage("images/background2.png")
	else
	battlefield = createBattleField().withImage("images/background1.png")

	players.push(createPlayer().withName(name1).withLife(1000))
	players.push(createPlayer().withName(name2).withLife(1000))
}

function gameStart(backOption, name1, name2){

	document.getElementById('players').hidden = false
	document.getElementById('simpleForm').hidden = true

	if (name1 && name2)
	initializeObjects(backOption, name1, name2)
	else
	initializeObjects(backOption, 'player1', 'player2')
	
	battlefield.background.onload = function(){
		screen.ctx.drawImage(battlefield.background,0,0);   
	}

	updatePanelData(players)
}