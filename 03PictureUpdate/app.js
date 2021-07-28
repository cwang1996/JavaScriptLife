const root = document.querySelector(':root');
const color = document.getElementById('color');

function spacingChange(val){
    root.style.setProperty('--spacing', val + "px");
}

function blurChange(val){
   root.style.setProperty('--blur', val + "px");
}

function colorChange(val){
    root.style.setProperty('--base', val);  
}

//another method

// const inputs = document.querySelectorAll('.controls input');

// function handleUpdate() {
//   const suffix = this.dataset.sizing || '';
//   document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
// }

// inputs.forEach(input => input.addEventListener('change', handleUpdate));
// inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));