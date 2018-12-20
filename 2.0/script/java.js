/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

/*Invul naam*/



var filterButton = document.querySelector('button');
var filterform = document.querySelector('.filter');

function show() {
    filterform.classList.toggle('zichtbaar');
}

filterButton.addEventListener('click', show);
