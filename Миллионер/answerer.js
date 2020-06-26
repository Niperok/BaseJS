'use strict';

let answerer = {
    /**
     * Принимает ответ от пользователя, проверяет на правильность
     * и ведет счёт игрока.
     */
    answer(questNumber) {
        let answer = prompt('Выберите вариант ответа A, B, C или D. Для выхода нажмите отмена.');
        if (answer == null) {
            return false;
        }
        switch(answer.toUpperCase()) {
            case 'A':
            case 'B':
            case 'C':
            case 'D':
                if (answer.toUpperCase() == questMassive[questNumber].trueAnswer) {
                    game.score += 1;
                    console.log('Ответ верный.')
                    return true;
                } else {
                    console.log('Ответ не верный.')
                    return true;
                }     
        }
        return false;
    }
}