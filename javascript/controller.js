controller = {

    dir = {
        left: false,
        right: false,
        up: false,
        down: false
    },

    keyListener: function ( event ){

        let keyState = (event.type == "keydown") ? true : false

        switch (event.keyCode) {
            case ARROW_UP :  /*seta para cima */
            dir.up = keyState 
            break;
            case ARROW_DOWN :  /*set para baixo*/
            dir.down = keyState
            break;
            case ARROW_LEFT :  /*set para esquerda*/
            dir.left = keyState
            break;
            case ARROW_RIGHT :  /*seta para direita*/
            dir.right = keyState
            break;
        }
    }
}