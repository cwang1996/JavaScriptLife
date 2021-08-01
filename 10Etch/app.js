const board = document.querySelector('.container');
const colors = ['blue', 'red', 'green', 'purple', 'pink'];
const black_colors = ['black']
const clear_btn = document.querySelector('.clear');
const black_btn = document.querySelector('.black');
const color_btn = document.querySelector('.color');

const SQUARES = 256;

const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
}

const getBlackColor = () => {
    return black_colors;
}

const setColor = (square) => {
    const color = getRandomColor();
    square.style.background = color;
}

const blackColor = (square) => {
    const color = getBlackColor();
    square.style.background = color;
}

const clearColor = (square) => {
    square.style.background = '#fff';
}

const drawingBoard = () => {
    for(let i = 0; i<SQUARES; i++){
        const createSquare = document.createElement('div');
        createSquare.classList.add('square');
        createSquare.addEventListener('mouseover', () => {
            setColor(createSquare);
        })
        black_btn.addEventListener('click', () => {
            createSquare.addEventListener('mouseover', () => {
                blackColor(createSquare);
            })
        })
        color_btn.addEventListener('click', () => {
            createSquare.addEventListener('mouseover', () => {
                setColor(createSquare);
            })
        })
        clear_btn.addEventListener('click', () =>{
            clearColor(createSquare);
        })
        board.appendChild(createSquare);
        }
    }

drawingBoard();


