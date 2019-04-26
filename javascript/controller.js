const ARROW_UP = 38
const ARROW_DOWN = 40
const ARROW_RIGHT = 39
const ARROW_LEFT = 37

function getInput(player) {
	if (player.id == 1) {
		document.addEventListener('keydown', function(event){
			let keyState = (event.type == "keydown") ? true : false

			switch(String.fromCharCode(event.keyCode)){
				case 'W' :  
				player.dir.UP = keyState 
				break;
				case 'S' :  
				player.dir.DOWN = keyState
				break;
				case 'A' :  
				player.dir.LEFT = keyState
				break;
				case 'D' :  
				player.dir.RIGHT = keyState
				break;
			}
		})
		document.addEventListener('keyup', function(event){
			let keyState = (event.type == "keydown") ? true : false

			player.dir.UP = player.dir.DOWN = player.dir.LEFT = player.dir.RIGHT = keyState
		})
		return true
	}

	if (player.id == 2) {
		document.addEventListener('keydown', function(event){
			let keyState = (event.type == "keydown") ? true : false

			switch (event.keyCode) {
				case ARROW_UP :  
				player.dir.UP = keyState 
				break;
				case ARROW_DOWN :  
				player.dir.DOWN = keyState
				break;
				case ARROW_LEFT :  
				player.dir.LEFT = keyState
				break;
				case ARROW_RIGHT :  
				player.dir.RIGHT = keyState
				break;
			}
		})
		document.addEventListener('keyup', function(event){
			let keyState = (event.type == "keydown") ? true : false

			player.dir.UP = player.dir.DOWN = player.dir.LEFT = player.dir.RIGHT = keyState
		})
		return true
	}
}