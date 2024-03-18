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

    // console.log(window.innerHeight, window.innerWidth)
    // initialize colors
    model.shuffleColors();

    // render Player for the first time
    renderPlayer();

    // action for representing
    p0.addRunningHandler(controlAnimation);

    // resize map of background
    console.log(window.innerWidth, window.innerHeight)
    const allElement = [...document.querySelectorAll('.background > div')];
    console.log(allElement)
    const aspectRatio = 1536 / 730;
    resize.aspectRatioCorrection(aspectRatio, screen.width, screen.height);
    // let i = 0;
    allElement.map((el, i) => {
        // if(i > 11) return;
        // i++;
        let cl = el.className;
        // console.log(cl)
            resize.resize(`${cl}`);
        resize.reshift(`${cl}`);
    });
    // adjust the size of skill
    const allSkill = [...document.querySelectorAll('.skill')];
    allSkill.map((el) => {
        let cl = el.className.split(' ')[0];
        // resize.resize(`${cl}`);
        resize.reshift(`${cl}`);
    })

    // adjust all the project
    const allProject = [...document.querySelectorAll('.pro')];
    allProject.map((el) => {
        let cl = el.className.split(' ')[0];
        resize.reshift(`${cl}`);
        resize.resize(`${cl}`);
    })

    // set all button
    const buttonsBack = document.querySelector('.buttonBack');
    
    // model.reMap();

    // modelBotRun
    modelBotRun.reMapBotMovement();

    // kill Function on bot
    modelBotRun.killFunction();

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
    modelBotRun.runAllBot(listOfPlayer);
}
function goToBackPage() {
    window.location.reload();
}

var start = 'start'
const linklocation = {
    'e-cart' : 'https://e-cart-v-ecom.onrender.com',
    'natours' : 'https://natours-app0-ilr8.onrender.com', 
    'chat-app' : 'https://chat-app-nitesh.onrender.com'
}

// terminal Control

function reArrangePixel(size) {
    return (window.innerHeight / 100) * size;
}

const terminalText = document.getElementById('chat-container')
// console.log(terminalText)
const actionTerminal = function() {
    
    terminalControl.style.display = 'block';
    if(start === 'start') { // for first time
        // console.log('start')
        terminalControlJS.sendMessage(start);
        textValue.addEventListener('keydown', function(e) {
            if(e.key === 'Enter') {
                var userInput = document
                .getElementById("user-input")
                .value.toLowerCase()
                .split('>')[1]
                .trim();
                // console.log(userInput)
    
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
    const elemen = document.querySelector('#screenTopImg').getBoundingClientRect();
    // console.log(elemen)
    
terminalText.style.top = `${elemen.top + reArrangePixel(3.5)}px`;
terminalText.style.left = `${elemen.left}px`;
terminalText.style.height = `${elemen.height - reArrangePixel(3.5)}px`;
terminalText.style.width = `${elemen.width}px`;
    
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
const backButton = document.querySelector('.backToAnimation');
const help = document.querySelector('.help');
const canva = document.querySelector('#myCanvas');
const background = document.querySelector('.backgroundContext');
const mainGameArea = document.querySelector('.back-Anima')

playButton.addEventListener('click', playGame);
backButton.addEventListener('click', goToBackPage);

// for popup message box /////////////////////////////////////////////////////////////////////////////////
const openButton = document.querySelector('.howToPlay');
const popup = document.querySelector(".popup");
const popup1 = document.querySelector(".popup1");

popup.style.display = 'none';
popup1.style.display = 'none';
const closeButton = document.getElementById("closeButton");
const closeButton1 = document.getElementById("closeButton1");

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
closeButton1.addEventListener("click", function() {
    // console.log('hello boring')
  popup1.style.display = "none";
});

help.addEventListener('click', function() {
    if(popup1.style.display === 'none') {
        popup1.style.display = 'block';
        // Focus on the close button when the popup1 is opened
        closeButton.focus();
      } else {
        popup1.style.display = 'none';
      }
})

// Add blur event listener to the close button
popup.addEventListener("blur", function() {
  // Close the popup when the close button loses focus
  popup.style.display = "none";
});

window.addEventListener('resize', goToBackPage);

window.addEventListener('click', function(e) {
    console.log(e)
})

let index = 0;
const LevelDisplay = [
    ['e-cart', 'https://e-cart-v-ecom.onrender.com', './image/img/e-cart.png'],
    ['natours', 'https://natours-app0-ilr8.onrender.com', './image/img/natours.png'],
    ['chat-app', 'https://chat-app-nitesh.onrender.com', './image/img/chat-app.png']
]

window.addEventListener('keydown', function(e) {
    if(!(e.key === 'o' ||e.key === 'Enter')) return;
    if(e.key === 'o' ||e.key === 'Enter') {
        const player = document.querySelector('.actualPlayer0');
        const l = player.offsetLeft + 20;
        const t = player.offsetTop + 20;
        const tag = document.querySelector('.press-enter');
        const L = tag.offsetLeft - 30;
        const R = L + tag.offsetWidth + 30;
        const T = tag.offsetTop - 30;
        const B = T + tag.offsetHeight + 30;
        if((L <= l && l <= R) && (T <= t && t <= B)) {
            // console.log(e.key)
            const projNm = document.querySelector('.projects-name');
            const projimg = this.document.querySelector('.project-img > img')
            
            if(e.key === 'Enter') {
                index++;
                if(index >= 3) index = 0;
                projNm.textContent = LevelDisplay[index][0];
                projimg.src = LevelDisplay[index][2];
            }
            if(e.key === 'o') {
                window.location.href = LevelDisplay[index][1];
            }
        }
    }
})

if(window.innerHeight > window.innerWidth) {
    alert('Please rotate your device: It is responsive in landscape mode');
}

function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
  
if (isTouchDevice()) {
    alert('Please do open the applicationin device which has keyboard');
}