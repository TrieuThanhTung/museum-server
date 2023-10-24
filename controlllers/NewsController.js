const News = require("../models/News")

class NewsController {
    index = (req, res) => {
         News.find({})
         .then((data) => {
            return res.json(data);
         })
         .catch((error) => {
            console.log(error)
         })
    }

    async post(req, res) {
        await News.create(req.body); 
        console.log("create a News");
    }
}

module.exports = new NewsController();