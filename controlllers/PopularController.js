const Popular = require('../models/Popular')

class PopularController {
    getPopular = async (req, res) => {
        res.json({
            message: "popular"
        })
    }
}

module.exports = new PopularController();