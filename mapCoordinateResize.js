
let heightCorrection = 0;
export const aspectRatio = function(aspectRatio, w, h) {
    heightCorrection = w /aspectRatio - h;
}

export const reTranslate = function(left, top, right, bottom) {

    // screen
    let originalScreenWidth = 1536; // in rem
    let originalScreenHeight = (730 - heightCorrection);
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;

    // elements
    const l = screenWidth * (left / originalScreenWidth);
    const t = screenHeight * (top / originalScreenHeight);
    const r = screenWidth * (right / originalScreenWidth);
    const b = screenHeight * (bottom / originalScreenHeight);
    return [l, t, r, b];
}

export const reTranslateBotCoordinate = function(val, dir) {

    // screen
    let originalScreenWidth = 1536; // in rem
    let originalScreenHeight = (730 - heightCorrection);
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    console.log(heightCorrection)

    // elements
    // const l = screenWidth * (left / originalScreenWidth);
    // const t = screenHeight * (top / originalScreenHeight);
    // const r = screenWidth * (right / originalScreenWidth);
    // const b = screenHeight * (bottom / originalScreenHeight);
    let returnVal = 0;
    if(dir === 'r' || dir === 'l') {
        returnVal = screenWidth * (val / originalScreenWidth);
    } else if (dir === 'u' || dir === 'd') {
        returnVal = screenHeight * (val / originalScreenHeight);
    }
    return returnVal;
}

export const convertVal = function(val) {
    return (val * (window.innerWidth / 1536));
}