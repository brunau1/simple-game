const screen = createCanvas(900,600)

let players = []


gameInit = () =>{

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
		if (!names[i]) {
			names[i] = `player ${index}`
		}
		players.push(createPlayer()
			.withName(names[i])
			.withLife(1000)
			.withImage(setTankImageSrc(imgTank[i]))
			.withDimensions(40, 68)
			.withPosition(0,0,0,0)
			.withId(index))

		index++
	}

	updatePanelData(players)
}

setTankImageSrc = ( imgTank ) =>{

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