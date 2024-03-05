"use strict";

import actualPlayer from "./view/actualPlayer.js";
import * as model from './modelRun.js';
import * as resize from './screen_size.js'
import * as animationStart from './animation.js';

animationStart.callAnimation();
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
    model.stationaryAdjustPlayer(0, p0._ele);
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


const array = [];
const divTag = document.querySelectorAll('.background > div');
const tags = [...divTag];
console.log(tags)

let c = 0;
tags.map((el) => {
    if(c > 4) {
    let arr = [];
    arr.push(el.offsetLeft );
    arr.push(el.offsetTop );
    arr.push(el.offsetLeft  + el.offsetWidth);
    arr.push(el.offsetTop + el.offsetHeight);
    array.push(arr);
    }
    c++;
})

console.log(array)
model.reMap();

const terminal = document.querySelector('.terminal');
const tap = document.querySelector('.tapSt');
const top = document.querySelector('.top');
const bottom = document.querySelector('.bottom');

const term = [tap, terminal];
console.log(tap)

term.map((e) => {
    e.addEventListener('click', function() {
        if(top.style.transform == '') {
            top.style.transform= 'translate3d(0, 0, 0) rotateX(0deg) scale(1.5, 1.5)';
            bottom.style.transform = 'translate3d(0, 3vh, 0) rotateX(-90deg) scale(1.5, 1.5)';
            tap.style.display = 'none'
        }
        else  {
            top.style.transform = '';
            bottom.style.transform = '';
            tap.style.display = 'block' // one bug
        }
    })
})

const stopAnimation = document.querySelector('.stopanimation');
console.log(stopAnimation)

stopAnimation.addEventListener('click', function() {
    console.log(document.querySelector('canvas'))
})