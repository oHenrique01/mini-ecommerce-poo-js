const Account = require('./Account')
const Product = require('./Product')

const henrique = {
    fullName : 'Henrique Lira São Pedro',
    email : 'test@gmail.com',
    password: 'test123'
}

const myAccount = new Account(henrique)

const teclado = new Product('Teclado Gamer Redragon', 'Teclado Gamer Redragon K617rgb-og Fizz Sunrise Lar Pret Cinz', 206)
const mouse = new Product('Mouse Gamer Redragon', 'Mouse Gamer Redragon Cobra Rgb Preto Preto', 114)

myAccount.cart.addProductsToCartList(teclado, mouse)

const costCart = myAccount.cart.calculatePrice()
const costCartWithDiscount = myAccount.cart.calculatePriceWithDiscount(10)

console.log(myAccount)

console.log(` CARRINHO (${myAccount.fullName})
    Total: R$${costCartWithDiscount.sum.toFixed(2)}
    Desconto: -R$${costCartWithDiscount.discount.toFixed(2)}
    Total a pagar: R$${costCartWithDiscount.priceWithDiscount.toFixed(2)}
    `
)
















