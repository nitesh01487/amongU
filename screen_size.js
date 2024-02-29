
let heightCorrection = 0;
export const aspectRatioCorrection = function(aspectRatio, w, h) {
    heightCorrection = w /aspectRatio - h;
}

export const reshift = function(classNm) {
    const element = document.querySelector(`.${classNm}`);

    // screen
    let originalScreenWidth = 1536 / 16; // in rem
    let originalScreenHeight = (730 - heightCorrection) / 16;

    // elements
    const eleLeft = element.offsetLeft / 16;
    const eleTop = element.offsetTop / 16;
    
    const data = eleLeft * ((window.innerWidth / 16) / originalScreenWidth) ;
    element.style.left = `${data}rem`;

    const data1 = eleTop * ((window.innerHeight / 16) / originalScreenHeight) ;
    element.style.top = `${data1}rem`
}

export const resize = function(classNm) {
    const element = document.querySelector(`.${classNm}`);

    // screen
    let originalScreenWidth = 1536 / 16; // in rem
    let originalScreenHeight = (730 - heightCorrection) / 16;

    // elements
    const eleHeight = element.offsetHeight / 16;
    const eleWidth = element.offsetWidth / 16;
    
    const data = eleHeight * ((window.innerHeight / 16) / originalScreenHeight) ;
    element.style.height = `${data}rem`;

    const data1 = eleWidth * ((window.innerWidth / 16) / originalScreenWidth) ;
    element.style.width = `${data1}rem`;
}