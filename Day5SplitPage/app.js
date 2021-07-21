const leftside = document.querySelector('.left');
const rightside = document.querySelector('.right');
const container = document.querySelector('.container');
const button_ripples1 = document.querySelector('.ripple1');
const button_ripples2 = document.querySelector('.ripple2');

  button_ripples2.addEventListener('click', function(e){
        const x = e.clientX;
        const y = e.clientY;
        const buttonTop = e.target.offSetTop;
        const buttonLeft = e.target.offsetLeft;
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;
        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside  + 'px';
        circle.style.left = xInside - 300 + 'px';
        this.appendChild(circle);
        setTimeout(() => circle.remove(), 300)
    })
 
  button_ripples1.addEventListener('click', function(e){
    const x = e.clientX;
    const y = e.clientY;
    const buttonTop = e.target.offSetTop;
    const buttonLeft = e.target.offsetLeft;
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;
    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 130 + 'px';
    this.appendChild(circle);
    setTimeout(() => circle.remove(), 500)
})

leftside.addEventListener('mouseenter', function(){
    container.classList.add('hover-left');
})

leftside.addEventListener('mouseleave', function(){
    container.classList.remove('hover-left');
})

rightside.addEventListener('mouseenter', function(){
    container.classList.add('hover-right');
})

rightside.addEventListener('mouseleave', function(){
    container.classList.remove('hover-right');
})

