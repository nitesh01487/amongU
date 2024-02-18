

export default class Player {
    _color;
    _ele;
    _x_co;
    _y_co;
    _radius;
    _animation;
    _isLeft;
    pxToREM = 0.0625;
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

    addRunningHandler(handler) {
        window.addEventListener('keydown', function(e) {
            console.log(e);
            if(e.key == 'a') {
                this._isLeft = true;
            }
            if(e.key == 's') {

            }
            if(e.key == 'd') {
                this._isLeft = false;
            }
            if(e.key == 's') {
                
            }
            handler();
        })
    }


}