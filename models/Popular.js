const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Popular = new Schema({
    title: { type: Array, default: '' },
    titleParam: { type: String, default: '' },
    thumbnail: {type: String, default: ''},
    viewed: {type: Number, default: 0},
    date: {type: Date, default: Date.now()}
})

module.exports = mongoose.model('Popular', Popular)