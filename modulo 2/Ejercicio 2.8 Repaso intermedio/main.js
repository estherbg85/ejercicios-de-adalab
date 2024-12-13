'use strict';

const btn = document.querySelector('.js_btn');
const estado = document.querySelector('.js_estado');

const draw = () => {
    const number = Math.floor(Math.random() * 100);
    console.log(number);
    estado.classList.remove('hidden');
    estado.classList.remove('estado');        
    if (number % 2 === 0){
        estado.classList.toggle('estado');
    }
    else {
        estado.classList.toggle('hidden');
    }
}

btn.addEventListener('click', (ev) => {

        ev.preventDefault();

        const animo = document.querySelector('.js_animo');       
        const smile = document.querySelector('.js_smile');
        smile.innerHTML = animo.value;
        draw();

})
