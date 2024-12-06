'use strict'

const text = document.querySelector('.js_texto');
const paragraph = document.querySelector('.js_paragraph');

text.addEventListener('keyup', (ev) => {
    console.log(ev.currentTarget);
    console.log(ev.currentTarget.value);
    paragraph.innerHTML = (ev.currentTarget.value);
})

