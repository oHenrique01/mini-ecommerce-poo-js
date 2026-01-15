const Product = require("./Product")

class Cart  {
    constructor(){
        this.products = []
    }

    addProductsToCartList(...products) {
        this.products.push(...products)
    }

    calculatePrice() {
        const sum = this.products.reduce((total, product) => total + product.price, 0)

        return sum
    }

    calculatePriceWithDiscount(percent) {
        const sum = this.products.reduce((total, product) => total + product.price, 0)

        const discount = (sum * percent) / 100
        const priceWithDiscount = sum - discount

        return {
        discount,
        priceWithDiscount}
    }

}

module.exports = Cart