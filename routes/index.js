const siteRouter = require('./site')
const newsRouter = require('./news')
const galleryRouter = require('./gallery')

const routes = (app) => {
    app.use('/', siteRouter)
    app.use('/news', newsRouter)
    app.use('/gallery',galleryRouter)
}

module.exports = routes