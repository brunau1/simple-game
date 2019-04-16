let screen
let battlefield
let players = []
let tanks = []
let srcTank = []

function initializeObjects(backOption, names, imgTank){
	screen = createCanvas(900,600)

	setBackground(backOption)
	
	setTankImageSrc(imgTank, srcTank)

	tanks.push(createTank().withImage(srcTank[0]))
	tanks.push(createTank().withImage(srcTank[1]))

	let index = 1
	for(i in names){
		if (!names[i]) {
			names[i] = `player ${index}`
		}
		players.push(createPlayer().withName(names[i]).withLife(1000).withTank(tanks[i]))
		index++
	}
}

function gameInit(backOption, names, imgTank){

	document.getElementById('players').hidden = false
	document.getElementById('simpleForm').hidden = true

	initializeObjects(backOption, names, imgTank)
	
	battlefield.background.onload = function(){
		screen.ctx.drawImage(battlefield.background,0,0);   
	}

	updatePanelData(players)
}

function setTankImageSrc(imgTank, srcTank){

	for(i in imgTank){
		if (imgTank[i] == 1)
			srcTank.push("images/tanks/tank1.png")
		else if(imgTank[i] == 2)
			srcTank.push("images/tanks/tank2.png")
		else if(imgTank[i] == 3)
			srcTank.push("images/tanks/tank3.png")
		else if(imgTank[i] == 4)
			srcTank.push("images/tanks/tank4.png")
		else
			srcTank.push("images/tanks/tank1.png")
	}
}

function setBackground(backOption) {

	if (backOption == 1)
		battlefield = createBattleField().withImage("images/backgrounds/back1.png")
	else if (backOption == 2)
		battlefield = createBattleField().withImage("images/backgrounds/back2.png")
	else
		battlefield = createBattleField().withImage("images/backgrounds/background1.png")
}