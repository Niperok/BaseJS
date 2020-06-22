'use strict'

let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");


/**
 * Функция возвращает сумму двух чисел
 * @param {number} a Первое число
 * @param {number} b Второе число
 */
function getSum(a, b) {
    return a + b;
}

/**
 * Функция возвращает разность двух чисел
 * @param {number} a Первое число
 * @param {number} b Второе число
 */
function getSub(a, b) {
    return a - b;
}

/**
 * Функция возвращает отношение двух чисел
 * @param {number} a Первое число
 * @param {number} b Второе число
 */
function getDiv(a, b) {
    return a / b;
}

/**
 * Функция возвращает произведение двух чисел
 * @param {number} a Первое число
 * @param {number} b Второе число
 */
function getMul(a, b) {
    return a * b;
}

alert("Сумма равна: " + getSum(a, b));
alert("Разность равна: " + getSub(a, b));
alert("Отношение равно: " + getDiv(a, b));
alert("Произведение равно: " + getMul(a, b));