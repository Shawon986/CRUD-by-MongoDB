const express = require("express")
const bodyParser = require("body-parser")
const dotenv = require("dotenv").config()
const mongoose = require("mongoose")
const app = express()
app.use(bodyParser.json())

//! MongoDb connection
const uri = process.env.DB_URI
mongoose.connect(uri,{useNewUrlParser:true})
.then(()=>{
    console.log("DB is connected")
})
.catch((error)=>{
    console.error("DB is not connected")
})



//! Connection Check
app.get("/",(req,res)=>{
    res.json({message:"Welcome to Crud app"})
})



const port = process.env.PORT 
app.listen(port,()=>{
    console.log(`App is running on port ${port}`)
})