"use strict";

import actualPlayer from "./view/actualPlayer.js";
import * as model from './modelRun.js';

const p0 = new actualPlayer(model.colors[0]);
const p1 = new actualPlayer(model.colors[1], 'bot');
const p2 = new actualPlayer(model.colors[2], 'bot');
const p3 = new actualPlayer(model.colors[3], 'bot');
const p4 = new actualPlayer(model.colors[4], 'bot');

const listOfPlayer = [p0, p1, p2, p3, p4];



const controlAnimation = function(from = 'down') {

    // Check the movement validity

    // Move the player
    model.addMotion(p0.ispressed, p0.isLeft, p0.isUp, p0._speed, '0');

    // toggle side
    p0.setFaceDirection();

    // render animation
    if(window[`${p0._ele.className}animation`] == undefined && from == 'down')
        p0._animation = model.runAnimation(p0._ele);

    // set stationary direction after animation
    model.stationaryAdjustPlayer(0);
}

const renderPlayer = function() {
    listOfPlayer.map((pl, i) => {
        const HTMLContent = model
                                .renderPlayerHTMLContent(
                                    pl._color, 
                                    model.positionValue[i][0], 
                                    model.positionValue[i][1],
                                    i
                                );
        pl.render(HTMLContent, i);
    }) 
}


const init = function() {
    // initialize colors
    model.shuffleColors();

    // render Player for the first time
    renderPlayer();

    // action for representing
    p0.addRunningHandler(controlAnimation);
};

init();



// initial make it hidden : when map is introduced and start button is played



// apply the function at controller
// write the function in view (call all the function when event is called)
// model me data persist karna


