const User = require('../../User')
const Product = require('./Product')

const Henrique = new User ('Henrique Lira', 'test@gmail.com', 'test123')

console.log(Henrique.login('test@gmail.com', 'test123'))

const teclado = new Product('Teclado Gamer Redragon', 'Teclado Gamer Redragon K617rgb-og Fizz Sunrise Lar Pret Cinz', 206)
const mouse = new Product('Mouse Gamer Redragon', 'Mouse Gamer Redragon Cobra Rgb Preto Preto', 114)

teclado.addToStock(5)
mouse.addToStock(2)


Henrique.cart.addProductsToCartList(teclado, mouse)

console.log("Carrinho:", Henrique.cart.products)

const total = Henrique.cart.calculatePrice()
console.log(`Total a pagar: R$${total.toFixed(2)}`)

const discount = Henrique.cart.calculatePriceWithDiscount(5)

console.log(discount)










