'use strict'

const h1 = '<h1>Lorem ipsum</h1>';

const paragraph = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>';

const image = '<img src="http://via.placeholder.com/350x150" alt="imagen de medidas">';

const div = document.querySelector('.js_div');

div.innerHTML = h1 + paragraph + image;