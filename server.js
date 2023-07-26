const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json())



const port = process.env.PORT 
app.listen(port,()=>{
    console.log(`App is running on port ${port}`)
})