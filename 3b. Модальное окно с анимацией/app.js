'use strict';

const openButton = document.body.querySelector('button');
const wrapWindow = document.body.querySelector('.wrap');
const closeButton = document.body.querySelector('.close');

openButton.addEventListener('click', function () {
    wrapWindow.classList.remove('hidden');
    wrapWindow.classList.remove('animate__hinge');
    wrapWindow.classList.add('animate__jackInTheBox');
})

closeButton.addEventListener('click', function () {
    wrapWindow.classList.remove('animate__jackInTheBox');
    wrapWindow.classList.add('animate__hinge');
})