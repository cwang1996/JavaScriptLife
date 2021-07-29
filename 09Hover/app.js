// get the elements
const board = document.getElementById("container");
const title = document.querySelector('.title h2');
const colors = ["#087E8B", "#FF5A5F", "#3C3C3C", "#F5F5F5", "#C1839F"];
const SQUARES = 1000;

// finds a random color from our array
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

// sets the background and box shadow of the square class depending on which random color was chosen
const setColor = (square) => {
    const color = getRandomColor();
    square.style.background = color;
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

// when color is removed, shows what the squares should look like with no interaction
const removeColor = (square) => {
    square.style.background = "#1d1d1d";
    square.style.boxShadow = "0 0 2px #000";
};

//generates the squares using a loop the length of the squares variable of 500.
for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", () => {
        setColor(square);
    })
    square.addEventListener("mouseout", () => {
        removeColor(square);
    })
    board.appendChild(square);
}

// adds hover effect for the title
const titleColor = (hovor) => {
    const title = getRandomColor();
    hovor.style.color = title;
}

title.addEventListener('mouseover', () => {
    titleColor(title);
})