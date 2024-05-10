const mongoose=require('mongoose');
const express=require('express');
const UserAuthcontroller=require('../controllers/UserAuthController')

const userAuthRouter=express.Router();

userAuthRouter.post("/register",UserAuthcontroller.register);
userAuthRouter.post('/login',UserAuthcontroller.login);






module.exports=userAuthRouter;