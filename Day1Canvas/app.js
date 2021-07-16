const container = document.querySelector('.container');
const red_btn = document.querySelector('.red');
const blue_btn = document.querySelector('.blue');
const green_btn = document.querySelector('.green');
const delete_btn = document.querySelector('.clear');

let stroke_color = 'black';

window.addEventListener('load', () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    //Resizing
    // canvas.height = canvas.clientHeight;
    // canvas.width = canvas.clientWidth;

    //variables
    let painting = false;

    function startPosition(){
        painting = true;
        draw(e);
    }

    function finishedPosition(){
        painting = false;
        ctx.beginPath();
    }

    function draw(e){
        if(!painting) return;
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = stroke_color;

        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    }

    red_btn.addEventListener('click', function(){
        stroke_color = 'red';
    })

    blue_btn.addEventListener('click', function(){
        stroke_color = 'blue';
    })

    green_btn.addEventListener('click', function(){
        stroke_color = 'green';
    })

    delete_btn.addEventListener('click', function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    })

    //EventListeners 
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);
})