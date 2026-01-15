const Cart = require('./mini-ecommerce-poo-js/src/Cart')

class User {
    constructor(fullName, email, password) {
        this.fullName = fullName
        this.email = email
        this.password = password
        this.cart = new Cart()
    }

    login(newEmail, newPassword) {
        if (newEmail === this.email && newPassword === this.password) {
            return "Login realizado com sucesso!"
        } else {
            return "Email ou senha incorreto"
        }
    }

}

module.exports = User