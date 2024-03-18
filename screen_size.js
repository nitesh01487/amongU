
let heightCorrection = 0;
export const aspectRatioCorrection = function(aspectRatio, w, h) {
    heightCorrection = w /aspectRatio - h;
}

export const reshift = function(classNm) {
    const element = document.querySelector(`.${classNm}`);
    console.log(element)
    // screen
    let originalScreenWidth = 1536 / 16; // in rem
    let originalScreenHeight = (730 - heightCorrection) / 16;
    
    // elements
    const eleLeft = element.offsetLeft / 16;
    const eleTop = element.offsetTop / 16;
    // console.log(element, eleLeft, eleTop)
    
    const data = eleLeft * ((screen.width / 16) / originalScreenWidth) ;
    element.style.left = `${data}rem`;

    const data1 = eleTop * ((screen.height / 16) / originalScreenHeight) ;
    element.style.top = `${data1}rem`
}

export const resize = function(classNm) {
    const element = document.querySelector(`.${classNm}`);
    console.log(element)
    // screen
    let originalScreenWidth = 1536 / 16; // in rem
    let originalScreenHeight = (730 - heightCorrection) / 16;

    // elements
    const eleHeight = element.offsetHeight / 16;
    const eleWidth = element.offsetWidth / 16;
    // console.log(element, eleHeight, eleWidth)
    
    const data = eleHeight * ((screen.height / 16) / originalScreenHeight) ;
    element.style.height = `${data}rem`;

    const data1 = eleWidth * ((screen.width / 16) / originalScreenWidth) ;
    element.style.width = `${data1}rem`;
    // console.log(data, data1)
    // console.log(document.querySelector(`.${classNm}`))
}