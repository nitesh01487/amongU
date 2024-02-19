

export default class Player {
    _color;
    _ele;
    _x_co;
    _y_co;
    _speed = 0.1;
    _radius;
    _animation;
    isLeft = false;
    pxToREM = 0.0625;
    keyEnabledArray = Array(222).fill(true);
    ispressed = Array(4).fill(false); // 0 -> left // 1 ->up // 2 -> right // 3 -> bottom
    constructor(color) {
        this._color = color;
    }

    render(data, index) {
        const body = document.querySelector('body');
        body.insertAdjacentHTML('afterbegin', data);
        // get the _ele, _x_co, _y_co
        this._ele = body.getElementsByClassName(`actualPlayer${index}`)[0];
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
            e.preventDefault();
            if(this.keyEnabledArray[e.keyCode] && !(this.ispressed[0] && e.key == 'd') && (!(this.ispressed[2] && e.key == 'a'))) {
                this.keyEnabledArray[e.keyCode] = false;
                console.log(e.keyCode);
                console.log(this.keyEnabledArray[e.keyCode])
                if(e.key == 'a' || e.key == 'd') {
                    this.isLeft = e.key == 'a' ? true : false;
                    this.ispressed[e.key == 'a' ? 0 : 2] = true;
                }
                if(e.key == 's') {
    
                }
                if(e.key == 'w') {
    
                }
                if(e.key == 'a' || e.key == 's' || e.key == 'd' || e.key == 'w' || e.key == 'k')
                    handler();
            }
        });

        window.addEventListener('keyup', (e) => {  // sequence is very important in this
            e.preventDefault();
            console.log(e.keyCode);
            if(!(this.ispressed[0] && e.key == 'd') && (!(this.ispressed[2] && e.key == 'a'))) {

                if(e.key == 'a' || e.key == 'd') {
                    this.ispressed[e.key == 'a' ? 0 : 2] = false;
                    clearInterval(window[`${this._ele.className}animation`]);
                }
                if(e.key == 's') {
                    
                }
                if(e.key == 'w') {
                    
                }
                
                if(e.key == 'a' || e.key == 's' || e.key == 'd' || e.key == 'w' || e.key == 'k')
                    handler();
                window[`${this._ele.className}animation`] = undefined;  
                this.keyEnabledArray[e.keyCode] = true;
            }
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