const express=require("express");
const app=express();
require("dotenv").config()
const dbConnect=require("./config/mongoDB")
dbConnect();
const userAuthRouter=require('./routes/UserAuthRoutes')
const UserDataRouter=require('./routes/UserDataRoutes')
const port=process.env.PORT||5000
 const cors=require('cors')


app.get("/",(req,res)=>{
    console.log("working")
    res.send("working baby")
})
app.use(express.json())
app.use(userAuthRouter);
app.use(UserDataRouter)
app.use(cors())

app.listen(port,()=>{
    console.log("port listening at:"+port);
})