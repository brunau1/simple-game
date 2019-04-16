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