'use strict';

class MyNumber {
    constructor(num) {
        if (!Number.isInteger(num)) {
            console.log('Не является целым числом');
            return {};
        }
        if (num < 0 || num > 999) {
            console.log('Число вне диапазона');
            return {};
        }
        this.units = num % 10;
        this.tens = Math.floor((num % 100) / 10);
        this.hundereds = Math.floor(num / 100);
    }
}

let myNum1 = new MyNumber(+prompt('Введите целое число от 0 до 999'));
console.log(myNum1);