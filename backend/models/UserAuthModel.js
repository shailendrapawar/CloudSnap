const mongoose=require('mongoose');
const UserAuthSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:Number
    },
    password:{
        type:String,
        required:true
    },
    profilePic:{
        type:String,
        default:""
    },
    data:[
        {
            type:mongoose.Types.ObjectId,
            ref:"UserDataModel",
            default:[]
        }
    ]
})

const UserAuthModel=mongoose.model("UserAuthModel",UserAuthSchema);

module.exports=UserAuthModel;