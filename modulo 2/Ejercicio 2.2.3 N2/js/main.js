'use strict';

const btnone = document.querySelector('.js_btnone');
const btntwo = document.querySelector('.js_btntwo');

btnone.addEventListener('click', (ev) => {

    ev.currentTarget.classList.toggle('button');
});

btntwo.addEventListener('click', (ev) => {
    ev.currentTarget.classList.toggle('button');
});


