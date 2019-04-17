function updatePanelData(players){
	const dataAreaPanel = document.getElementById('players')
	let liHtml = `<li><h5 class="card-text">Life:</h5></li>`

	for(let i = 0; i < players.length; i++){

		liHtml += '<li class="list-group-item">'
		liHtml += `<span>${players[i].name}: ${players[i].life} </span>`
		liHtml += '</li>'
	}
	dataAreaPanel.innerHTML = liHtml
}

function drawTank(tank, ctx) {
	let pat = ctx.createPattern(tank.sprite, "repeat")
	console.log(tank.sprite)

	ctx.beginPath()
	ctx.fillStyle = pat
	ctx.fillRect(tank.x, tank.y, tank.width, tank.height)
	ctx.closePath()
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height); 
	drawBorder();
	drawInfo();
	drawTank();
	drawBalls();
	drawBlocks();
	draw_monsters();
	moveBalls();
	tank_block_collision();
	ball_monster_collision();
	moverFunc();

	if (space_pressed && balls.length < 10 && performance.now() - since_last_fire > 500) {
		drawNewBall(tank.get("X") + 15, tank.get("Y") - 30);
	}
	if (right_pressed && tank.get("X") + tank_width < canvas.width) {
		tank.set("X", tank.get("X") + 1);
	}
	if (left_pressed && tank.get("X") > 0) {
		tank.set("X", tank.get("X") - 1);
	}

	if (blocks.length < 3) {
		drawNewBlock();
	}
	if (monsters.length < 1) {
		create_monster();
	}
	if (!tank_block_collision_bool && player_lives < 0) {
		alert("You lost");
		document.location.reload()
	}

	requestAnimationFrame(draw);
}
