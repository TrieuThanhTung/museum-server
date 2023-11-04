const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Gallery = new Schema({
    url: {type: String, default: ''},
    parentURL: {type: String, default: ''},
    title: { type: Array, default: '' },
    titleParam: { type: String, default: '' },
    paragraph: { type: Array, default: [] },
    images: { type: Array, default: [] },
    navigator: { type: Array, default: [] }
})

module.exports = mongoose.model('Galeries', Gallery)