const express = require('express')
const route = express.Router()
const DisplayController = require('../controlllers/Displaycontroller')

route.get('/', DisplayController.index)
route.post('/post', DisplayController.post)

module.exports = route