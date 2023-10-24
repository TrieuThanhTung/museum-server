const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const News = new Schema({
    title: String,
    image: Array,
    description: String
});

module.exports = mongoose.model("News", News);