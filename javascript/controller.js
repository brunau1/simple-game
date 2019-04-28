const ARROW_UP = 38
const ARROW_DOWN = 40
const ARROW_RIGHT = 39
const ARROW_LEFT = 37

var getInput = (player) => {
	if (player.id == 1) {
		window.addEventListener('keydown', function (event) {
			let keyState = (event.type == "keydown") ? true : false

			switch (String.fromCharCode(event.keyCode)) {
				case 'W':
					player.dir.UP = keyState
					break;
				case 'S':
					player.dir.DOWN = keyState
					break;
				case 'A':
					player.dir.LEFT = keyState
					break;
				case 'D':
					player.dir.RIGHT = keyState
					break;
			}
		})
		window.addEventListener('keyup', function (event) {
			let keyState = (event.type == "keydown") ? true : false

			player.dir.UP = player.dir.DOWN = player.dir.LEFT = player.dir.RIGHT = keyState
		})
		return true
	}

	if (player.id == 2) {
		window.addEventListener('keydown', function (event) {
			let keyState = (event.type == "keydown") ? true : false

			switch (event.keyCode) {
				case ARROW_UP:
					player.dir.UP = keyState
					break;
				case ARROW_DOWN:
					player.dir.DOWN = keyState
					break;
				case ARROW_LEFT:
					player.dir.LEFT = keyState
					break;
				case ARROW_RIGHT:
					player.dir.RIGHT = keyState
					break;
			}
		})
		window.addEventListener('keyup', function (event) {
			let keyState = (event.type == "keydown") ? true : false

			player.dir.UP = player.dir.DOWN = player.dir.LEFT = player.dir.RIGHT = keyState
		})
		return true
	}
}

function move(players) {

	for (i in players) {
		if (players[i].dir.LEFT)
			players[i].xVelocity = -5
		if (players[i].dir.RIGHT)
			players[i].xVelocity = 5
		if (players[i].dir.UP)
			players[i].yVelocity = -5
		if (players[i].dir.DOWN)
			players[i].yVelocity = 5

		players[i].x += players[i].xVelocity
		players[i].y += players[i].yVelocity
		players[i].xVelocity *= 0
		players[i].yVelocity *= 0

		console.log("nome:", players[i].name)
		console.log("X", players[i].x)
		console.log("Y", players[i].y)

		verifyCanvasRanges(players[i])
	}
	verifyColision(players)
}

function verifyCanvasRanges(player) {

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

function verifyColision(players) {
	//left and top
	if ( (((players[0].x >= players[1].x - players[1].width) && (players[0].x <= players[1].x)) &&
	((players[0].y >= players[1].y - players[1].height) && (players[0].y <= players[1].y + players[1].height - 2))) ||
	//right and down
	(((players[0].x - players[0].width >= players[1].x) && (players[0].x >= players[1].x)) &&
	((players[0].y >= players[1].y + players[1].height - 2) && (players[0].y >= players[1].y)))) {

		players[0].x = players[1].x - players[1].width
	}
}