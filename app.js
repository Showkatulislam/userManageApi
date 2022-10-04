const express = require('express');
const cors = require('cors');
const UserRoutes =require('./routes/users.routes')

const app=express()

//middleware 
app.use(express.json())
app.use(cors())

app.use("/user",UserRoutes)




app.use("*",(req,res)=>{
    res.status(404).send("Api Not Found 404")
})

module.exports=app;