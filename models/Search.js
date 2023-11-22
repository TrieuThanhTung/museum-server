const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Search = new Schema({
    title: { type: String, default: '' },
    titleParam: { type: String, default: '' },
    thumbnail: {type: String, default: ''}
})

module.exports = mongoose.model('Search', Search)