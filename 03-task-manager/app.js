require("dotenv").config()

const express = require("express")
const app = express()
const { StatusCodes } = require("http-status-codes")
const mongoose = require("mongoose")

const router = require("./Routes/route")
const errorHandlerMiddleware = require("./Middleware/errorHandler")
//const startServer = require("./db/connect")

const MONGO_URI = process.env.MONGO_URI 
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use("/api/v1", router)
app.use(errorHandlerMiddleware)

app.get("/api/v1", (req, res) => {
    res.status(StatusCodes.OK).json("home")
})

const startServer = async (url) => {
    try {
        await mongoose.connect(url)
        app.listen(PORT, console.log(`listening to port ${PORT}...`))
    } 
    catch (error) {
        console.log(error)
    }
}

startServer(MONGO_URI)

// for some reason, the following doesn't work:
// define startServer() in db/connect.js
// call startServer(MONGO_URI) in app.js
// console shows "SERVER LISTENING TO PORT 5000", but when I send request from postman, it throws "api/v1/tasks" doesn't exist

// copy pasting the startServer() to this file, and then invoking startServer(MONGO_URI) works
// i think it is because APP.LISTEN MUST BE IN SAME FILE AS APP.JS




