const Display = require('../models/Display')

class DisplayController {
    index = (req, res) => {
        Display.find({})
        .then((response) => {
            res.json(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    post = async (req, res) => {
        await Display.create(req.body);
        console.log("Create a new product display")
    }
}

module.exports = new DisplayController()