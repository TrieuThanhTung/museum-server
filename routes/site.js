const express = require('express')
const route = express.Router()
const SiteController = require('../controlllers/SiteController')

route.get('/', SiteController.index);
route.post('/signup', SiteController.signup);
route.post('/login', SiteController.login)

module.exports = route