const Cart = require('./Cart')

class Account {
    #password

    constructor(user) {
        this.fullName = user.fullName
        this.email = user.email
        this.#password = user.password
        this.cart = new Cart()
    }

    login(email, password) {
        if (this.#authenticate(email, password)) {
            return "Login realizado com sucesso!"
        } else {
            return "Email ou senha incorreto"
        }
    }

    #authenticate(email, password) {
        return email === this.email && password === this.#password
    }

}

module.exports = Account