/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

/*Invul naam*/


var filterButton = document.querySelector('.knop');
var filterForm = document.querySelector('.filter');
var popUp = document.querySelector('.popup');

function show() {
    filterForm.classList.toggle('zichtbaar');
}

function bericht() {
    alert("Let op! Download het verhaal op het device waarop u gaat lezen.");
}

popUp.addEventListener('click', bericht);
filterButton.addEventListener('click', show);
