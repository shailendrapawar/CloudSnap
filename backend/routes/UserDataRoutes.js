const express=require('express');
const UserDataController=require('../controllers/UserDataController')
const UserDataRouter=express.Router()
const {v4:uuidv4}=require('uuid')
const multer=require("multer")

const myStorage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./uploads")
    },
    filename:function(req,file,cb){
        const random=uuidv4();
        cb(null,random+"="+file.originalname)
    }
})

const myUpload=multer({storage:myStorage})

UserDataRouter.post("/uploadImage",myUpload.array("image",5),UserDataController.uploadImage)
UserDataRouter.delete("/deleteImage/:id",UserDataController.deleteImage)
UserDataRouter.post("/toggleFav/:id",UserDataController.toggleFav)
UserDataRouter.put("/uploadProfilePic/:id",myUpload.single("profileImage"),UserDataController.updateProfilePic)
UserDataRouter.get("/getAllImages/:id",UserDataController.getAllImages)





module.exports=UserDataRouter