"use strict";

import actualPlayer from "./view/actualPlayer.js";
import * as model from './modelRun.js';
import * as resize from './view/screen_size.js'

model.shuffleColors();

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
    console.log('hi')
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

    // resize map
    const allElement = [...document.querySelectorAll('.background > div')];
    const aspectRatio = 1536 / 730;
    resize.aspectRatioCorrection(aspectRatio, window.innerWidth, window.innerHeight);
    allElement.map((el, i) => {
        resize.reshift(`${el.className}`);
        resize.resize(`${el.className}`);

    })
};

init();