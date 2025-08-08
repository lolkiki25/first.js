const red = document.createElement('div');
const blue = document.createElement('div');
const body = document.querySelector('body');

red.style.width = '50%';
blue.style.width = '50%';
red.classList('red');
blue.classList('blue');

body.appendChild(red);
body.appendChild(blue);
red.addEventListener('click', () => {
    
})
