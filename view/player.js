

export default class Player {
    _color;
    _ele;
    _x_co;
    _y_co;
    _speed = 0.5;
    _radius;
    _animation;
    isLeft = false;
    isUp = false;
    pxToREM = 0.0625;
    keyEnabledArray = Array(222).fill(true);
    ispressed = Array(4).fill(false); // 0 -> left // 1 ->up // 2 -> right // 3 -> bottom
    noOfButtonPressed = 0;
    constructor(color) {
        this._color = color;
    }

    render(data, index) {
        const tag = document.querySelector('.background');
        tag.insertAdjacentHTML('afterbegin', data);
        // get the _ele, _x_co, _y_co
        this._ele = tag.getElementsByClassName(`actualPlayer${index}`)[0];
        this.setCoordinate();

    }

    setCoordinate() {
        const coordinateData = this._ele.getBoundingClientRect();
        this._x_co = coordinateData.x;
        this._y_co = coordinateData.y;
        this._radius = coordinateData.height;
    };

    getCoordinate() {
        return [this._x_co, this._y_co, this._radius];
    }

    addRunningHandler(handler) {
        window.addEventListener('keydown', (e)=> {
            if(!(e.key === 'a' || e.key === 's' || e.key === 'd' || e.key === 'w' )) return;
            // document.querySelector('.actualPlayer0').style.left = `${parseFloat(document.querySelector('.actualPlayer0').style.left) + this._speed}rem`;
            if(!this.keyEnabledArray[e.keyCode]) return; // if same key pressed
            if((this.ispressed[0] && e.key == 'd') || (this.ispressed[2] && e.key == 'a')) return; // if a and d are pressed at same time
            if((this.ispressed[1] && e.key == 's') || (this.ispressed[3] && e.key == 'w')) return;

            this.keyEnabledArray[e.keyCode] = false;
            this.noOfButtonPressed += 1;

            if(e.key == 'a' || e.key == 'd') {
                this.isLeft = e.key == 'a' ? true : false;
                this.ispressed[e.key == 'a' ? 0 : 2] = true;
                // console.log(this.isLeft, this.ispressed)
            }
            if(e.key == 'w' || e.key == 's') {
                this.isUp = e.key == 'w' ? true : false;
                this.ispressed[e.key == 'w' ? 1 : 3] = true;
                // console.log(this.isUp, this.ispressed)
            }
            if(e.key == 'a' || e.key == 's' || e.key == 'd' || e.key == 'w')
                    handler();
        });

        window.addEventListener('keyup', (e) => {  // logic sequence is very important in this
            if(!(e.key === 'a' || e.key === 's' || e.key === 'd' || e.key === 'w' )) return;

            if((this.ispressed[0] && e.key == 'd') || (this.ispressed[2] && e.key == 'a')) return;
            if((this.ispressed[1] && e.key == 's') || (this.ispressed[3] && e.key == 'w')) return;

            this.noOfButtonPressed -= 1;
            this.keyEnabledArray[e.keyCode] = true;

            if(e.key == 'a' || e.key == 'd') { // used left value true means left and false means right and isPressed value whether key is pressesd or not
                this.ispressed[e.key == 'a' ? 0 : 2] = false;
                // console.log(this.isLeft, this.ispressed)
            }
            if(e.key == 'w' || e.key == 's') {
                this.ispressed[e.key == 'w' ? 1 : 3] = false;
                // console.log(this.isUp, this.ispressed)
            }

            if(this.noOfButtonPressed <= 0){
                this,this.noOfButtonPressed = 0;
                clearInterval(window[`${this._ele.className}animation`]);
                window[`${this._ele.className}animation`] = undefined;  
            }
            // here handler is only called for setting the static image of imposter
            handler('up');
        })
    }

    setFaceDirection() {
        this._ele.querySelector('svg').style.transform = `scale(${this.isLeft == true ? '' : '-'}1, 1)`;
    }

    moveX() {
        if(!this.isLeft)
            this._ele.style.left = `${parseInt(this._ele.style.left) + this._speed}rem`;
        else 
            this._ele.style.left = `${parseInt(this._ele.style.left) + this._speed}rem`;

    }

}

// make other button disable
