'use strict';

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg"
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78
    },
];

/** Функция выполняет сравнение свойства price 
 * для двух объектов. 
 * @param {*} a Первый объект
 * @param {*} b Второй объект
 */
function comparePrice(a, b) {
    return a.price - b.price;
}

let withPhotos = products.filter(function (product) {
    return product.photos != null;
})
console.log(withPhotos);

console.log(products.sort(comparePrice));