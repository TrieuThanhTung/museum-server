const User = require('../models/User')

class SiteController {
    index(req, res) {
        User.find({})
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    async signup(req, res) {
        const newUser = req.body
        const isFind = await User.findOne({email: newUser.email})
        if(!isFind) {
            const user = await User.create(newUser)
            res.json({_id: user._id, email: user.email})
        } else {
            res.json('0');
        }
    }

    async login(req, res) {
        const authData = req.body
        const user = await User.findOne(authData, {_id: 1, email: 1})
        if(user) {
            res.json(user)
        } else {
            res.json('0')
        }
    }

}

module.exports = new SiteController()