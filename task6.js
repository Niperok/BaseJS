'use strict';

/** Функция выводит в консоль значение параметра
 * и увеличивает его на 1 
 * @param {*} j Значение для вывода в log
 */
function logNumber(j) {
    console.log(j);
    return ++j;
}

for (let i = 0; i < 10; i = logNumber(i)) {
};