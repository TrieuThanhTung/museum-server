const Gallery = require('../models/Gallery')

class GalleryController {
    index = async (req, res) => {
        Gallery.findOne({titleParam: '38-p1'})
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    create = async(req, res) => {
        const resData = await Gallery.create(req.body)
        console.log(resData)
        res.json(resData);
    }

    findGallery = async (req, res) => {
        const titleParam = req.params.titleParam;
        Gallery.findOne({titleParam})
        .exec()
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    deleteAll = async (req, res) => {
        const titleParam = req.params.titleParam
        const resData = await Gallery.deleteMany({ titleParam })
        console.log(resData)
        return resData;
    }
}

module.exports = new GalleryController();