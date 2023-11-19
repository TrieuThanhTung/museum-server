const Popular = require('../models/Popular')

class PopularController {
    getPopular = async (req, res) => {
        try {
            const data = await Popular.find({}).sort({viewed: -1}).limit(10);
        
            res.json({data})
        } catch (error) {
            console.log(error)
        }
    }

    createData = async (req, res) => {
        const data = req.body

        try {
            const response = Popular.create(data);

            if(response) {
                res.json(data);
            }
        } catch (error) {
            console.log("create popular:", error)
        }
    }

    addViewed = async(req, res) => {
        const titleParam = req.body.titleParam
        const viewed = req.body.viewed

        try {
            const response = await Popular.findOneAndUpdate({titleParam: titleParam}, {viewed: viewed}, {
                new: true
            })
            if(response) {
                res.json(response);
            }
        } catch (error) {
            console.log(error)
        }
    }


}

module.exports = new PopularController();