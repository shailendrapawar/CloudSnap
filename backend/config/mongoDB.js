const mongoose=require('mongoose');
require('dotenv').config()
const connectDb=async()=>{
    const res=await mongoose.connect(process.env.DB_URL)
    res?console.log("DB connected"):console.log("DB not connected")
}
module.exports=connectDb;