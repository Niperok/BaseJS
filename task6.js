'use strict'

let money = prompt("Введите сумму денег");
let word = "рубль";

let lastUnit = +money.charAt(money.length - 1);

switch (lastUnit) {
    case 1:
        word = "рубль";
        break;
    case 2:
    case 3:
    case 4:
        word = "рубля";
        break;
    case 0:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
        word = "рублей";
        break;
}
if (+money > 10 && +money < 20) {
    word = "рублей";
}

alert("Ваша сумма в " + money + " " + word + " успешно зачислена.");