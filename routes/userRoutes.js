const express=require("express")
const router=express.Router()
const {registerUser}=require("../apis/userApi")


router.post("/register",registerUser)

module.exports=router