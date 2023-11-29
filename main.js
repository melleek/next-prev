let slider = document.querySelector('.img1');
let btnPrev = document.querySelector('.prev');
let btnNext = document.querySelector('.next');

let imges =  ['bts.png','bts2.jpg','bts3.jpg', 'bts4.jpg', 'bts5.jpg', 'bts6.jpg'];

let i = 0;


btnPrev.onclick = () => {
    if (i <= 0) i = imges.length; 
    i--; 
    return setImg()
}

btnNext.onclick = () => {
    if (i >= imges.length - 1 ) i = -1; 
    i++; 
    return setImg()
}

function setImg() {
    return slider.setAttribute('src', 'images/' + imges[i]);
}