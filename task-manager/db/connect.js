/* const express = require("express")
const app = express()
const mongoose = require("mongoose")

const PORT = process.env.PORT || 5000

const startServer = async (url) => {
    try {
        await mongoose.connect(url)
        app.listen(PORT, console.log(`listening to port ${PORT}`))
    } 
    catch (error) {
        console.log(error)
    }
}

module.exports = startServer */