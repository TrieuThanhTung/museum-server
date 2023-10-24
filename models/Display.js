const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Display = new Schema({
    title: String,
    image: Array,
    description: String
})

module.exports = mongoose.model("Display", Display)