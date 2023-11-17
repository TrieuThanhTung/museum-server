const express = require('express')
const route = express.Router()
const SiteController = require('../controlllers/SiteController')

route.get('/', SiteController.index);
route.post('/signup', SiteController.signup);
route.post('/login', SiteController.login);
route.patch('/:id/like', SiteController.like)
route.get('/:id/like', SiteController.getLiked)

module.exports = route