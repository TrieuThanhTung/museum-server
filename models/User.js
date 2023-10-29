const mongoose = require('mongoose')

const Schema = mongoose.Schema

const User = new Schema({
    email: { type: String, default: '' },
    password: { type: String, default: '' },
    name: {type: String, default: ''},
    age: {type: Number, default: 0},
    gender: {type: String, default: null},
    like: {type: Array, default: []}
})

module.exports = mongoose.model("User", User)