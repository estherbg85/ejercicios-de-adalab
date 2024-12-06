'use script';

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const movies = document.querySelector('.js_movies');
const btn = document.querySelector('.js_btn');
const select = document.querySelector('.js_select');

btn.addEventListener('click', (ev) => {

    movies.innerHTML = '<li>'+inception+'</li>'+ 
        '<li>'+theButterFlyEffect+'</list>'+ 
        '<li>'+eternalSunshineOfTheSM+'</li>'+ 
        '<li>'+blueVelvet+'</li'+ 
        '<li>'+split+'</li>';

})

movies.addEventListener('click', (ev) => {

   select.innerHTML= 'La pelicula seleccionada es: ' + ev.target.innerHTML;
   console.log(ev.target.innerHTML);
   
 });
