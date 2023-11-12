const express = require('express')
const route = express.Router()
const GalleryController = require('../controlllers/GalleryController')

route.get('/', GalleryController.index)
route.get('/:titleParam', GalleryController.findGallery)
route.post('/create', GalleryController.create)
route.patch('/update', GalleryController.updateGallery)
route.delete('/:titleParam', GalleryController.deleteAll)

module.exports = route;
