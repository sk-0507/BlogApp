const mongoose = require("mongoose")
const dotenv = require('dotenv')
dotenv.config()
const url =process.env.MONGO_URL
const Connection = async () =>{
   await mongoose.connect(url).then(()=>{
        console.log("Database is connected!")
    })
}

module.exports ={
    Connection
}