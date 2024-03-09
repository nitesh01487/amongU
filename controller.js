"use strict";

import actualPlayer from "./view/actualPlayer.js";
import * as model from './modelRun.js';
import * as resize from './screen_size.js'
import * as animationStart from './animation.js';
import * as terminalControlJS from './controlTerminal.js';
import * as modelBotRun from './modelBotRun.js';
import Player from "./view/player.js";

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
    // console.log('hi')
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



const array = [];
const divTag = document.querySelectorAll('.background > div');
const tags = [...divTag];
// console.log(tags)

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

// console.log(array)
model.reMap();

// terminal Control /////////////////////////////////////////////////////////////////////////////////////////////////////
const terminal = document.querySelector('.terminal');
const tap = document.querySelector('.tapSt');
const top = document.querySelector('.top');
const bottom = document.querySelector('.bottom');
const terminalControl = document.querySelector('#chat-container');
const textValue = document.querySelector('#user-input');

const term = [tap, terminal];

function playGame() {
    canva.style.display = 'none';
    background.style.display = 'none';
    mainGameArea.style.display = 'block';
    init();
    makeBotMovement();
}

var start = 'start'
const linklocation = {
    'e-cart' : 'https://e-cart-v-ecom.onrender.com',
    'natours' : 'https://natours-app0-ilr8.onrender.com', 
    'chat-app' : 'https://chat-app-nitesh.onrender.com'
}

// terminal Control
const actionTerminal = function() {
    terminalControl.style.display = 'block';
    if(start === 'start') { // for first time
        console.log('start')
        terminalControlJS.sendMessage(start);
        textValue.addEventListener('keydown', function(e) {
            if(e.key === 'Enter') {
                var userInput = document
                .getElementById("user-input")
                .value.toLowerCase()
                .split('>')[1]
                .trim();
                console.log(userInput)
    
                if(userInput === 'play') {
                    playGame();
                } else if(userInput === 'close') { // bug
                    closeTerminal();
                    textValue.value = 'you> '
                } else if(userInput === 'e-cart'|| userInput === 'natours' || userInput === 'chat-app') {
                    location.href = `${linklocation[userInput]}`
                } else {
                    terminalControlJS.sendMessage();
                }
                // textValue.value = '';
                textValue.focus();
            }
        })
    }
    else { // for second
        textValue.focus();
    }
    start = '';
    
}

// for focusing on textArea
terminalControl.addEventListener('click', function() { // for focusing on textArea
    textValue.focus();
})

var timeoutId;

function openTerminal() {
    top.style.transform= 'translate3d(0, 0, 0) rotateX(0deg) scale(1.5, 1.5)';
    bottom.style.transform = 'translate3d(0, 3vh, 0) rotateX(-90deg) scale(1.5, 1.5)';
    if(tap.classList.contains('fadeIn'))
        tap.classList.remove('fadeIn');
    tap.classList.toggle('fadeOut');

    // enable the terminal action
    timeoutId = setTimeout(actionTerminal, 1000);
}

function closeTerminal() {
    top.style.transform = '';
    bottom.style.transform = '';
    tap.style.display = 'block' // one bug
    if(tap.classList.contains('fadeOut'))
        tap.classList.remove('fadeOut');
    tap.classList.toggle('fadeIn');
    // for content of terminal
    terminalControl.style.display = 'none';

    clearTimeout(timeoutId);
}

term.map((e) => {
    e.addEventListener('click', function() {
        if(top.style.transform == '') { // to open terminal
            openTerminal();
        }
        else  { // to close terminal
            closeTerminal();
        }
    })
})

const stopAnimation = document.querySelector('.stopanimation');

stopAnimation.addEventListener('click', function() {
        cancelAnimationFrame(window['animate']);
});

const playButton = document.querySelector('.play');

const canva = document.querySelector('#myCanvas');
const background = document.querySelector('.backgroundContext');
const mainGameArea = document.querySelector('.back-Anima')

playButton.addEventListener('click', playGame)

// for popup message box /////////////////////////////////////////////////////////////////////////////////
const openButton = document.querySelector('.howToPlay');
const popup = document.querySelector(".popup");
popup.style.display = 'none'
const closeButton = document.getElementById("closeButton");

// Open popup when the open button is clicked
openButton.addEventListener("click", function() {
  if(popup.style.display == 'none') {
    popup.style.display = "block";
    // Focus on the close button when the popup is opened
    closeButton.focus();
  } else {
    popup.style.display = 'none';
  }
});

// Close popup when the close button is clicked
closeButton.addEventListener("click", function() {
  popup.style.display = "none";
});

// Add blur event listener to the close button
popup.addEventListener("blur", function() {
  // Close the popup when the close button loses focus
  console.log('blur event fired')
  popup.style.display = 'none';
});


const allBot = [...listOfPlayer.slice(1)];
function makeBotMovement() {
    console.log(allBot)
    modelBotRun.runAllBot(allBot);
}

window.addEventListener('click', function(e){
    console.log(e)
})