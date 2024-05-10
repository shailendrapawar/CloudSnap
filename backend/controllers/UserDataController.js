const cloudinary = require('cloudinary').v2
require('dotenv').config();
// const { timeStamp } = require('console');
const UserDataModel = require("../models/UserDataModel")
const UserAuthModel = require('../models/UserAuthModel')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})
const fs = require('fs')

class UserDataController {

    static getAllImages=async(req,res)=>{
        const {userId}=req.body;
        
    }

    static uploadImage = async (req, res) => {
        const { email } = req.body
        const files = req.files;
        const filesLength = files.length;

        const uploadCount = await files.map(async (file, i) => {
            let cloudRes = await cloudinary.uploader.upload(file.path)
            if (cloudRes) {

                const newImage = new UserDataModel({
                    owner: email,
                    imageName: cloudRes.original_filename,
                    imageUrl: cloudRes.secure_url,
                    publicId: cloudRes.public_id
                })

                const isCreated = await newImage.save();
                console.log(isCreated)
                if (!isCreated) {
                    return {
                        msg: "url not saved in database",
                        status: 400
                    }
                }

                else {
                    fs.unlink(file.path, (err) => {
                        err ? console.log(err) : console.log("success in deleting file")
                    })

                    const addImageId = await UserAuthModel.updateOne({
                        email: email
                    }, {
                        $push: {
                            data: isCreated._id
                        }
                    })

                    if (addImageId) {
                        return {
                            msg: "uploading successfull",
                            status: 200
                        };
                    } else {
                        return {
                            msg: "uploading unsuccessfull",
                            status: 200
                        };
                    }

                }

            } else {
                return {
                    msg: "uploading failed try again",
                    status: 400
                }
            }
        });

        Promise.all(uploadCount).then((v) => {
            res.send({
                msg: `All files uploaded`,
                upload_count: filesLength,
                status: 200
            })
        }).catch((err) => {
            console.log(err)
            res.send({
                msg: `some error detected `,
                status: 400
            })
        })

    }

    static deleteImage = async (req, res) => {
        const publicId = req.body.publicId;
        const { id } = req.params;


        const removeImgId = UserAuthModel.updateOne({
            email: req.body.email
        }, {
            $pull: { data: id }
        })

        const dbRes = await UserDataModel.findByIdAndDelete({
            _id: id
        })

        const cloudRes = await cloudinary.uploader.destroy(`${publicId}`, (err) => {
            console.log(err)
        })

        const result = await Promise.all([dbRes, cloudRes, removeImgId])
        if (result) {
            res.json({
                msg: "Image deleted successfully",
                status: 200
            })
        } else {
            res.json({
                msg: "Image not deleted",
                status: 400
            })
        }

    }

    static toggleFav = async (req, res) => {
        const { id } = req.params;
        const dbRes = await UserDataModel.findById({
            _id: id
        })
        let setCategory;
        let msg = ""
        if (dbRes.category == "none") {
            setCategory = "favourite"
            msg = "added to favourite"
        } else {
            setCategory = "none"
            msg = "removed from favourite"
        }
        const isUpdate = await UserDataModel.updateOne(
            { _id: id },
            {
                $set: {
                    category: setCategory
                }
            })
        if (isUpdate) {
            res.send({
                msg: msg,
                status: 200
            })
        } else {
            res.send({
                msg: "error in toggling",
                status: 200
            })
        }
    }

    static updateProfilePic = async (req, res) => {
        const { userId } = req.params
        const file = req.file
        console.log(file)

        let cloudRes = await cloudinary.uploader.upload(file.path)
        console.log(cloudRes)

        if (cloudRes) {
            const dbRes = UserAuthModel.findByIdAndUpdate({
                _id: userId
            }, {
                $set: {
                    profilePic: ""
                }
            })

            if (dbRes) {
                res.send({
                    msg: "Profile pic updated",
                    status: 200
                })
            } else {
                res.send({
                    msg: "Profile pic not added in db",
                    status: 400
                })
            }

        } else {
            res.send({
                msg: "Profile not uploaded to cloud",
                status: 400
            })
        }

    }
}

module.exports = UserDataController