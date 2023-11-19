const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Popular = new Schema({
    title: { type: Array, default: '' },
    titleParam: { type: String, default: '' },
    images: { type: Array, default: [] },
    viewed: {type: Number, default: 0},
})

module.exports = mongoose.model('Popular', Popular)