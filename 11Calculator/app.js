const inputscreen = document.querySelector('.inputscreen');

// numbers
const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');

// operators
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');

// others
const dot = document.querySelector('.dot');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');

// eventlisteners
zero.addEventListener('click', () => {
    inputscreen.value += 0;       
    console.log(inputscreen.value.length);
})

one.addEventListener('click', () => {
    inputscreen.value += 1;
})

two.addEventListener('click', () => {
    inputscreen.value += 2;
})

three.addEventListener('click', () => {
    inputscreen.value += 3;
})

four.addEventListener('click', () => {
    inputscreen.value += 4;
})

five.addEventListener('click', () => {
    inputscreen.value += 5;
})

six.addEventListener('click', () => {
    inputscreen.value += 6;
})

seven.addEventListener('click', () => {
    inputscreen.value += 7;
})

eight.addEventListener('click', () => {
    inputscreen.value += 8;
})

nine.addEventListener('click', () => {
    inputscreen.value += 9;
})

plus.addEventListener('click', () => {
    inputscreen.value += '+';
})

minus.addEventListener('click', () => {
    inputscreen.value += '-';
})

multiply.addEventListener('click', () => {
    inputscreen.value += '*';
})

divide.addEventListener('click', () => {
    inputscreen.value += '/';
})


dot.addEventListener('click', () => {
    inputscreen.value += '.';
})

equal.addEventListener('click', () => {
    inputscreen.value = eval(inputscreen.value);
})

clear.addEventListener('click', () => {
    inputscreen.value = '';
})






