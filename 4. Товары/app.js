'use strict';

const buttons = document.body.querySelectorAll('button');

buttons.forEach(function(button){
    button.addEventListener('click', function(){
        if (this.textContent == 'Отмена') {
            this.parentNode.querySelector('.image').style.display = 'flex';
            this.textContent = 'Подробнее';
            let removeText = this.parentNode.querySelector('.desc');
            this.parentNode.removeChild(removeText);
            return;
        }
        this.parentNode.querySelector('.image').style.display = 'none';
        this.textContent = 'Отмена';
        this.insertAdjacentHTML('beforeBegin',
        '<div class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda eos corporis, facilis magni debitis, itaque ut quos maiores error.</div>');
    });
});