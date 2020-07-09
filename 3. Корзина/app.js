'use strict';

const buttons = document.body.querySelectorAll('button');
const tbody = document.body.querySelector('tbody');

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        let id = this.dataset.id;
        let price = this.dataset.price;
        let name = this.dataset.name;
        cart.addProduct({ id: id, price: price, name: name, count: 1 });
    })
})

let cart = {
    dataBase: [],
    sum: 0,

    /** Метод добавляет товар в корзину (основной метод)
     * 
     * @param {id, price, name, count} product 
     */
    addProduct(product) {
        this.addToDataBase(product);
        this.calcSum();
        this.clearCart();
        this.renderCart();
    },

    /** Метод добавляет информацию о товаре в 
     * базу данных корзины
     * 
     * @param {id, price, name, count} product 
     */
    addToDataBase(product) {
        if (!this.isProductExist(product)) {
            this.dataBase.push(product);
        };
    },


    /** Метод проверяет, есть ли такой товар 
     * в базе данных корзины
     * 
     * @param {id, price, name, count} product 
     */
    isProductExist(product) {
        let answer = false;
        this.dataBase.forEach(function (element) {
            if (element.id == product.id) {
                cart.increaseCount(element);
                answer = true;
            }
        });
        return answer;
    },

    /** Метод увеличивает количество одного товара
     * в базе данных корзины
     * 
     * @param {id, price, name, count} product 
     */
    increaseCount(element) {
        element.count++;
    },

    /** Метод выполняет расчет общей суммы
     * заказа
     */
    calcSum() {
        this.sum = 0;
        this.dataBase.forEach(function (element) {
            cart.sum += element.price * element.count;
        });
    },

    /** Метод очищает отображаемое содержимое 
     * корзины
     */
    clearCart() {
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        };
    },

    /** Метод отображает содержимое 
     * корзины
     */
    renderCart() {
        this.dataBase.forEach(function (element) {
            tbody.insertAdjacentHTML('beforeend', `
                <tr>
                    <td>${element.id}</td>
                    <td>${element.name}</td>
                    <td>${element.price}</td>
                    <td>${element.count}</td>
                </tr>           
            `);
        });
        tbody.insertAdjacentHTML('beforeend', `
            <tr>
                <td></td>
                <td></td>
                <td>Итого: ${this.sum}</td>
                <td></td>
            </tr> 
        `);
    }
};





