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

//! Schema
const VisitorSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    }
})

//! Model
const Visitors = mongoose.model("Visitor",VisitorSchema)

//! Connection Check
app.get("/",(req,res)=>{
    res.json({message:"Welcome to Crud app"})
})

//! Create Visitor
app.post("/visitors",async(req,res)=>{
    try {
        const visitorObject ={
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        }
        const visitor = new Visitors(visitorObject)
        res.status(201).json(visitor)
        await visitor.save()
    } catch (error) {
        console.error(error)
        res.status(400).json({message:"Something went wrong with the server !!!"})
    }
    

})



const port = process.env.PORT 
app.listen(port,()=>{
    console.log(`App is running on port ${port}`)
})