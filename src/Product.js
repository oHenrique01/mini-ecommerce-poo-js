class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0

    }

    addToStock(quantity) {
         this.inStock += quantity
    }

    removeFromStock(quantity) {
        if(quantity > this.inStock) {
            console.log("Estoque insuficiente")
        } else {
            this.inStock -= quantity
        }
    }

}

module.exports = Product