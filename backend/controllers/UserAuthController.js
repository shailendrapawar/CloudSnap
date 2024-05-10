const bcrypt = require('bcrypt');
const UserAuthModel = require('../models/UserAuthModel')
class UserAuthcontroller {
    static register = async (req, res) => {
        const { name, email, password, number } = req.body

        const isUser = await UserAuthModel.findOne({
            email: email
        })

        if (!isUser) {
            const salt = await bcrypt.genSalt(10);
            const hashPass = await bcrypt.hash(password, salt)
            const newUser = new UserAuthModel({
                name: name,
                email: email,
                password: hashPass,
                number: number
            })

            const dbRes = await newUser.save();
            res.send({
                user: dbRes,
                status: 200
            })
        } else {
            res.send({
                msg: "User already exists",
                status: 400
            })
        }
    }

    
    static login = async (req, res) => {
        const { email, password } = req.body
        const dbRes = await UserAuthModel.findOne({
            email: email
        })

        if (!dbRes) {
            res.send({
                msg: "user Not resgistered",
                status: 400
            })
        } else {
            const isUser = await bcrypt.compare(password, dbRes.password)
            if (isUser) {
                res.send({
                    msg: "Authentic User",
                    status: 201
                })
            } else {
                res.send({
                    msg: "Wrong credentials",
                    status: 400
                })
            }
        }

    }
}

module.exports = UserAuthcontroller