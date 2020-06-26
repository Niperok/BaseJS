'use strict';

class Questions {
    constructor(question, answerA, answerB, answerC, answerD, trueAnswer) {
       this.question = question;
        this.answerA = answerA;
        this.answerB = answerB;
        this.answerC = answerC;
        this.answerD = answerD;
        this.trueAnswer = trueAnswer;
    }
    
}
let questMassive = [
    new Questions(
        'Сколько струн у классической гитары?',
        '4', '5', '6', '7', 'C'),
    new Questions(
        'Какой самый низкий по звучанию духовой музыкальный инструмент?', 
        'Волторна', 'Туба', 'Фогот', 'Габой', 'B'),
    new Questions(
        'Какой самый высокий тембр мужского голоса?', 
        'Тенор', 'Баритон', 'Бас', 'Альт', 'D'),
    new Questions(
        'Какой размер такта используется в музыке Вальс?', 
        '4/4', '3/4', '7/8', '5/4', 'B'),
    new Questions(
        'Что означает слово "Форте" в музыке?', 
        'Громко', 'Тихо', 'Весело', 'Грустно', 'A')];
