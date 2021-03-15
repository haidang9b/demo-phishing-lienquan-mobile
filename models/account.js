const mongoose = require('mongoose')
const accountSchemal = mongoose.Schema({
    type: String,
    username: String,
    password: String
})

const Account =  mongoose.model('Account',accountSchemal)
module.exports = Account