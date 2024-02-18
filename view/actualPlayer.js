
import Player from './player.js';

class ActualPlayer extends Player {
    _state;
    constructor(color, state = 'actualPlayer'){
        super(color);
        this._state = state;
    }

    movePlayer() {
        
    }

}

export default ActualPlayer;