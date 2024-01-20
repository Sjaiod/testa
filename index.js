const express=require("express");
const cors=require("cors")
const dotenv=require("dotenv")
dotenv.config({path:"./config/config.env"})
const PORT=process.env.PORT;

const app=express();
require("./config/DB")
const userRouter=require("./routes/userRoutes")


app.use(cors())
app.use(express.json())

//app.use("/",(req,res)=>{
  //  res.json("Hello")
//})

app.use("/user",userRouter)


app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})



//successfully user created