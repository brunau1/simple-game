const screen = createCanvas(900,600)

let players = []


var gameInit = () =>{

	document.getElementById('players').hidden = false
	document.getElementById('simpleForm').hidden = true
	
	let imgTank = []
	let names = []

	names.push(document.getElementById('name1').value)
	names.push(document.getElementById('name2').value)

	imgTank.push(document.getElementById('selectTankP1').value)
	imgTank.push(document.getElementById('selectTankP2').value)

	let index = 1
	for(i in names){
		if (!names[i]) 
			names[i] = `player ${index}`
		
		index++
	}
	987985748

	players.push(createPlayer()
			.withName(names[0])
			.withLife(1000)
			.withImage(setTankImageSrc(imgTank[0]))
			.withDimensions(40, 68)
			.withPosition(0,0,0,0)
			.withId(1))
	players.push(createPlayer()
			.withName(names[1])
			.withLife(1000)
			.withImage(setTankImageSrc(imgTank[1]))
			.withDimensions(40, 68)
			.withPosition(800,500,0,0)
			.withId(2))

	updatePanelData(players)

	setInterval(loop, 70)
}

var loop = () => {

	getInput(players[0])
	getInput(players[1])

	//console.clear()

	move(players[0])
	move(players[1])

	draw(screen.ctx, players[0])
	draw(screen.ctx, players[1])

	updatePanelData(players)
}

var setTankImageSrc = ( imgTank ) =>{

	if (imgTank == 1)
		return "images/tanks/tank1.png"
	else if(imgTank == 2)
		return "images/tanks/tank2.png"
	else if(imgTank == 3)
		return "images/tanks/tank3.png"
	else if(imgTank == 4)
		return "images/tanks/tank4.png"
	else
		return "images/tanks/tank1.png"
}