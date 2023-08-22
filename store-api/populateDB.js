const mongoose = require("mongoose")
require("dotenv").config()

const MONGO_URI = process.env.MONGO_URI
const productsArr = require("./products.json")
const Products = require("./models/products")

const populateDB = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        await Products.deleteMany()
        await Products.create(productsArr)
        console.log("Success")
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

populateDB()