const siteRouter = require('./site')
const newsRouter = require('./news')
const displayRouter = require('./display')
const galleryRouter = require('./gallery')

const routes = (app) => {
    app.use('/', siteRouter)
    app.use('/news', newsRouter)
    app.use('/display', displayRouter)
    app.use('/gallery',galleryRouter)
}

module.exports = routes