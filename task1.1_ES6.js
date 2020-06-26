'use strict';

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    
    make25PercentDiscount() {
        this.price *= 0.75;
    }
}

let myProduct = new Product('beer', 100);
myProduct.make25PercentDiscount();
console.log(myProduct);