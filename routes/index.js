const siteRouter = require('./site')
const newsRouter = require('./news')
const galleryRouter = require('./gallery')
const userRouter = require('./user')

const routes = (app) => {
    app.use('/', siteRouter)
    app.use('/news', newsRouter)
    app.use('/gallery',galleryRouter)
    app.use('/user', userRouter)
}

module.exports = routes