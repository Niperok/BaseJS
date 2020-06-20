'use strict'

let arg1 = +prompt("Введите первое число");
let arg2 = +prompt("Введите второе число");
let operation = +prompt("Введите номер операции (1 - Сложение, 2 - Вычитание, 3 - Деление, 4 - умножение)");

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

/**Фунция возвращает результат одной из четырех операций:
 * 1 - Сложение, 2 - Вычитание, 3 - Деление, 4 - умножение
 * @param {*} arg1 Первое число
 * @param {*} arg2 Второе число
 * @param {*} operation Номер операции
 */
function getOperation(arg1, arg2, operation) {
    switch (operation) {
        case 1:
            return getSum(arg1, arg2);
        case 2:
            return getSub(arg1, arg2);
        case 3:
            return getDiv(arg1, arg2);
        case 4:
            return getMul(arg1, arg2);
        default:
            return "Нет такой операции"
    }
}

alert("Результат: " + getOperation(arg1, arg2, operation));