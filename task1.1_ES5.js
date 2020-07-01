'use strict';

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function() {
    this.price *= 0.75;
}

let myProduct = new Product('beer', 100);
myProduct.make25PercentDiscount();
console.log(myProduct);