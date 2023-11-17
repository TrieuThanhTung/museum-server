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
        try {
            const user = await User.findOne(authData, {_id: 1, email: 1})
            if(user) {
                res.json(user)
            } else {
                res.json('0')
            }
        } catch (error) {
            console.log(error)
        }
    }

    // user

    async getUser(req, res) {
        const id = req.params.id
        try {
            const response = await User.findById(id, 
                {email: 1, name: 1, age: 1, gender: 1})
            if(response) {
                res.json(response)
            }
        } catch (error) {
            console.log(error)
        }
    }

    async updateProfile(req, res) {
        const id = req.params.id;
        const data = req.body;

        try {
            if(data.password !== null) {
                res.json({message: "Cannot change password by update profile"})
                return;
            }

            const response = await User.findByIdAndUpdate(id, data, {
                fields: {email: 1, name: 1, age: 1, gender: 1},
                new: true,
            })
            if(response) {
                res.json(response)
                console.log("update profile succesfully")
            }
        } catch (error) {
            console.log(error)
        }
    }

    async changePassword(req, res) {
        const id = req.params.id;
        const oldPassword = req.body.oldPassword
        const password = req.body.password;
        try {
            const response = await User.findOneAndUpdate({_id: id, password: oldPassword}, {password: password}, {
                new: true,
            })
            if(response) {
                res.json({message: "change password successfully"})
            } else {
                res.json({message: "change password fail"})
            }
        } catch (error) {
            console.log(error)
        }
    }
    

    // like
    async like(req, res) {
        const id = req.params.id
        const data = req.body;
       
        try {
            const response = await User.findOneAndUpdate({_id: id}, data, {
                fields: {email: 1, name: 1, like: 1},
                new: true}
                );
            if(response) {
                res.json(response)
                console.log("update exhibit like")
            } else {
                res.json({
                    "message": "update fail."
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    async getLiked(req, res) {
        const id = req.params.id     
        try {
            const response = await User.findById(id, {email: 1, name: 1, like: 1});
            if(response) {
                res.json(response)
            } else {
                res.json({
                    "message": "get fail."
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new SiteController()