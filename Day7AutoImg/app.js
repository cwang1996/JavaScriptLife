const images = document.getElementById('images');
const left_btn = document.getElementById('left');
const right_btn = document.getElementById('right');

const imagesList = document.querySelectorAll('#images img');
let index=0;

//if index is greater than the length of the imageList. It will reset back to the beginning. Otherwise it will loop through all the images.
const changeImg = () => {
    if (index > imagesList.length - 1) index = 0;
    else if (index < 0) index = imagesList.length - 1;

    images.style.transform = `translateX(${-index * 300}px)`;
}

//this will increment the index variable that will set off the conditional in the changeImg function
const run = () => {
    index++;
    changeImg();
}

//resets the interval for the image slide
const resetInterval = () => {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}

//sets an interval so that index is incremented every 2 seconds
let interval = setInterval(run, 2000);

//left button gets clicked and index is decreased to move the image back. resetinterval function is called to reset the 2 second timer.
left_btn.addEventListener('click', () => {
    index--;
    resetInterval();
    changeImg();
})

right_btn.addEventListener('click', () => {
    index++;
    resetInterval();
    changeImg();
})
