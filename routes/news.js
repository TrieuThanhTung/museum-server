const express = require('express')
const route = express.Router()
const NewsController = require('../controlllers/NewsController')

route.get('/', NewsController.index);
route.post('/post', NewsController.post);

module.exports = route
