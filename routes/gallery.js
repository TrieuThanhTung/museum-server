const express = require('express')
const route = express.Router()
const GalleryController = require('../controlllers/GalleryController')
const PopularController = require('../controlllers/PopularController')

route.get('/', GalleryController.index)
route.get('/:titleParam', GalleryController.findGallery)

route.post('/create', GalleryController.create)
route.patch('/update', GalleryController.updateGallery)
route.delete('/:titleParam', GalleryController.deleteAll)

route.post('/search', GalleryController.search)
// route.patch('/search', GalleryController.editSearch)
// route.post('/create/search', GalleryController.createSearch)

module.exports = route;
