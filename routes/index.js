const newsRouter = require('./news')
const displayRouter = require('./display')

const routes = (app) => {
    app.use('/news', newsRouter)
    app.use('/display', displayRouter)
}

module.exports = routes