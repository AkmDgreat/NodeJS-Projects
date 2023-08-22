const mongoose = require("mongoose")
const express = require("express")
const app = express()
require("dotenv").config()

const route = require("./router/route")

const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI

app.use("/api/v1", route)

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        app.listen(PORT, () => console.log(`listening to port ${PORT}...`))
    } catch (error) {
        console.log(error)
    }
}

connectDB()