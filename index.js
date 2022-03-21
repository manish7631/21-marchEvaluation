const express = require("express")

const mongoose = require("mongoose")

const app = express()


const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/EVALUATION")
}

app.listen(2000, async () => {
    try{
        await connect()
    }catch(err){
        console.log(err)
    }

    console.log("listing on port 2000")
})