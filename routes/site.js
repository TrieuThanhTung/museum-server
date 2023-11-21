const express = require('express')
const route = express.Router()
const SiteController = require('../controlllers/SiteController')
const PopularController = require('../controlllers/PopularController');
const Popular = require('../models/Popular');

route.get('/', SiteController.index);
route.post('/signup', SiteController.signup);
route.post('/login', SiteController.login);

route.get('/popular', PopularController.getPopular);
route.post('/popular', PopularController.createData)
route.patch('/popular', PopularController.addViewed)

route.get('/featured', PopularController.getFeatured);

module.exports = route