const express = require('express')
const route = express.Router()
const SiteController = require('../controlllers/SiteController')

route.get('/:id', SiteController.getUser)
route.patch('/:id', SiteController.updateProfile);

route.patch('/:id/password', SiteController.changePassword);

route.patch('/:id/like', SiteController.like)
route.get('/:id/like', SiteController.getLiked)

module.exports = route