const User=require("../models/userModel")


//user creational api
const registerUser=async(req,res)=>{
    try {
        const {name,email,password}=req.body

        if(!name||!email||!password){
            res.status(400).json({
                sucess:false,
                message:"Please fill all fields"
            })
        }else{
            const emailchacker=await User.findOne({email:email})

            if(emailchacker){
                res.status(400).json({
                    sucess:false,
                    message:"Email exists"
                })
            }else{
                const user =new User({
                    name,email,password
                })
                await user.save()

                res.status(200).json({
                    sucess:true,
                    response:user
                })
            }
        }
    } catch (error) {
        console.error(error)
    }
}

module.exports={registerUser}