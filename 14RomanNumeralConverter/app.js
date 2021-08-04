const converter = document.querySelector('.input-convert')
const clear_btn = document.querySelector('.clear')
const calculate_btn = document.querySelector('.calculate')
const results = document.querySelector('.answer'); 

let i = 1;
let v = 5;
let x = 10;
let l = 50;
let c = 100;
let d = 500;
let m = 1000;

function clearBtn(){
    clear_btn.addEventListener('click', () => {
        converter.value = '';
        results.innerHTML = '';
    })
}

function calculateBtn(){
    let input;
    let result = 0;
    let valid = false;
    calculate_btn.addEventListener('click', () => {
        input = converter.value;
        input.toLowerCase();
        console.log(input);
        for(let int = 0; int<input.length; int++){
            if(input[int].includes('i') === true){
                result = result + i;
                valid = true;
            }
            else if(input[int].includes('v') === true){
                result = result + v;
                valid = true;
            }
            else if(input[int].includes('x') === true){
                result = result + x;
                valid = true;
            }
            else if(input[int].includes('l') === true){
                result = result + l;
                valid = true;
            }
            else if(input[int].includes('c') === true){
                result = result + c;
                valid = true;
            }
            else if(input[int].includes('d') === true){
                result = result + d;
                valid = true;
            }
            else if(input[int].includes('m') === true){
                result = result + m;
                valid = true;
            }
            else {
                valid = false;
                results.innerHTML = '';
                break;
            }
        }
        if(valid === false){
            results.style.color = 'red';
            results.innerHTML = `Enter a valid Roman Numeral.`;
        } else {
        results.style.color = 'black';
        results.innerHTML = `${input.toUpperCase()} = ${result}`;
        result = 0;
        }
    })
}

clearBtn();
calculateBtn();