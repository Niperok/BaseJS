'use strict';

const openButton = document.body.querySelector('button');
const wrapWindow = document.body.querySelector('.wrap');
const closeButton = document.body.querySelector('.close');

openButton.addEventListener('click', function() {
    wrapWindow.classList.remove('hidden');
})

closeButton.addEventListener('click', function(){
    wrapWindow.classList.add('hidden');
})