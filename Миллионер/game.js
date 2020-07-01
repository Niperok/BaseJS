'use strict';

let game = {
    score: 0,
    
    /**
     * Запускает игру.
     */
    run() {
        for (let i = 0; i < questMassive.length; i++) {
            renderer.render(i);
            if(!answerer.answer(i)) {
                break;
            }
            renderer.clear();
        }
        console.log('Конец игры. Правильных ответов: ' + game.score);
        game.score = 0;
        if(prompt('Хотите попробовать снова? Введите да или нет') == 'да') {
            console.clear();
            game.run();
        } else {
            console.log('Спасибо за игру');
        }
    },
    
    // Этот метод выполняется при открытии страницы.
    init() {
        console.log('Добро пожаловать в игру "Кто хочет стать миллионером?"')
        console.log('Чтобы начать игру наберите game.run() и нажмите Enter.');
    }
}

game.init();